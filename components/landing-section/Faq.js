export const FAQ = () => {
    return `
        <div class="faq-container">
            <div class="faq-header">
                <h1 class="faq-title">Masih bingung gimana <br> cara kerja 
                <span class="text-green">GrowMate?</span></h1>
                <span class="faq-subtitle">Kami sudah mengklasifikasi segala macam pertanyaan yang <br> mungkin muncul seputar website GrowMate.</span>
            </div>

            <div class="faq-item">
                <h3 class="faq-question">Apa itu GrowMate?</h3>
                <div class="faq-toggle">+</div>
            </div>

            <div class="faq-item">
                <h3 class="faq-question">Apa saja fitur utama yang tersedia di GrowMate?</h3>
                <div class="faq-toggle">+</div>
            </div>

            <div class="faq-item">
                <h3 class="faq-question">Apakah GrowMate gratis digunakan?</h3>
                <div class="faq-toggle">+</div>
            </div>

            <div class="faq-item">
                <h3 class="faq-question">Apakah GrowMate memiliki batasan usia?</h3>
                <div class="faq-toggle">+</div>
            </div>

            <div class="faq-item">
                <h3 class="faq-question">Apakah bisa menggunakan GrowMate tanpa Login?</h3>
                <div class="faq-toggle">+</div>
            </div>

            <div class="faq-contact-section">
                <div class="faq-contact-input-wrapper">
                    <input 
                        type="text" 
                        class="faq-contact-input" 
                        placeholder="Tidak menemukan jawaban yang sesuai?"
                    >
                </div>
                <button class="faq-contact-btn">
                    Hubungi Kami
                    <span>✉</span>
                </button>
            </div>
        </div>
    `;
};