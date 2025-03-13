export const AIChat = () => {
  setTimeout(() => {
    const chatContainer = document.querySelector(".chat-container");
    const inputField = document.querySelector("#chat-input");
    const sendButton = document.querySelector("#send-button");

    let messages = [];

    const userMessage = localStorage.getItem("userMessage");
    if (userMessage) {
      messages.push({ sender: "user", text: userMessage });

      setTimeout(() => {
        messages.push({
          sender: "bot",
          text: "Hi, saya adalah Mate AI. Saya siap membantu Kamu!",
        });

        renderMessages();
      }, 1000);
    }

const renderMessages = () => {
  chatContainer.innerHTML = messages
    .map(
      (msg) => `
      <div class="message-container ${msg.sender === 'user' ? 'user-container' : 'bot-container'}">
        ${msg.sender === "user" 
          ? `<div class="user-message">${msg.text}</div>
            <img src="/assets/img/icon-dummy1.png" class="user-avatar" alt="User" />`
          : `<img src="/assets/img/ai-icon.png" class="bot-avatar" alt="Bot" />
             <div class="bot-message">${msg.text}</div>`}
      </div>
    `
    )
    .join("");

  chatContainer.scrollTop = chatContainer.scrollHeight;
};

    renderMessages();
    localStorage.removeItem("userMessage");

    sendButton.onclick = () => {
      const newUserMessage = inputField.value.trim();
      if (!newUserMessage) return;

      messages.push({ sender: "user", text: newUserMessage });
      renderMessages();

      inputField.value = "";

      setTimeout(() => {
        messages.push({
          sender: "bot",
          text: "Terima kasih telah bertanya! Ada yang lain?",
        });

        renderMessages();
      }, 1000);
    };
  }, 0);

  return `
    <div class="ai-chat">
      <div class="chat-container"></div>
      <div class="chat-input-container">
        <input type="text" id="chat-input" placeholder="Ketik sesuatu..." />
        <svg class="ai-icon-sending" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
          <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
        </svg>
      </div>
      <p class="chat-hint">Mate AI dapat melakukan kesalahan. Cek info penting.</p>
    </div>
  `;
};
