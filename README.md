# 🌸 GloryCare — Tâm Lý Học Sinh

> *Một không gian để được lắng nghe — không phán xét, không chẩn đoán, không áp đặt.*

Nền tảng hỗ trợ sức khỏe tâm thần dành cho học sinh Việt Nam, kết hợp **AI đồng cảm** (Gemini) và **kết nối tâm sự ngang hàng** theo thời gian thực qua WebSocket.

---

## ✨ Tính năng

| Tính năng | Mô tả |
|---|---|
| 🤖 **Trò chuyện AI** | Tích hợp Gemini (`gemma-3-27b-it`), phản hồi ấm áp như người bạn thân, không phán xét |
| 🫂 **Tâm sự tự do** | Peer chat ẩn danh real-time, ghép cặp thông minh theo chủ đề |
| ✅ **Daily Check-in** | Theo dõi cảm xúc hằng ngày, streak, huy hiệu milestones, biểu đồ SVG |
| 💌 **Thư gửi tương lai** | Viết thư cho bản thân, lưu & mở đọc lại sau |
| 📖 **Nhật ký cảm xúc** | Ghi chép tự do kèm emoji, lưu trữ localStorage |
| 🛡️ **Kiểm duyệt nội dung** | Bộ lọc ngôn từ tiếng Việt, hỗ trợ biến thể & ký tự lách lọc |

---

## 🗂️ Cấu trúc dự án

```
glorycare/
├── app.py              # Flask server + WebSocket + Gemini API
├── index.html          # Toàn bộ UI, inline style & kiểm duyệt nội dung
├── style.css           # Theme, biến CSS, responsive layout
├── script.js           # Chat logic, Socket.io client, peer chat flow
├── conversations.js    # Script hội thoại theo chủ đề tâm lý
└── README.md
```

---

## 🛠️ Tech Stack

**Backend**
- [Flask](https://flask.palletsprojects.com/) — Web server
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/) + `eventlet` — WebSocket real-time
- [google-generativeai](https://ai.google.dev/) — Gemini SDK
- `flask-cors` — CORS

**Frontend**
- Vanilla HTML / CSS / JS (single-file, không cần build tool)
- Font: *Cormorant Garamond* + *DM Sans*
- Socket.io client (CDN)
- `localStorage` — lưu dữ liệu người dùng phía client

---

## 🚀 Cài đặt & Chạy

### 1. Cài dependencies

```bash
pip install flask flask-socketio flask-cors google-generativeai eventlet
```

### 2. Cấu hình Gemini API Key

Lấy key tại [aistudio.google.com](https://aistudio.google.com), sau đó:

```bash
# Linux / macOS
export GEMINI_API_KEY=your_api_key_here

# Windows (PowerShell)
$env:GEMINI_API_KEY="your_api_key_here"
```

> ⚠️ Nếu không cấu hình key, AI chat sẽ tự động dùng phản hồi fallback.

### 3. Chạy server

```bash
python app.py
```

### 4. Mở trình duyệt

```
http://localhost:5000
```

---

## 📡 API Reference

### `POST /api/chat`
Gửi lịch sử hội thoại, nhận phản hồi từ Gemini AI.

**Request body:**
```json
{
  "messages": [
    { "role": "user", "content": "Mình đang rất căng thẳng..." }
  ]
}
```

**Response:**
```json
{
  "reply": "Mình nghe bạn rồi 🌸 Bạn có thể kể thêm không?"
}
```

---

### `GET /api/health`
Kiểm tra trạng thái server.

**Response:**
```json
{
  "status": "ok",
  "gemini": true,
  "waiting": 2,
  "active_pairs": 1
}
```

---

### WebSocket Events (Socket.io)

| Event | Hướng | Mô tả |
|---|---|---|
| `join_queue` | Client → Server | Vào hàng chờ ghép cặp |
| `waiting` | Server → Client | Xác nhận đang chờ, vị trí queue |
| `matched` | Server → Client | Ghép cặp thành công |
| `send_message` | Client → Server | Gửi tin nhắn |
| `receive_message` | Server → Client | Nhận tin nhắn từ partner |
| `typing` | Client → Server | Trạng thái đang gõ |
| `partner_typing` | Server → Client | Partner đang gõ |
| `leave_chat` | Client → Server | Rời phòng |
| `partner_left` | Server → Client | Partner đã rời |

---

## 🔒 Bảo mật & Lưu ý

- **Dữ liệu người dùng** (nhật ký, check-in, thư) lưu `localStorage` — không gửi lên server
- **Peer chat state** lưu in-memory — nên dùng **Redis** cho môi trường production
- AI **không thay thế** tư vấn tâm lý chuyên nghiệp, chỉ hỗ trợ ban đầu
- Nếu phát hiện dấu hiệu nguy hiểm, hệ thống tự động khuyến khích người dùng tìm chuyên gia

---

## 🌿 Triết lý thiết kế

GloryCare được xây dựng với nguyên tắc:
- Lắng nghe và phản chiếu cảm xúc **trước** khi đưa ra lời khuyên
- Đặt câu hỏi mở, không áp đặt
- Bảo vệ sự riêng tư của người dùng tối đa
- Giao diện ấm áp, không lạnh lẽo như phần mềm y tế

---

*Được xây dựng với ❤️ dành cho học sinh Việt Nam*
