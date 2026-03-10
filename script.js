// script.js — GloryCare Chat Logic (v2.0)
// Backend: Flask + Gemini AI + WebSocket peer chat

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const SERVER_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? `http://${window.location.hostname}:5000`
    : window.location.origin;

let currentTopic = null;
let conversationStack = [];
let isFreeChat = false;
let freeChatHistory = [];

// Peer chat state
let socket = null;
let peerRoom = null;
let peerNickname = null;
let typingTimer = null;
let isInPeerChat = false;

const topicNames = {
    stress: 'Lo Lắng & Căng Thẳng',
    sleep: 'Mất Ngủ',
    relationship: 'Mối Quan Hệ',
    study: 'Học Tập',
    chat: 'Trò Chuyện AI',
    general: 'Tâm Sự Tự Do'
};

const FREE_CHAT_TOPICS = ['chat', 'general'];

// ─────────────────────────────────────────────
// CONTENT MODERATION — Kiểm duyệt từ khóa
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// CONTENT MODERATION — Frontend
// Pipeline ĐỒNG NHẤT với backend: deep normalize → canonical match
// Không còn false positive (lonely/discount) và không bỏ sót (l0n/c4c/l.o.n)
// ─────────────────────────────────────────────

const _LEET = {'0':'o','1':'i','3':'e','4':'a','5':'s','6':'g','7':'t','8':'b','9':'g',
               '@':'a','$':'s','!':'i','|':'i','+':'t','(':'c',')':'c'};

// Pre-check link/URL
const _LINK_RE = /(?:https?:\/\/|www\.|\.(?:com|net|org|io|vn|me|app)\b)/i;

function _applyLeet(str) {
    return str.split('').map(c => _LEET[c] || c).join('');
}

function _stripVietAccents(str) {
    str = str.replace(/[đĐ]/g, 'd');
    return str.normalize('NFD').replace(/\p{Mn}/gu, '');
}

function _collapseSeparators(str) {
    // l.o.n → lon, c-a-c → cac, du.ma → duma
    str = str.replace(/(?<=[a-z])[.\-_,](?=[a-z])/g, '');
    // f u c k → fuck (nếu mọi token ≤2 ký tự)
    const tokens = str.split(' ');
    if (tokens.length >= 3 && tokens.filter(t => t).every(t => t.length <= 2)) {
        str = tokens.join('');
    }
    return str;
}

function _collapseRepeats(str) {
    // fuuuck → fuck, looon → lon
    return str.replace(/(.)\1{2,}/g, '$1');
}

function cmDeepNormalize(text) {
    text = text.toLowerCase();
    text = _applyLeet(text);
    text = _stripVietAccents(text);
    text = _collapseSeparators(text);
    text = _collapseRepeats(text);
    text = text.replace(/[^a-z0-9 ]/g, ' ');
    text = text.replace(/ +/g, ' ').trim();
    return text;
}

// Canonical list — đồng nhất với backend PROFANITY_CANONICAL
const PROFANITY_CANONICAL = [
    'du','dit','deo','cac','buoi','lon','di',
    'du ma','duma','dit me','vai cac','vai lon',
    'con lol','me may','ma may',
    'thang cho','con cho','do cho','cho chet',
    'do khon','khon nan',
    'dm','dmm','dmcs','vcl','vl','clm','cml',
    'fuck','fck','fuk','fuq',
    'shit','bitch','bastard','asshole','dickhead','motherfucker','wtf',
    'nude','nudes','khieu dam',
    'lam tinh','du nhau','bu cac','liem lon','sex',
    'oc cho','oc trau',
    'may ngu','thang ngu','con ngu',
    'do dien','thang dien','con dien',
    'mat day','vo hoc','do khung','do hen',
    'suc vat','than kinh','tam than',
];

const STRICT_STANDALONE = new Set([
    'lon','di','du','dm','vl','sex','dit','deo','wtf',
]);

function cmCheckProfanity(text) {
    // Pre-check link
    if (_LINK_RE.test(text)) return 'link/spam';

    const normalized = cmDeepNormalize(text);
    for (const word of PROFANITY_CANONICAL) {
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const pattern = STRICT_STANDALONE.has(word)
            ? new RegExp('(?:^|(?<= ))' + escaped + '(?= |$)')
            : new RegExp('(?<![a-z\\d])' + escaped + '(?![a-z\\d])');
        if (pattern.test(normalized)) return word;
    }
    return null;
}
/**
 * Hiển thị cảnh báo kiểm duyệt ngay bên dưới ô nhập liệu.
 * @param {string} inputId - ID của thẻ input/textarea
 * @param {string} warningId - ID duy nhất cho phần tử cảnh báo
 */
function cmShowWarning(inputId, warningId) {
    cmHideWarning(warningId); // tránh trùng
    const input = document.getElementById(inputId);
    if (!input) return;

    const warn = document.createElement('div');
    warn.id = warningId;
    warn.style.cssText = `
        display: flex; align-items: center; gap: 7px;
        margin-top: 6px; padding: 8px 13px;
        background: rgba(220, 80, 80, 0.09);
        border: 1px solid rgba(220, 80, 80, 0.28);
        border-radius: 10px;
        font-size: 12.5px; color: #c0392b;
        animation: cmWarnFadeIn 0.25s ease-out;
        font-family: 'DM Sans', sans-serif;
        line-height: 1.45;
    `;
    warn.innerHTML = `
        <span style="font-size:15px;flex-shrink:0">⚠️</span>
        <span>Tin nhắn chứa từ ngữ không phù hợp và không thể gửi đi. Vui lòng giữ không gian trò chuyện lành mạnh và tôn trọng nhau.</span>
    `;

    // Chèn phần tử cảnh báo sau input
    input.closest('.peer-chat-input-row, .chat-input-row')?.parentElement?.appendChild(warn)
        ?? input.parentElement?.parentElement?.appendChild(warn)
        ?? input.parentElement?.appendChild(warn);

    // Tự ẩn sau 4 giây
    setTimeout(() => cmHideWarning(warningId), 4000);

    // Thêm keyframe animation nếu chưa có
    if (!document.getElementById('cmStyleTag')) {
        const style = document.createElement('style');
        style.id = 'cmStyleTag';
        style.textContent = `@keyframes cmWarnFadeIn { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:translateY(0); } }`;
        document.head.appendChild(style);
    }
}

