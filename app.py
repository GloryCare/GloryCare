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
import requests
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


# ─────────────────────────────────────────────
# CONTENT MODERATION — Backend (source of truth)
# Pipeline: deep normalize → canonical → match
# Bắt được: không dấu, số/ký tự lách lọc, viết cách,
#           dấu phân cách (. - ,), lặp ký tự, link spam
# ─────────────────────────────────────────────
import re
import unicodedata

# ── Leet / số → chữ cái gốc ──────────────────────────────────────────────
_LEET_MAP = str.maketrans({
    '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's',
    '6': 'g', '7': 't', '8': 'b', '9': 'g',
    '@': 'a', '$': 's', '!': 'i', '|': 'i',
    '+': 't', '(': 'c', ')': 'c',
})

# ── Pre-check: pattern link/URL (check trước khi normalize) ──────────────
_LINK_PATTERN = re.compile(
    r'(?:https?://|www\.|\.(?:com|net|org|io|vn|me|app)\b)',
    re.IGNORECASE
)

def _strip_viet_accents(text: str) -> str:
    """Bỏ dấu tiếng Việt: đ→d, ấ→a, ồ→o, v.v."""
    text = text.replace('đ', 'd').replace('Đ', 'd')
    nfd = unicodedata.normalize('NFD', text)
    return ''.join(c for c in nfd if unicodedata.category(c) != 'Mn')

def _collapse_separators(text: str) -> str:
    """
    Bỏ ký tự phân cách giữa chữ cái — bắt các kiểu lách lọc:
      l.o.n  → lon      c-a-c → cac      du.ma → duma
      f u c k → fuck  (nếu mỗi token ≤2 ký tự thì gộp hết)
    """
    # Dấu . - _ , giữa 2 chữ → bỏ
    text = re.sub(r'(?<=[a-z])[.\-_,](?=[a-z])', '', text)
    # Khoảng trắng giữa từng ký tự đơn → gộp
    tokens = text.split(' ')
    if len(tokens) >= 3 and all(len(t) <= 2 for t in tokens if t):
        text = ''.join(tokens)
    return text

def _collapse_repeats(text: str) -> str:
    """fuuuck → fuck,  lồồồn (sau bỏ dấu: looon) → lon"""
    return re.sub(r'(.)\1{2,}', r'\1', text)

def _deep_normalize(text: str) -> str:
    """
    Pipeline chuẩn hoá 6 bước — output chỉ gồm [a-z0-9 ]:
      1. lowercase
      2. leet/số → chữ
      3. bỏ dấu tiếng Việt
      4. collapse separator giữa ký tự đơn
      5. collapse ký tự lặp
      6. bỏ ký tự không phải chữ/số/space → chuẩn hoá khoảng trắng
    """
    text = text.lower()
    text = text.translate(_LEET_MAP)
    text = _strip_viet_accents(text)
    text = _collapse_separators(text)
    text = _collapse_repeats(text)
    text = re.sub(r'[^a-z0-9 ]', ' ', text)
    text = re.sub(r' +', ' ', text).strip()
    return text

# ── Danh sách từ cấm — CANONICAL (không dấu, không leet) ─────────────────
# Vì _deep_normalize đã gom mọi biến thể về 1 dạng, list ÍT nhưng bắt NHIỀU hơn
PROFANITY_CANONICAL = [
    # Bộ phận / chửi thề
    'du',   'dit',  'deo',  'cac',  'buoi', 'lon',  'di', 'lol',
    # Ghép từ
    'du ma', 'duma',    'dit me',   'vai cac',  'vai lon',
    'con lol','me may',  'ma may',
    'thang cho','con cho','do cho',  'cho chet',
    'do khon', 'khon nan',
    # Viết tắt
    'dm', 'dmm', 'dmcs', 'vcl', 'vl', 'clm', 'cml',
    # Tiếng Anh
    'fuck', 'fck', 'fuk', 'fuq',
    'shit', 'bitch', 'bastard',
    'asshole', 'dickhead', 'motherfucker', 'wtf',
    # Gợi dục / quấy rối
    'nude', 'nudes', 'khieu dam',
    'lam tinh', 'du nhau', 'bu cac', 'liem lon', 'sex',
    # Xúc phạm
    'oc cho',   'oc trau',
    'may ngu',  'thang ngu', 'con ngu',
    'do dien',  'thang dien','con dien',
    'mat day',  'vo hoc',    'do khung', 'do hen',
    'suc vat',  'than kinh', 'tam than',
]

