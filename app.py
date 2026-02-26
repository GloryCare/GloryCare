"""
GloryCare Backend Server
- Gemini AI API cho phần "Trò chuyện AI" (chat)
- WebSocket peer chat cho phần "Tâm sự tự do" (general)

Cài đặt:
    pip install flask flask-socketio flask-cors google-generativeai eventlet

Chạy:
    GEMINI_API_KEY=your_key_here python app.py
"""

import os
import uuid
import time
from flask import Flask, request, jsonify, send_from_directory
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask_cors import CORS
from google import genai

# Serve frontend files từ cùng thư mục với app.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=BASE_DIR, static_url_path='')
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'glorycare-secret-2024')
CORS(app, origins="*")

socketio = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')

# ─────────────────────────────────────────────
# GEMINI AI CONFIG
# ─────────────────────────────────────────────
GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')

if GEMINI_API_KEY:
    gemini_client = genai.Client(api_key=GEMINI_API_KEY)
else:
    gemini_client = None
    print("⚠️  GEMINI_API_KEY chưa được cấu hình. Phần AI chat sẽ dùng fallback.")


GLORYCARE_SYSTEM_PROMPT = """Bạn là GloryCare, một trợ lý AI hỗ trợ tâm lý ấm áp, đồng cảm dành cho học sinh Việt Nam.

Nguyên tắc:
- Luôn trò chuyện bằng tiếng Việt, giọng điệu như người bạn thân
- Lắng nghe và phản chiếu cảm xúc trước khi đưa ra lời khuyên
- Không phán xét, không áp đặt
- Đặt câu hỏi mở để hiểu sâu hơn
- Câu trả lời ngắn gọn, tự nhiên (2-4 câu)
- Dùng emoji nhẹ nhàng khi phù hợp (🌸 🌿 💛 ✨)
- Nếu người dùng có dấu hiệu nguy hiểm/tự hại, hãy khuyến khích họ tìm kiếm sự giúp đỡ chuyên nghiệp ngay lập tức

Tuyệt đối không được:
- Đưa ra chẩn đoán y tế
- Giả vờ là con người thật
- Cung cấp thông tin có hại"""


# ─────────────────────────────────────────────
# PEER CHAT STATE (in-memory, production nên dùng Redis)
# ─────────────────────────────────────────────
waiting_queue = []          # danh sách socket_id đang chờ theo thứ tự FIFO
active_pairs = {}           # socket_id -> room_id
user_info = {}              # socket_id -> {nickname, room_id, topic, joined_at, status}
                            # status: 'waiting' | 'matched' | 'inactive'

TOPICS_LABELS = {
    'bro': '💙 Nói chuyện thoải mái',
    'study': '📚 Áp lực học tập',
    'family': '🏡 Chuyện gia đình',
    'love': '💌 Tình cảm',
    'lonely': '🫂 Cô đơn',
    'any': '✨ Bất kỳ chủ đề nào',
}


# ─────────────────────────────────────────────
# REST API - GEMINI CHAT
# ─────────────────────────────────────────────

@app.route('/api/chat', methods=['POST'])
def ai_chat():
    """
    POST /api/chat
    Body: { "messages": [{"role": "user"|"assistant", "content": "..."}], "topic": "chat" }
    """
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid JSON"}), 400

    messages = data.get('messages', [])
    if not messages:
        return jsonify({"error": "No messages provided"}), 400

    # Fallback khi không có API key
    if not gemini_client:
        fallbacks = [
            "Mình nghe bạn rồi 🌸 Bạn có thể kể thêm không?",
            "Cảm ơn bạn đã chia sẻ điều này với mình. Bạn đang cảm thấy thế nào bây giờ? 💛",
            "Mình hiểu bạn đang trải qua điều không dễ. Hãy tiếp tục nhé, mình đang ở đây 🌿",
        ]
        import random
        return jsonify({"reply": random.choice(fallbacks)})

    try:
        # Xây dựng prompt với toàn bộ lịch sử hội thoại
        conversation = f"System: {GLORYCARE_SYSTEM_PROMPT}\n\n"
        for msg in messages:
            role = "Người dùng" if msg["role"] == "user" else "GloryCare"
            conversation += f"{role}: {msg['content']}\n"
        conversation += "GloryCare:"

        response = gemini_client.models.generate_content(
            model="gemma-3-27b-it",  # Add "-it" for chat optimization
            contents=conversation
        )
        reply = response.text.strip()

        return jsonify({"reply": reply})

    except Exception as e:
        print(f"Gemini error: {e}")
        return jsonify({
            "reply": "Mình đang gặp chút sự cố kỹ thuật 🌸 Bạn thử lại một lúc nữa nhé?"
        })