function cmHideWarning(warningId) {
    const el = document.getElementById(warningId);
    if (el) el.remove();
}

// ─────────────────────────────────────────────
// PEER SAFETY — Phát hiện lừa đảo & quấy rối
// ─────────────────────────────────────────────

const DANGER_PATTERNS = [
    // Xin thông tin cá nhân
    { pattern: /(số điện thoại|sdt|phone|zalo|facebook|fb|instagram|ig|snapchat|tiktok|telegram|line|kakao|wechat|discord|số của bạn|liên hệ ngoài|nhắn ngoài|nick của bạn|tài khoản của bạn)/i, type: 'personal_info', label: 'Xin thông tin cá nhân' },
    // Yêu cầu gặp mặt
    { pattern: /(gặp nhau|gặp mặt|gặp ngoài|hẹn gặp|ra ngoài|đến chỗ|cho mình địa chỉ|ở đâu vậy|nhà bạn đâu|trường bạn|quận mấy|tỉnh nào)/i, type: 'meetup', label: 'Yêu cầu gặp mặt thực tế' },
    // Lừa đảo tài chính
    { pattern: /(chuyển tiền|gửi tiền|momo|banking|ngân hàng|stk|số tài khoản|nạp tiền|đầu tư|kiếm tiền|làm giàu|hoa hồng|cộng tác viên|affiliate|dự án|góp vốn|vay tiền|cho mượn tiền)/i, type: 'scam_finance', label: 'Có dấu hiệu lừa đảo tài chính' },
    // Quấy rối tình dục
    { pattern: /(gửi ảnh|gửi clip|ảnh của bạn|ảnh thật|ảnh body|video call|cam cùng|khỏa thân|nude|sexy|body đẹp|thân hình|nhìn bạn|thấy mặt bạn|ảnh mặt)/i, type: 'sexual_harassment', label: 'Quấy rối hoặc xin ảnh cá nhân' },
    // Đe dọa & thao túng
    { pattern: /(nếu không|bằng không|tao sẽ|mày phải|ép buộc|tống tiền|đăng lên|tung ảnh|kể với mọi người|bắt mày|theo dõi|biết nhà mày|biết trường mày)/i, type: 'threat', label: 'Đe dọa hoặc thao túng' },
    // Dụ dỗ trẻ em / grooming
    { pattern: /(bao nhiêu tuổi|mấy tuổi|còn nhỏ|học lớp mấy|cấp mấy|thích người lớn|chín chắn hơn tuổi|trưởng thành rồi|bí mật nhé|đừng kể ai|chỉ mình ta biết|người lớn hiểu em)/i, type: 'grooming', label: 'Dấu hiệu dụ dỗ — grooming' },
];

let pcDangerStrikeCount = 0;   // đếm số lần phát hiện nguy hiểm
let pcAlertShown = false;       // tránh hiện nhiều alert cùng lúc

/**
 * Kiểm tra tin nhắn nhận từ peer có nguy hiểm không.
 * Trả về object { type, label } hoặc null.
 */
function pcDetectDanger(text) {
    const normalized = text.toLowerCase();
    for (const rule of DANGER_PATTERNS) {
        if (rule.pattern.test(normalized)) {
            return { type: rule.type, label: rule.label };
        }
    }
    return null;
}

/**
 * Hiển thị alert cảnh báo khẩn cấp khi phát hiện nội dung nguy hiểm.
 */
