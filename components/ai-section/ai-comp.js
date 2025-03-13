export const AIComponent = () => {
  setTimeout(() => {
    const form = document.querySelector(".ai-search");
    const inputField = document.querySelector(".ai-search-input");

    if (form && inputField) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const userMessage = inputField.value.trim();

        if (userMessage) {
          // Simpan pesan user di localStorage
          localStorage.setItem("userMessage", userMessage);

          // Redirect ke halaman chat
          window.location.hash = "aichat";
        }
      });
    }
  }, 0);

  return`
  <div class="ai-comp">
    <div class="ai-comp-logo">
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ai-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    </div>
    <p class="ai-main-title-one">Tanyakan apa saja ke <span>Mate AI</span></p>
    <p class="ai-main-title-two">Mate AI akan senang hati membantu kamu menjawab semua pertanyaan. Khususnya topik mengenai pengembangan diri.</p>

    <div class="ai-comp-card">
      <div class="ai-card-one">
        <svg width="30" heigt="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ai-icon-chat">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        <p class="ai-card-title-one">Responsif</p>
        <p class="ai-card-text-one">Mate bisa menjawab pertanyaan apapun, sesuai keinginan Anda.</p>
      </div>

      <div class="ai-card-two">
        <svg width="30" heigt="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ai-icon-hat">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        <p class="ai-card-title-two">Edukatif</p>
        <p class="ai-card-text-two">Mate adalah solusi tepat bagi kalian yang ingin improve diri.</p>
      </div>

      <div class="ai-card-three">
        <svg width="30" heigt="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ai-icon-clock">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <p class="ai-card-title-three">Fleksibel</p>
        <p class="ai-card-text-three">Mate dapat menjawab semua pertanyaanmu kapan saja.</p>
      </div>
    </div>

      <form class="ai-search">
        <input type="text" class="ai-search-input" placeholder="Tanyakan sesuatu pada Mate..." required>
        <button type="submit" class="ai-search-btn">
          <svg class="ai-icon-send" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
          </svg>
        </button>
      </form>
  </div>
  `
}