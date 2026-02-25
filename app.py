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
waiting_queue = []          # danh sách socket_id đang chờ
active_pairs = {}           # socket_id -> room_id
user_info = {}              # socket_id -> {nickname, room_id, joined_at}

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
            model="gemini-2.5-flash",
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
# SOCKETIO - PEER CHAT
# ─────────────────────────────────────────────

@socketio.on('connect')
def on_connect():
    sid = request.sid
    user_info[sid] = {
        'nickname': f'Bạn#{str(uuid.uuid4())[:4].upper()}',
        'room_id': None,
        'joined_at': time.time(),
        'topic': 'any'
    }
    emit('connected', {'sid': sid})
    print(f"[+] {sid} connected. Online: {len(user_info)}")


@socketio.on('disconnect')
def on_disconnect():
    sid = request.sid

    # Xóa khỏi hàng chờ
    if sid in waiting_queue:
        waiting_queue.remove(sid)

    # Thông báo cho partner nếu đang chat
    if sid in active_pairs:
        room_id = active_pairs[sid]
        # Tìm partner
        for other_sid, r_id in active_pairs.items():
            if r_id == room_id and other_sid != sid:
                emit('partner_left', {}, room=other_sid)
                del active_pairs[other_sid]
                if other_sid in user_info:
                    user_info[other_sid]['room_id'] = None
                break
        del active_pairs[sid]
        leave_room(room_id)

    if sid in user_info:
        del user_info[sid]

    print(f"[-] {sid} disconnected. Online: {len(user_info)}")


@socketio.on('join_queue')
def on_join_queue(data):
    """Client tìm bạn ghép cặp"""
    sid = request.sid
    topic = data.get('topic', 'any')
    nickname = data.get('nickname', user_info[sid]['nickname'])

    # Cập nhật thông tin
    if sid in user_info:
        user_info[sid]['topic'] = topic
        user_info[sid]['nickname'] = nickname

    # Nếu đã trong pair, không xử lý
    if sid in active_pairs:
        return

    # Tìm người phù hợp trong queue
    partner_sid = None
    for waiting_sid in waiting_queue:
        if waiting_sid == sid:
            continue
        w_topic = user_info.get(waiting_sid, {}).get('topic', 'any')
        # Match nếu cùng topic hoặc một trong hai chọn 'any'
        if w_topic == topic or w_topic == 'any' or topic == 'any':
            partner_sid = waiting_sid
            break

    if partner_sid:
        # Tạo phòng mới
        waiting_queue.remove(partner_sid)
        room_id = f"room_{uuid.uuid4().hex[:8]}"

        # Ghép cặp
        active_pairs[sid] = room_id
        active_pairs[partner_sid] = room_id

        user_info[sid]['room_id'] = room_id
        user_info[partner_sid]['room_id'] = room_id

        join_room(room_id, sid=sid)
        join_room(room_id, sid=partner_sid)

        partner_info = user_info.get(partner_sid, {})
        my_info = user_info.get(sid, {})

        # Thông báo cho cả hai
        emit('matched', {
            'room_id': room_id,
            'partner_nickname': partner_info.get('nickname', 'Người bạn'),
            'partner_topic': partner_info.get('topic', 'any'),
            'your_nickname': my_info.get('nickname', 'Bạn'),
        }, room=sid)

        emit('matched', {
            'room_id': room_id,
            'partner_nickname': my_info.get('nickname', 'Người bạn'),
            'partner_topic': my_info.get('topic', 'any'),
            'your_nickname': partner_info.get('nickname', 'Bạn'),
        }, room=partner_sid)

        print(f"[✓] Matched: {sid} <-> {partner_sid} in {room_id}")

    else:
        # Vào hàng chờ
        if sid not in waiting_queue:
            waiting_queue.append(sid)
        emit('waiting', {'position': len(waiting_queue)})
        print(f"[⏳] {sid} waiting. Queue: {len(waiting_queue)}")


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

    for other_sid, r_id in list(active_pairs.items()):
        if r_id == room_id and other_sid != sid:
            emit('partner_left', {}, room=other_sid)
            del active_pairs[other_sid]
            if other_sid in user_info:
                user_info[other_sid]['room_id'] = None
            break

    del active_pairs[sid]
    leave_room(room_id)
    if sid in user_info:
        user_info[sid]['room_id'] = None

    emit('left_chat', {})


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