# ─────────────────────────────────────────────
# REST API - HEALTH CHECK
# ─────────────────────────────────────────────

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        "status": "ok",
        "gemini": bool(gemini_client),
        "waiting": len(waiting_queue),
        "active_pairs": len(active_pairs) // 2
    })


# ─────────────────────────────────────────────
# MATCHING LOGIC HELPERS
# ─────────────────────────────────────────────

def find_best_match(user_sid, user_topic):
    """
    Tìm partner phù hợp nhất cho user.
    Ưu tiên:
    1. Người cùng topic cụ thể
    2. Người chọn 'any' hoặc user chọn 'any'
    
    Returns: partner_sid hoặc None
    """
    best_match = None
    
    # Ưu tiên 1: Tìm người cùng topic (nếu user chọn topic cụ thể)
    if user_topic != 'any':
        for waiting_sid in waiting_queue:
            if waiting_sid == user_sid:
                continue
            w_topic = user_info.get(waiting_sid, {}).get('topic', 'any')
            # Match nếu cùng topic cụ thể
            if w_topic == user_topic:
                return waiting_sid
    
    # Ưu tiên 2: Tìm người chọn 'any' hoặc user chọn 'any'
    for waiting_sid in waiting_queue:
        if waiting_sid == user_sid:
            continue
        w_topic = user_info.get(waiting_sid, {}).get('topic', 'any')
        w_status = user_info.get(waiting_sid, {}).get('status', 'inactive')
        
        # Chỉ match với người còn waiting
        if w_status != 'waiting':
            continue
        
        # Match nếu một trong hai chọn 'any'
        if w_topic == 'any' or user_topic == 'any':
            return waiting_sid
    
    return None


def create_pair(user1_sid, user2_sid):
    """
    Ghép cặp 2 user vào một room.
    Returns: room_id hoặc None nếu fail
    """
    # Kiểm tra user tồn tại và status
    if (user1_sid not in user_info or user2_sid not in user_info):
        print(f"[!] User không tồn tại khi tạo pair")
        return None
    
    if (user_info[user1_sid]['status'] != 'waiting' or 
        user_info[user2_sid]['status'] != 'waiting'):
        print(f"[!] User không ở trạng thái waiting")
        return None
    
    # Tạo room
    room_id = f"room_{uuid.uuid4().hex[:8]}"
    

    join_room(room_id, sid=user1_sid)
    join_room(room_id, sid=user2_sid)
    
    active_pairs[user1_sid] = room_id
    active_pairs[user2_sid] = room_id

    # Cập nhật trạng thái
    active_pairs[user1_sid] = room_id
    active_pairs[user2_sid] = room_id
    
    user_info[user1_sid]['room_id'] = room_id
    user_info[user1_sid]['status'] = 'matched'
    user_info[user2_sid]['room_id'] = room_id
    user_info[user2_sid]['status'] = 'matched'
    
    # Xóa khỏi queue
    if user1_sid in waiting_queue:
        waiting_queue.remove(user1_sid)
    if user2_sid in waiting_queue:
        waiting_queue.remove(user2_sid)
    
    print(f"[✓] Matched: {user1_sid} <-> {user2_sid} in {room_id}")
    print(f"[📊] Queue: {len(waiting_queue)}, Active pairs: {len(active_pairs) // 2}")
    
    return room_id


def auto_match_queue():
    """
    Tự động ghép cặp tất cả người trong queue.
    Gọi function này mỗi khi có user mới join hoặc khi có disconnect.
    """
    matched_pairs = []
    
    # Lặp qua từng user trong queue
    for user_sid in list(waiting_queue):
        # Nếu user này đã được ghép cặp trong vòng lặp này, skip
        if any(user_sid in pair for pair in matched_pairs):
            continue
        
        user_topic = user_info.get(user_sid, {}).get('topic', 'any')
        
        # Tìm partner
        partner_sid = find_best_match(user_sid, user_topic)
        
        if partner_sid:
            room_id = create_pair(user_sid, partner_sid)
            if room_id:
                matched_pairs.append((user_sid, partner_sid))
    
    return matched_pairs