# Từ CỰC NGẮN — chỉ block khi đứng HOÀN TOÀN một mình (token độc lập)
STRICT_STANDALONE = {
    'lon', 'di', 'du', 'dm', 'vl', 'sex', 'dit', 'deo', 'wtf',
}

def check_profanity(text: str):
    """
    Kiểm tra text có chứa nội dung không phù hợp không.
    Trả về (True, từ_vi_phạm) hoặc (False, None).

    - Bước 1: Pre-check link/URL pattern (trước normalize)
    - Bước 2: Deep-normalize rồi match với PROFANITY_CANONICAL
    """
    # Bước 1: Link / spam
    if _LINK_PATTERN.search(text):
        return True, 'link/spam'

    # Bước 2: Deep normalize + match
    normalized = _deep_normalize(text)
    for word in PROFANITY_CANONICAL:
        escaped = re.escape(word)
        if word in STRICT_STANDALONE:
            pattern = r'(?:^|(?<= ))' + escaped + r'(?= |$)'
        else:
            pattern = r'(?<![a-z\d])' + escaped + r'(?![a-z\d])'
        if re.search(pattern, normalized):
            return True, word

    return False, None


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

    # ── Kiểm duyệt nội dung (chặn cả request API trực tiếp) ──
    last_user_msg = next(
        (m['content'] for m in reversed(messages) if m.get('role') == 'user'), None
    )
    if last_user_msg:
        flagged, word = check_profanity(last_user_msg)
        if flagged:
            return jsonify({
                "error": "inappropriate_content",
                "message": "Tin nhắn chứa nội dung không phù hợp. Vui lòng giữ cuộc trò chuyện lành mạnh 🌸"
            }), 400

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
# TELEGRAM BOT CONFIG
# ─────────────────────────────────────────────
TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN', '8508905067:AAEHNOWUd13hd1zlKnu7MO8mkU_hcgMeiA0')
TELEGRAM_CHAT_ID   = os.environ.get('TELEGRAM_CHAT_ID', '6851056890')

def send_telegram(msg: str):
    """Gửi thông báo tới Telegram admin."""
    try:
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        requests.post(url, data={"chat_id": TELEGRAM_CHAT_ID, "text": msg}, timeout=5)
    except Exception as e:
        print(f"[Telegram] Lỗi gửi thông báo: {e}")


@app.route('/api/notify-confession', methods=['POST'])
def notify_confession():
    """
    POST /api/notify-confession
    Được gọi từ frontend sau khi user gửi tâm sự lên Supabase thành công.
    Gửi thông báo tới Telegram cho admin biết.
    """
    send_telegram("🌸 Đã có User gửi tâm sự")
    return jsonify({"ok": True})


@app.route('/api/notify-comment', methods=['POST'])
def notify_comment():
    """
    POST /api/notify-comment
    Được gọi từ frontend sau khi user gửi bình luận lên Supabase thành công.
    Gửi thông báo tới Telegram cho admin biết.
    """
    send_telegram("💬 Đã có user bình luận vào một tâm sự")
    return jsonify({"ok": True})


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

    # ── Kiểm duyệt nội dung (backend chặn peer chat) ──
    if msg_type == 'text':
        flagged, word = check_profanity(content)
        if flagged:
            emit('message_blocked', {
                'reason': 'inappropriate_content',
                'message': 'Tin nhắn chứa nội dung không phù hợp. Vui lòng giữ cuộc trò chuyện lành mạnh 🌸'
            }, room=sid)
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