function pcShowDangerAlert(dangerInfo) {
    if (pcAlertShown) return;
    pcAlertShown = true;
    pcDangerStrikeCount++;

    // Remove existing alert if any
    const old = document.getElementById('pcDangerAlert');
    if (old) old.remove();

    const MESSAGES = {
        personal_info:     { icon: '📵', title: 'Cảnh báo: Ai đó đang xin thông tin cá nhân', advice: 'Tuyệt đối <strong>không chia sẻ</strong> số điện thoại, mạng xã hội, địa chỉ hay bất kỳ thông tin định danh nào.' },
        meetup:            { icon: '🚫', title: 'Cảnh báo: Yêu cầu gặp mặt ngoài đời thực', advice: '<strong>Không gặp mặt</strong> người quen qua mạng ẩn danh. Đây là dấu hiệu của kẻ có ý đồ xấu.' },
        scam_finance:      { icon: '💸', title: 'Cảnh báo: Dấu hiệu lừa đảo tài chính!', advice: '<strong>Không chuyển tiền</strong> hoặc cung cấp thông tin tài khoản ngân hàng cho bất kỳ ai trên nền tảng này.' },
        sexual_harassment: { icon: '🛑', title: 'Cảnh báo: Quấy rối — yêu cầu ảnh/video cá nhân', advice: '<strong>Không gửi bất kỳ hình ảnh nào</strong> của bản thân. Đây là hành vi quấy rối nghiêm trọng.' },
        threat:            { icon: '⚠️', title: 'Cảnh báo: Phát hiện lời đe dọa hoặc thao túng', advice: 'Bạn <strong>không cần làm bất cứ điều gì</strong> người này yêu cầu. Hãy kết thúc cuộc trò chuyện ngay.' },
        grooming:          { icon: '🔒', title: 'Cảnh báo: Dấu hiệu tiếp cận, dụ dỗ nguy hiểm', advice: 'Đây là dấu hiệu của kẻ có <strong>ý đồ xấu với trẻ em</strong>. Hãy rời ngay và báo với người lớn tin cậy.' },
    };

    const info = MESSAGES[dangerInfo.type] || { icon: '⚠️', title: 'Phát hiện nội dung đáng ngờ', advice: 'Hãy cẩn thận và kết thúc cuộc trò chuyện nếu bạn cảm thấy không an toàn.' };

    const overlay = document.createElement('div');
    overlay.id = 'pcDangerAlert';
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(0,0,0,0.65); backdrop-filter: blur(6px);
        display: flex; align-items: center; justify-content: center;
        padding: 20px; animation: pcAlertIn 0.3s cubic-bezier(0.34,1.2,0.64,1) both;
    `;

    overlay.innerHTML = `
        <div style="
            background: var(--bg-card, #fff);
            border-radius: 24px;
            padding: 32px 28px 24px;
            max-width: 420px; width: 100%;
            box-shadow: 0 24px 80px rgba(0,0,0,0.35);
            border: 2px solid rgba(220,60,60,0.3);
            text-align: center;
            font-family: 'DM Sans', sans-serif;
            animation: pcCardPop 0.35s cubic-bezier(0.34,1.4,0.64,1) both;
        ">
            <div style="font-size: 52px; margin-bottom: 10px; line-height:1;">${info.icon}</div>
            <h3 style="
                font-family: 'Cormorant Garamond', serif;
                font-size: 20px; font-weight: 600;
                color: #c0392b; margin: 0 0 14px;
                line-height: 1.35;
            ">${info.title}</h3>
            <p style="
                font-size: 13.5px; color: var(--text-secondary, #555);
                line-height: 1.6; margin: 0 0 20px;
            ">${info.advice}</p>

            <div style="
                background: rgba(220,60,60,0.07);
                border: 1px solid rgba(220,60,60,0.2);
                border-radius: 14px; padding: 14px 16px;
                font-size: 12.5px; color: var(--text-secondary, #555);
                text-align: left; margin-bottom: 24px; line-height: 1.55;
            ">
                <strong style="color:#c0392b;">Nhắc nhở an toàn:</strong><br>
                GloryCare <strong>không yêu cầu</strong> bạn chia sẻ thông tin cá nhân. Cuộc trò chuyện này là ẩn danh và bạn có quyền rời đi bất cứ lúc nào.
            </div>

            <button onclick="pcForceLeave()" style="
                width: 100%; padding: 14px;
                background: linear-gradient(135deg, #c0392b, #e74c3c);
                color: white; border: none; border-radius: 14px;
                font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600;
                cursor: pointer; margin-bottom: 10px;
                box-shadow: 0 6px 20px rgba(192,57,43,0.35);
                transition: transform 0.15s;
            " onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                🚪 Kết thúc ngay & Rời khỏi chat
            </button>
            <button onclick="pcDismissAlert()" style="
                width: 100%; padding: 11px;
                background: transparent;
                color: var(--text-muted, #888); border: 1.5px solid var(--border, #ddd);
                border-radius: 14px; font-family: 'DM Sans', sans-serif;
                font-size: 13px; cursor: pointer;
            ">
                Tôi hiểu, tiếp tục thận trọng
            </button>
        </div>
    `;

    document.body.appendChild(overlay);

    // Inject keyframes
    if (!document.getElementById('pcAlertStyle')) {
        const s = document.createElement('style');
        s.id = 'pcAlertStyle';
        s.textContent = `
            @keyframes pcAlertIn { from { opacity:0; } to { opacity:1; } }
            @keyframes pcCardPop { from { opacity:0; transform:scale(0.88) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }
            @keyframes pcSafetySlideIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
            @keyframes pcPulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
        `;
        document.head.appendChild(s);
    }

    // Auto-add system message in chat
    addSystemMessage(`${info.icon} Cảnh báo tự động: ${info.label} — hãy thận trọng!`);
}

/**
 * Người dùng chọn "tiếp tục thận trọng" — đóng alert nhưng vẫn trong chat.
 */
function pcDismissAlert() {
    const el = document.getElementById('pcDangerAlert');
    if (el) {
        el.style.animation = 'pcAlertIn 0.25s ease reverse both';
        setTimeout(() => el.remove(), 250);
    }
    pcAlertShown = false;

    // Nếu đã có 2+ lần cảnh báo, hiện banner nhắc nhở thêm
    if (pcDangerStrikeCount >= 2) {
        addSystemMessage('⚠️ Đây là lần thứ ' + pcDangerStrikeCount + ' phát hiện nội dung đáng ngờ. Hãy cân nhắc kết thúc cuộc trò chuyện này.');
    }
}

/**
 * Kết thúc ngay lập tức và hiển thị thông báo an toàn.
 */
function pcForceLeave() {
    const el = document.getElementById('pcDangerAlert');
    if (el) el.remove();
    pcAlertShown = false;
    pcDangerStrikeCount = 0;

    if (socket) {
        socket.emit('leave_chat');
        socket.disconnect();
        socket = null;
    }
    isInPeerChat = false;
    peerRoom = null;

    document.getElementById('peerChatActive').style.display = 'none';
    document.getElementById('peerChatInputArea').style.display = 'none';

    // Hiện màn hình an toàn sau khi rời
    const area = document.getElementById('messagesArea');
    area.style.display = 'flex';
    area.innerHTML = '';

    const safeEl = document.createElement('div');
    safeEl.style.cssText = `
        display:flex; flex-direction:column; align-items:center;
        padding: 40px 28px; text-align:center; gap:14px;
        font-family:'DM Sans',sans-serif;
    `;
    safeEl.innerHTML = `
        <div style="font-size:52px;">🛡️</div>
        <h3 style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;color:var(--accent-rose);margin:0;">Bạn đã an toàn rời khỏi cuộc trò chuyện</h3>
        <p style="font-size:13.5px;color:var(--text-secondary);line-height:1.65;max-width:340px;margin:0;">
            Bạn đã làm đúng. Bảo vệ bản thân là điều quan trọng nhất.
            Nếu bạn cảm thấy lo lắng hoặc bị đe dọa, hãy kể cho người lớn tin cậy hoặc liên hệ đường dây hỗ trợ.
        </p>
        <div style="
            background:rgba(139,124,168,0.08);border:1.5px solid rgba(139,124,168,0.2);
            border-radius:16px;padding:16px 20px;max-width:340px;
            font-size:12.5px;color:var(--text-secondary);line-height:1.6;text-align:left;
        ">
            <strong style="color:var(--accent-lavender,#8b7ca8);">📞 Hỗ trợ khẩn cấp:</strong><br>
            • Đường dây bảo vệ trẻ em: <strong>1800 599 924</strong> (miễn phí)<br>
            • Hỗ trợ tâm lý học sinh: <strong>1800 599 920</strong><br>
            • Cảnh sát 113 nếu có nguy hiểm trực tiếp
        </div>
        <button onclick="showPeerSetupScreen()" style="
            margin-top:8px; padding:13px 32px;
            background:linear-gradient(135deg,var(--accent-rose),var(--accent-lavender));
            color:white;border:none;border-radius:14px;
            font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;
            cursor:pointer;box-shadow:0 6px 18px rgba(200,114,104,0.3);
        ">✿ Tìm người trò chuyện khác</button>
    `;
    area.appendChild(safeEl);
    scrollDown();
}

/**
 * Hiện banner cảnh báo an toàn ngay khi bắt đầu p2p chat.
 */
function pcShowSafetyBanner() {
    const area = document.getElementById('messagesArea');
    const banner = document.createElement('div');
    banner.id = 'pcSafetyBanner';
    banner.style.cssText = `
        margin: 8px 16px 4px;
        background: linear-gradient(135deg, rgba(139,124,168,0.08), rgba(200,114,104,0.06));
        border: 1.5px solid rgba(139,124,168,0.25);
        border-radius: 16px;
        padding: 14px 18px;
        font-family: 'DM Sans', sans-serif;
        font-size: 12.5px;
        color: var(--text-secondary);
        line-height: 1.6;
        animation: pcSafetySlideIn 0.4s ease-out both;
        position: relative;
    `;
    banner.innerHTML = `
        <button onclick="this.parentElement.remove()" style="
            position:absolute;top:10px;right:12px;
            background:none;border:none;cursor:pointer;
            font-size:14px;color:var(--text-muted);opacity:0.6;
            padding:2px 5px;
        ">×</button>
        <div style="display:flex;align-items:flex-start;gap:10px;">
            <span style="font-size:20px;flex-shrink:0;margin-top:1px;">🛡️</span>
            <div>
                <strong style="color:var(--accent-lavender,#8b7ca8);font-size:13px;">Lưu ý an toàn khi trò chuyện</strong><br>
                <span style="color:var(--text-muted);">• Không chia sẻ <strong>số điện thoại, địa chỉ, mạng xã hội</strong> với người lạ</span><br>
                <span style="color:var(--text-muted);">• Không chuyển tiền hoặc làm theo yêu cầu tài chính</span><br>
                <span style="color:var(--text-muted);">• Không gửi ảnh, video cá nhân</span><br>
                <span style="color:var(--text-muted);">• Không nhận lời hẹn gặp mặt ngoài đời thực</span><br>
                <span style="color:var(--text-muted);">• Dùng nút <strong style="color:#c0392b;">🚪 Thoát ngay</strong> nếu cảm thấy không thoải mái</span>
            </div>
        </div>
    `;
    area.appendChild(banner);
    scrollDown();
}

// ─────────────────────────────────────────────
// SELECT TOPIC
// ─────────────────────────────────────────────
function selectTopic(topic) {
    currentTopic = topic;
    isFreeChat = FREE_CHAT_TOPICS.includes(topic);
    conversationStack = [{ type: 'root' }];
    freeChatHistory = [];

    document.getElementById('welcomeScreen').style.display = 'none';
    const layout = document.getElementById('chatLayout');
    layout.classList.add('active');
    document.getElementById('topicBadge').textContent = topicNames[topic] || topic;
    document.getElementById('messagesArea').innerHTML = '';

    if (topic === 'general') {
        // Peer chat mode
        document.getElementById('panelRight').classList.add('hidden');
        document.getElementById('panelLeft').classList.add('full-width');
        document.getElementById('chatInputArea').style.display = 'none';
        document.getElementById('peerChatSetup').style.display = 'flex';
        document.getElementById('peerChatActive').style.display = 'none';
        showPeerSetupScreen();
        document.getElementById('messagesArea').style.display = 'none';
    } else if (topic === 'chat') {
        // AI chat mode with Gemini backend
        document.getElementById('panelRight').classList.add('hidden');
        document.getElementById('panelLeft').classList.add('full-width');
        document.getElementById('chatInputArea').style.display = 'flex';
        document.getElementById('peerChatSetup').style.display = 'none';
        document.getElementById('peerChatActive').style.display = 'none';
        document.getElementById('messagesArea').style.display = 'flex';
        const greeting = 'Xin chào! Mình là GloryCare 🌸 Bạn có thể chia sẻ bất cứ điều gì — cảm xúc, suy nghĩ, hay chỉ đơn giản là muốn trò chuyện. Mình luôn ở đây lắng nghe bạn.';
        addBotMessage(greeting);
        setTimeout(() => document.getElementById('chatInput').focus(), 300);
    } else {
        // Structured conversation mode
        document.getElementById('panelRight').classList.remove('hidden');
        document.getElementById('panelLeft').classList.remove('full-width');
        document.getElementById('chatInputArea').style.display = 'none';
        document.getElementById('peerChatSetup').style.display = 'none';
        document.getElementById('peerChatActive').style.display = 'none';
        document.getElementById('messagesArea').style.display = 'flex';
        const topicData = conversationsData[topic];
        if (topicData) {
            addBotMessage(topicData.greeting);
            setTimeout(() => renderOptions(topicData.conversations), 400);
        } else {
            addBotMessage('Xin chào! Hãy chia sẻ điều bạn muốn nói hôm nay nhé.');
            renderOptions([]);
        }
    }
}

// ─────────────────────────────────────────────
// PEER CHAT - SETUP SCREEN
// ─────────────────────────────────────────────
function showPeerSetupScreen() {
    const area = document.getElementById('messagesArea');
    area.innerHTML = '';
    area.style.display = 'none';
    document.getElementById('chatInputArea').style.display = 'none';
    document.getElementById('peerChatInputArea').style.display = 'none';
    document.getElementById('peerChatSetup').style.display = 'flex';
    document.getElementById('peerChatActive').style.display = 'none';
    isInPeerChat = false;

    // Disconnect if previously connected
    if (socket) {
        socket.emit('leave_chat');
    }
}

function startFindingPeer() {
    const nickname = document.getElementById('peerNicknameInput').value.trim() || generateNickname();
    const topic = document.getElementById('peerTopicSelect').value;

    peerNickname = nickname;

    // Connect to WebSocket server
    connectSocket(() => {
        socket.emit('join_queue', { nickname, topic });
        showWaitingState();
    });
}

function showWaitingState() {
    document.getElementById('peerChatSetup').style.display = 'none';
    document.getElementById('peerChatActive').style.display = 'none';

    const area = document.getElementById('messagesArea');
    area.style.display = 'flex';
    area.innerHTML = '';
    addSystemMessage('🔍 Đang tìm người lắng nghe cho bạn…');

    // Pulse animation element
    const waitEl = document.createElement('div');
    waitEl.id = 'waitingIndicator';
    waitEl.className = 'waiting-indicator';
    waitEl.innerHTML = `
        <div class="waiting-pulse">
            <div class="pulse-ring"></div>
            <div class="pulse-dot">✿</div>
        </div>
        <p class="waiting-text">Kết nối với người bạn đồng hành…</p>
        <button class="cancel-wait-btn" onclick="cancelWaiting()">Huỷ</button>
    `;
    area.appendChild(waitEl);
    scrollDown();
}

function cancelWaiting() {
    if (socket) {
        socket.emit('leave_chat');
        socket.disconnect();
        socket = null;
    }
    showPeerSetupScreen();
}

function showActivePeerChat(partnerNickname) {
    isInPeerChat = true;
    pcDangerStrikeCount = 0;
    pcAlertShown = false;

    // Remove waiting indicator
    const waitEl = document.getElementById('waitingIndicator');
    if (waitEl) waitEl.remove();

    document.getElementById('peerChatSetup').style.display = 'none';
    document.getElementById('messagesArea').style.display = 'flex';

    // Show active peer chat UI
    const activeEl = document.getElementById('peerChatActive');
    activeEl.style.display = 'flex';
    document.getElementById('peerPartnerName').textContent = partnerNickname;
    document.getElementById('peerChatInputArea').style.display = 'flex';

    // Hiện banner cảnh báo an toàn
    pcShowSafetyBanner();

    addSystemMessage(`✨ Đã kết nối! Bạn đang trò chuyện với ${partnerNickname}`);
    addSystemMessage('💚 Không gian này an toàn và ẩn danh. Hãy lắng nghe và chia sẻ.');

    setTimeout(() => document.getElementById('peerChatInput').focus(), 300);
}

// ─────────────────────────────────────────────
// SOCKET.IO CONNECTION
// ─────────────────────────────────────────────
function connectSocket(callback) {
    if (socket && socket.connected) {
        callback();
        return;
    }

    // Load socket.io client dynamically
    if (typeof io === 'undefined') {
        const script = document.createElement('script');
        script.src = `${SERVER_URL}/socket.io/socket.io.js`;
        script.onload = () => initSocket(callback);
        script.onerror = () => {
            // Fallback: server không chạy
            showServerOffline();
        };
        document.head.appendChild(script);
    } else {
        initSocket(callback);
    }
}

function initSocket(callback) {
    socket = io(SERVER_URL, { transports: ['websocket', 'polling'] });

    socket.on('connect', () => {
        console.log('[Socket] Connected:', socket.id);
        if (callback) callback();
    });

    socket.on('connect_error', () => {
        showServerOffline();
    });

    socket.on('waiting', (data) => {
        const waitEl = document.querySelector('.waiting-text');
        if (waitEl) waitEl.textContent = `Đang chờ… (${data.position} người chờ)`;
    });

    socket.on('matched', (data) => {
        peerRoom = data.room_id;
        showActivePeerChat(data.partner_nickname);
    });

    socket.on('receive_message', (data) => {
        removePeerTyping();
        addPeerMessage(data.content);

        // Quét tin nhắn nhận được để phát hiện nguy hiểm
        const danger = pcDetectDanger(data.content);
        if (danger) {
            pcShowDangerAlert(danger);
        }
    });

    socket.on('partner_typing', (data) => {
        if (data.typing) showPeerTyping();
        else removePeerTyping();
    });

    socket.on('partner_left', () => {
        removePeerTyping();
        addSystemMessage('💔 Người bạn kia đã rời cuộc trò chuyện.');
        document.getElementById('peerChatActive').style.display = 'none';
        document.getElementById('peerChatInputArea').style.display = 'none';

        // Show reconnect option
        const area = document.getElementById('messagesArea');
        const reconnectEl = document.createElement('div');
        reconnectEl.className = 'reconnect-prompt';
        reconnectEl.innerHTML = `
            <p>Bạn có muốn tìm người trò chuyện khác không?</p>
            <button onclick="showPeerSetupScreen()" class="reconnect-btn">Tìm bạn mới ✿</button>
        `;
        area.appendChild(reconnectEl);
        scrollDown();
    });

    // ── Backend chặn tin nhắn không phù hợp (peer chat) ──
    socket.on('message_blocked', (data) => {
        cmShowWarning('peerChatInput', 'cmPeerWarning');
        // Xoá tin nhắn đã add vào UI (rollback)
        const area = document.getElementById('messagesArea');
        const lastMsg = area.querySelector('.msg.user.peer-msg:last-child');
        if (lastMsg) lastMsg.remove();
    });

    socket.on('left_chat', () => {
        isInPeerChat = false;
        peerRoom = null;
    });
}

function showServerOffline() {
    // ✅ Hiển thị vùng tin nhắn và ẩn màn hình thiết lập
    document.getElementById('peerChatSetup').style.display = 'none';
    document.getElementById('messagesArea').style.display = 'flex';

    const area = document.getElementById('messagesArea');
    const waitEl = document.getElementById('waitingIndicator');
    if (waitEl) waitEl.remove();

    addSystemMessage('⚠️ Không thể kết nối đến server. Hãy đảm bảo server đang chạy.');

    const offlineEl = document.createElement('div');
    offlineEl.className = 'server-offline-notice';
    offlineEl.innerHTML = `
        <div class="offline-icon">🔌</div>
        <p class="offline-title">Server chưa hoạt động</p>
        <p class="offline-desc">Bạn cần chạy backend Python để sử dụng tính năng kết nối người với người.</p>
        <code class="offline-cmd">python app.py</code>
        <button onclick="showPeerSetupScreen()" class="offline-back-btn">← Quay lại</button>
    `;
    area.appendChild(offlineEl);
    scrollDown();
}

// ─────────────────────────────────────────────
// PEER CHAT - SEND/RECEIVE
// ─────────────────────────────────────────────
function sendPeerMessage() {
    const input = document.getElementById('peerChatInput');
    const text = input.value.trim();
    if (!text || !socket || !peerRoom) return;

    // ── Kiểm duyệt từ khóa ──
    if (cmCheckProfanity(text)) {
        cmShowWarning('peerChatInput', 'cmPeerWarning');
        return;
    }
    cmHideWarning('cmPeerWarning');

    input.value = '';
    autoResizeTextarea(input);

    addMyPeerMessage(text);
    socket.emit('send_message', { content: text, type: 'text' });

    // Stop typing indicator
    socket.emit('typing', { typing: false });
    clearTimeout(typingTimer);
}

function handlePeerKeydown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendPeerMessage();
    }
}

function handlePeerTyping() {
    if (!socket || !peerRoom) return;
    socket.emit('typing', { typing: true });
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
        socket.emit('typing', { typing: false });
    }, 2000);
}

function leavePeerChat() {
    if (socket) socket.emit('leave_chat');
    isInPeerChat = false;
    peerRoom = null;
    document.getElementById('peerChatActive').style.display = 'none';
    document.getElementById('peerChatInputArea').style.display = 'none';
    showPeerSetupScreen();
}

// ─────────────────────────────────────────────
// PEER MESSAGE HELPERS
// ─────────────────────────────────────────────
function addMyPeerMessage(text) {
    const area = document.getElementById('messagesArea');
    const div = document.createElement('div');
    div.className = 'msg user peer-msg';
    div.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
    area.appendChild(div);
    scrollDown();
}

function addPeerMessage(text) {
    const area = document.getElementById('messagesArea');
    const div = document.createElement('div');
    div.className = 'msg bot peer-msg';
    div.innerHTML = `
        <div class="msg-avatar peer-avatar">👤</div>
        <div class="msg-bubble peer-bubble">${escapeHtml(text)}</div>
    `;
    area.appendChild(div);
    scrollDown();
}

function addSystemMessage(text) {
    const area = document.getElementById('messagesArea');
    const div = document.createElement('div');
    div.className = 'system-msg';
    div.innerHTML = `<span>${text}</span>`;
    area.appendChild(div);
    scrollDown();
}

function showPeerTyping() {
    if (document.getElementById('peerTypingMsg')) return;
    const area = document.getElementById('messagesArea');
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.id = 'peerTypingMsg';
    div.innerHTML = `
        <div class="msg-avatar peer-avatar">👤</div>
        <div class="typing-bubble">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>`;
    area.appendChild(div);
    scrollDown();
}

function removePeerTyping() {
    const el = document.getElementById('peerTypingMsg');
    if (el) el.remove();
}

function generateNickname() {
    const adj = ['Mây', 'Sao', 'Gió', 'Nắng', 'Mưa', 'Hoa', 'Sóng', 'Trăng'];
    const noun = ['Nhỏ', 'Xanh', 'Vàng', 'Hồng', 'Tím', 'Trắng'];
    return adj[Math.floor(Math.random() * adj.length)] + noun[Math.floor(Math.random() * noun.length)];
}

// ─────────────────────────────────────────────
// AI CHAT (Gemini via backend)
// ─────────────────────────────────────────────
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    // ── Kiểm duyệt từ khóa ──
    if (cmCheckProfanity(text)) {
        cmShowWarning('chatInput', 'cmChatWarning');
        return;
    }
    cmHideWarning('cmChatWarning');

    input.value = '';
    autoResizeTextarea(input);
    addUserMessage(text);
    freeChatHistory.push({ role: 'user', content: text });

    showTyping();
    const sendBtn = document.getElementById('chatSendBtn');
    sendBtn.disabled = true;

    try {
        const response = await fetch(`${SERVER_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: freeChatHistory, topic: currentTopic })
        });

        const data = await response.json();
        removeTyping();

        // ── Backend chặn nội dung không phù hợp (safety net) ──
        if (!response.ok && data.error === 'inappropriate_content') {
            freeChatHistory.pop();
            // Rollback bubble user đã hiện lên
            const area = document.getElementById('messagesArea');
            const lastBubble = area?.querySelector('.msg.user:last-child');
            if (lastBubble) lastBubble.remove();
            // Trả text về input để user có thể sửa
            input.value = text;
            autoResizeTextarea(input);
            cmShowWarning('chatInput', 'cmChatWarning');
            sendBtn.disabled = false;
            return;
        }

        const reply = data.reply || 'Mình gặp chút sự cố, bạn thử lại nhé 🌸';
        freeChatHistory.push({ role: 'assistant', content: reply });
        addBotMessage(reply);

    } catch (err) {
        removeTyping();
        // Fallback khi không có backend
        const fallbacks = [
            'Mình nghe bạn rồi. Bạn có thể kể thêm không? 🌿',
            'Cảm ơn bạn đã chia sẻ. Bạn đang cảm thấy thế nào bây giờ? 💛',
            'Mình đang ở đây lắng nghe bạn 🌸',
        ];
        addBotMessage(fallbacks[Math.floor(Math.random() * fallbacks.length)]);
    }

    sendBtn.disabled = false;
    setTimeout(() => document.getElementById('chatInput').focus(), 100);
}

function autoResizeTextarea(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

function handleChatKeydown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

// ─────────────────────────────────────────────
// GO HOME
// ─────────────────────────────────────────────
function goHome() {
    if (socket) {
        socket.emit('leave_chat');
        socket.disconnect();
        socket = null;
    }
    isInPeerChat = false;
    peerRoom = null;

    document.getElementById('chatLayout').classList.remove('active');
    document.getElementById('welcomeScreen').style.display = 'flex';
    document.getElementById('panelRight').classList.remove('hidden');
    document.getElementById('panelLeft').classList.remove('full-width');
    document.getElementById('chatInputArea').style.display = 'none';
    document.getElementById('peerChatSetup').style.display = 'none';
    document.getElementById('peerChatActive').style.display = 'none';
    document.getElementById('peerChatInputArea').style.display = 'none';

    currentTopic = null;
    isFreeChat = false;
    conversationStack = [];
    freeChatHistory = [];
}

// ─────────────────────────────────────────────
// RESET CHAT
// ─────────────────────────────────────────────
function resetChat() {
    if (!currentTopic) return;

    if (currentTopic === 'general') {
        if (socket) { socket.emit('leave_chat'); socket.disconnect(); socket = null; }
        isInPeerChat = false;
        peerRoom = null;
        document.getElementById('messagesArea').innerHTML = '';
        showPeerSetupScreen();
        return;
    }

    freeChatHistory = [];
    conversationStack = [{ type: 'root' }];
    document.getElementById('messagesArea').innerHTML = '';

    if (currentTopic === 'chat') {
        const greeting = 'Xin chào trở lại! Mình vẫn ở đây lắng nghe bạn 🌸';
        addBotMessage(greeting);
        setTimeout(() => document.getElementById('chatInput').focus(), 300);
    } else {
        const topicData = conversationsData[currentTopic];
        if (topicData) {
            addBotMessage(topicData.greeting);
            setTimeout(() => renderOptions(topicData.conversations), 400);
        }
    }
}

// ─────────────────────────────────────────────
// SELECT CONVERSATION NODE (structured)
// ─────────────────────────────────────────────
function selectConversation(conv) {
    // ── Kiểm duyệt nội dung nút bấm (userShare + botResponse) ──
    const textToCheck = (conv.userShare || '') + ' ' + (conv.botResponse || '');
    if (cmCheckProfanity(textToCheck)) {
        cmShowWarning('chatInput', 'cmChatWarning');
        return;
    }
    cmHideWarning('cmChatWarning');

    conversationStack.push({ type: 'node', node: conv });
    addUserMessage(conv.userShare);
    showTyping();
    setTimeout(() => {
        removeTyping();
        addBotMessage(conv.botResponse);
        renderOptions(conv.children && conv.children.length > 0 ? conv.children : []);
    }, 700 + Math.random() * 400);
}

function goBack() {
    if (conversationStack.length <= 1) { goHome(); return; }
    conversationStack.pop();
    const prev = conversationStack[conversationStack.length - 1];
    if (prev.type === 'root') {
        const topicData = conversationsData[currentTopic];
        renderOptions(topicData ? topicData.conversations : []);
    } else {
        renderOptions(prev.node.children || []);
    }
}

// ─────────────────────────────────────────────
// RENDER OPTIONS
// ─────────────────────────────────────────────
function renderOptions(options) {
    const container = document.getElementById('optionsScroll');
    const countEl = document.getElementById('optionCount');
    container.innerHTML = '';

    const total = (options ? options.length : 0) + (conversationStack.length > 1 ? 1 : 0);
    countEl.textContent = total + ' lựa chọn';

    if (options && options.length > 0) {
        // Lọc bỏ option có nội dung không phù hợp trước khi render nút
        const safeOptions = options.filter(opt =>
            !cmCheckProfanity((opt.userShare || '') + ' ' + (opt.botResponse || ''))
        );
        safeOptions.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.textContent = opt.userShare;
            btn.style.animation = 'msgIn 0.35s cubic-bezier(0.34,1.2,0.64,1) both';
            btn.style.animationDelay = (i * 50) + 'ms';
            btn.onclick = () => selectConversation(opt);
            container.appendChild(btn);
        });
    }

    // "Khác" button — always shown in structured topics
    if (options && options.length > 0) {
        const otherBtn = document.createElement('button');
        otherBtn.className = 'opt-btn opt-btn-other';
        otherBtn.innerHTML = `
            <span class="other-btn-inner">
                <span class="other-btn-icon"><i class="fas fa-ellipsis-h"></i></span>
                <span class="other-btn-text">Không phù hợp với bạn? Khác…</span>
                <span class="other-btn-sub">Điều gì đó khác hơn</span>
            </span>`;
        otherBtn.style.animation = 'msgIn 0.35s cubic-bezier(0.34,1.2,0.64,1) both';
        otherBtn.style.animationDelay = ((options ? options.length : 0) * 50 + 60) + 'ms';
        otherBtn.onclick = openOtherPanel;
        container.appendChild(otherBtn);
    }

    if (conversationStack.length > 1) {
        const backBtn = document.createElement('button');
        backBtn.className = 'opt-btn back-btn';
        backBtn.innerHTML = '<i class="fas fa-arrow-left" style="font-size:12px;opacity:0.7"></i> Quay lại';
        backBtn.onclick = goBack;
        container.appendChild(backBtn);
    }

    if ((!options || options.length === 0) && conversationStack.length <= 1) {
        container.innerHTML = `<div class="empty-options"><div class="empty-icon">✿</div><p class="empty-text">Hãy chọn một chủ đề để bắt đầu chia sẻ. GloryCare luôn sẵn sàng lắng nghe bạn.</p></div>`;
    } else if (!options || options.length === 0) {
        const note = document.createElement('div');
        note.style.cssText = 'text-align:center;padding:28px 20px;';
        note.innerHTML = `<div style="font-size:28px;opacity:0.25;margin-bottom:10px">❀</div><p style="font-size:13px;color:var(--text-muted);font-style:italic;line-height:1.6">Cuộc trò chuyện này đã đi đến điểm dừng.<br>Bạn có thể quay lại để tiếp tục chia sẻ.</p>`;
        container.appendChild(note);
    }
}

// ─────────────────────────────────────────────
// "KHÁC" PANEL — free AI chat or peer connect
// ─────────────────────────────────────────────
function openOtherPanel() {
    let panel = document.getElementById('otherPanel');
    if (!panel) {
        panel = document.createElement('div');
        panel.id = 'otherPanel';
        panel.className = 'other-panel-overlay';
        panel.innerHTML = `
        <div class="other-panel-card" id="otherPanelCard">
            <button class="other-panel-close" onclick="closeOtherPanel()"><i class="fas fa-times"></i></button>
            <div class="other-panel-header">
                <div class="other-panel-ornament">❀</div>
                <h3 class="other-panel-title">Bạn muốn chia sẻ theo cách nào?</h3>
                <p class="other-panel-sub">Đôi khi những lựa chọn có sẵn chưa diễn đạt đúng cảm xúc của bạn — hoàn toàn bình thường.</p>
            </div>
            <div class="other-panel-choices">
                <button class="other-choice-card" onclick="chooseOtherAI()">
                    <div class="other-choice-glow other-choice-glow-ai"></div>
                    <div class="other-choice-icon-wrap other-choice-icon-ai">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="other-choice-content">
                        <div class="other-choice-title">Chia sẻ tự do với AI</div>
                        <div class="other-choice-desc">Nói bất cứ điều gì bạn muốn. AI sẽ lắng nghe không phán xét, 24/7, luôn ở đây cho bạn.</div>
                    </div>
                    <div class="other-choice-arrow"><i class="fas fa-arrow-right"></i></div>
                </button>
                <div class="other-choices-divider"><span>hoặc</span></div>
                <button class="other-choice-card" onclick="chooseOtherPeer()">
                    <div class="other-choice-glow other-choice-glow-peer"></div>
                    <div class="other-choice-icon-wrap other-choice-icon-peer">
                        <i class="fas fa-user-friends"></i>
                    </div>
                    <div class="other-choice-content">
                        <div class="other-choice-title">Kết nối với người thật</div>
                        <div class="other-choice-desc">Trò chuyện ẩn danh với một người bạn đồng hành. Đôi khi một trái tim người thật sẽ giúp bạn hơn.</div>
                    </div>
                    <div class="other-choice-arrow"><i class="fas fa-arrow-right"></i></div>
                </button>
            </div>
            <p class="other-panel-footer"><i class="fas fa-lock" style="font-size:10px;margin-right:4px"></i>Hoàn toàn ẩn danh · Không lưu dữ liệu cá nhân</p>
        </div>`;
        panel.addEventListener('click', (e) => {
            if (e.target === panel) closeOtherPanel();
        });
        document.body.appendChild(panel);
    }
    requestAnimationFrame(() => {
        panel.classList.add('other-panel-show');
    });
}

function closeOtherPanel() {
    const panel = document.getElementById('otherPanel');
    if (!panel) return;
    panel.classList.remove('other-panel-show');
    panel.classList.add('other-panel-hide');
    setTimeout(() => {
        panel.classList.remove('other-panel-hide');
    }, 350);
}

function chooseOtherAI() {
    closeOtherPanel();
    // Switch to free AI chat mode while keeping topic context
    isFreeChat = true;
    document.getElementById('panelRight').classList.add('hidden');
    document.getElementById('panelLeft').classList.add('full-width');
    document.getElementById('chatInputArea').style.display = 'flex';
    document.getElementById('messagesArea').style.display = 'flex';
    // Add a transition message
    addBotMessage('Mình đang lắng nghe bạn đây 🌸 Hãy chia sẻ bất cứ điều gì bạn muốn nói, những tâm tư trong lòng.');
    freeChatHistory = [];
    setTimeout(() => document.getElementById('chatInput').focus(), 300);
}

function chooseOtherPeer() {
    closeOtherPanel();
    // Switch to peer chat setup
    if (socket) { socket.emit('leave_chat'); socket.disconnect(); socket = null; }
    isInPeerChat = false;
    peerRoom = null;
    document.getElementById('panelRight').classList.add('hidden');
    document.getElementById('panelLeft').classList.add('full-width');
    document.getElementById('chatInputArea').style.display = 'none';
    document.getElementById('messagesArea').style.display = 'none';
    document.getElementById('peerChatActive').style.display = 'none';
    document.getElementById('peerChatInputArea').style.display = 'none';
    document.getElementById('peerChatSetup').style.display = 'flex';
    // Update topic badge
    document.getElementById('topicBadge').textContent = 'Kết Nối Bạn Bè';
}

// ─────────────────────────────────────────────
// MESSAGE HELPERS
// ─────────────────────────────────────────────
function addUserMessage(text) {
    const area = document.getElementById('messagesArea');
    const div = document.createElement('div');
    div.className = 'msg user';
    div.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
    area.appendChild(div);
    scrollDown();
}

function addBotMessage(text) {
    const area = document.getElementById('messagesArea');
    const div = document.createElement('div');
    div.className = 'msg bot';
    const clickable = !isFreeChat;
    div.innerHTML = `
        <div class="msg-avatar">✿</div>
        <div class="msg-bubble${clickable ? ' clickable' : ''}">${escapeHtml(text)}</div>
    `;
    if (clickable) {
        div.querySelector('.msg-bubble').addEventListener('click', () => openModal(text));
    }
    area.appendChild(div);
    scrollDown();
}

function showTyping() {
    const area = document.getElementById('messagesArea');
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.id = 'typingMsg';
    div.innerHTML = `
        <div class="msg-avatar">✿</div>
        <div class="typing-bubble">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>`;
    area.appendChild(div);
    scrollDown();
}

function removeTyping() {
    const el = document.getElementById('typingMsg');
    if (el) el.remove();
}

function scrollDown() {
    const area = document.getElementById('messagesArea');
    setTimeout(() => { area.scrollTop = area.scrollHeight; }, 50);
}

// ─────────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────────
function openModal(text) {
    document.getElementById('modalText').innerHTML = `<p style="white-space:pre-wrap;">${escapeHtml(text)}</p>`;
    document.getElementById('modalOverlay').classList.add('show');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('show');
}

document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// ─────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────
function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\n/g, '<br>');
}