def notify_matched(user1_sid, user2_sid, room_id):
    """
    Gửi notification 'matched' cho cả 2 user.
    Gọi sau khi create_pair() thành công.
    """
    user1_info = user_info.get(user1_sid, {})
    user2_info = user_info.get(user2_sid, {})
    
    # Thông báo cho user 1
    socketio.emit('matched', {
        'room_id': room_id,
        'partner_nickname': user2_info.get('nickname', 'Người bạn'),
        'partner_topic': user2_info.get('topic', 'any'),
        'your_nickname': user1_info.get('nickname', 'Bạn'),
    }, room=user1_sid)
    
    # Thông báo cho user 2
    socketio.emit('matched', {
        'room_id': room_id,
        'partner_nickname': user1_info.get('nickname', 'Người bạn'),
        'partner_topic': user1_info.get('topic', 'any'),
        'your_nickname': user2_info.get('nickname', 'Bạn'),
    }, room=user2_sid)
    
    print(f"[📬] Sent matched notifications to {user1_sid} and {user2_sid}")


# ─────────────────────────────────────────────
# SOCKETIO - PEER CHAT
# ─────────────────────────────────────────────

@socketio.on('connect')
def on_connect():
    sid = request.sid
    user_info[sid] = {
        'nickname': f'Bạn#{str(uuid.uuid4())[:4].upper()}',
        'room_id': None,
        'joined_at': time.time(),
        'topic': 'any',
        'status': 'inactive'  # ← thêm status tracking
    }
    emit('connected', {'sid': sid})
    print(f"[+] {sid} connected. Online: {len(user_info)}")


@socketio.on('disconnect')
def on_disconnect():
    sid = request.sid

    # Nếu user đang waiting, xóa khỏi queue
    if sid in waiting_queue:
        waiting_queue.remove(sid)
        print(f"[⏳] {sid} removed from queue. Queue size: {len(waiting_queue)}")

    # Nếu user đang trong pair, thông báo cho partner
    if sid in active_pairs:
        room_id = active_pairs[sid]
        # Tìm partner
        for other_sid, r_id in list(active_pairs.items()):
            if r_id == room_id and other_sid != sid:
                emit('partner_left', {}, room=other_sid)
                del active_pairs[other_sid]
                if other_sid in user_info:
                    user_info[other_sid]['room_id'] = None
                    user_info[other_sid]['status'] = 'inactive'
                print(f"[💔] {other_sid}'s partner ({sid}) left. Notified.")
                break
        del active_pairs[sid]
        leave_room(room_id)

    # Cleanup user info
    if sid in user_info:
        del user_info[sid]

    print(f"[-] {sid} disconnected. Online: {len(user_info)}, Waiting: {len(waiting_queue)}")


