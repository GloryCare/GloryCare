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
        options.forEach((opt, i) => {
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