@socketio.on('join_queue')
def on_join_queue(data):
    """
    Client tìm bạn ghép cặp.
    
    Cải tiến:
    - Đảm bảo 2 người waiting luôn được ghép cặp
    - Smart matching: ưu tiên topic cụ thể trước 'any'
    - Auto-retry matching cho toàn bộ queue
    """
    sid = request.sid
    topic = data.get('topic', 'any')
    nickname = data.get('nickname', user_info.get(sid, {}).get('nickname', f'Bạn#{uuid.uuid4().hex[:4].upper()}'))

    # Kiểm tra user tồn tại
    if sid not in user_info:
        print(f"[!] User {sid} not in user_info")
        return

    # Cập nhật thông tin user
    user_info[sid]['topic'] = topic
    user_info[sid]['nickname'] = nickname
    user_info[sid]['status'] = 'waiting'

    # Nếu đã trong pair, không xử lý
    if sid in active_pairs:
        print(f"[!] {sid} already in pair, ignoring join_queue")
        return

    # Kiểm tra user không ở trong queue rồi
    if sid in waiting_queue:
        print(f"[!] {sid} already in waiting_queue")
        return

    # Thêm vào queue
    waiting_queue.append(sid)
    print(f"[⏳] {sid} joined queue. Topic: {topic}. Queue size: {len(waiting_queue)}")

    # ========================================================
    # 🔑 CORE MATCHING LOGIC: Auto-match ngay lập tức
    # ========================================================
    matched_pairs = auto_match_queue()
    
    # Gửi notification cho những cặp vừa được match
    for user1_sid, user2_sid in matched_pairs:
        if user1_sid in active_pairs:  # Kiểm tra pair vẫn tồn tại
            room_id = active_pairs[user1_sid]
            notify_matched(user1_sid, user2_sid, room_id)
    
    # Nếu user hiện tại vẫn waiting (chưa match), gửi waiting notification
    if sid in waiting_queue:
        emit('waiting', {
            'position': len(waiting_queue),
            'queue_size': len(waiting_queue)
        })
        print(f"[📊] {sid} still waiting. Queue position: {waiting_queue.index(sid) + 1}")
    elif sid in active_pairs:
        print(f"[✓] {sid} successfully matched in auto_match_queue()")
    else:
        print(f"[?] {sid} status unclear after auto_match_queue()")

    # Health check logging
    print(f"[📈] Queue: {len(waiting_queue)}, Active pairs: {len(active_pairs) // 2}, Online: {len(user_info)}")


@socketio.on('send_message')
def on_message(data):
    """Gửi tin nhắn trong phòng"""
    sid = request.sid
    if sid not in active_pairs:
        return

    room_id = active_pairs[sid]
    content = data.get('content', '').strip()
    msg_type = data.get('type', 'text')  # text | typing | image

    if not content and msg_type == 'text':
        return

    # Broadcast cho cả phòng (trừ người gửi)
    emit('receive_message', {
        'content': content,
        'type': msg_type,
        'sender': 'partner',
        'timestamp': int(time.time() * 1000)
    }, room=room_id, include_self=False)


@socketio.on('typing')
def on_typing(data):
    """Thông báo đang gõ"""
    sid = request.sid
    if sid not in active_pairs:
        return
    room_id = active_pairs[sid]
    emit('partner_typing', {'typing': data.get('typing', False)},
         room=room_id, include_self=False)


@socketio.on('leave_chat')
def on_leave_chat():
    """Rời phòng chat"""
    sid = request.sid
    if sid not in active_pairs:
        return

    room_id = active_pairs[sid]

    # Thông báo cho partner
    for other_sid, r_id in list(active_pairs.items()):
        if r_id == room_id and other_sid != sid:
            emit('partner_left', {}, room=other_sid)
            del active_pairs[other_sid]
            if other_sid in user_info:
                user_info[other_sid]['room_id'] = None
                user_info[other_sid]['status'] = 'inactive'
            print(f"[👋] {other_sid} notified that {sid} left")
            break

    del active_pairs[sid]
    leave_room(room_id)
    if sid in user_info:
        user_info[sid]['room_id'] = None
        user_info[sid]['status'] = 'inactive'

    emit('left_chat', {})
    print(f"[👋] {sid} left chat room {room_id}")


# ─────────────────────────────────────────────
# SERVE STATIC FILES
# Flask serve index.html và các file frontend từ cùng thư mục app.py
# ─────────────────────────────────────────────

@app.route('/')
def index():
    return send_from_directory(BASE_DIR, 'index.html')

@app.route('/style.css')
def serve_css():
    return send_from_directory(BASE_DIR, 'style.css')

@app.route('/script.js')
def serve_js():
    return send_from_directory(BASE_DIR, 'script.js')

@app.route('/conversations.js')
def serve_conversations():
    return send_from_directory(BASE_DIR, 'conversations.js')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('DEBUG', 'false').lower() == 'true'
    print(f"""
╔════════════════════════════════════════╗
║     GloryCare Server v1.0              ║
╠════════════════════════════════════════╣
║  Port    : {port:<29}║
║  Gemini  : {'✅ Configured' if GEMINI_API_KEY else '❌ Not configured':<29}║
╚════════════════════════════════════════╝
    """)
    socketio.run(app, host='0.0.0.0', port=port, debug=debug)
