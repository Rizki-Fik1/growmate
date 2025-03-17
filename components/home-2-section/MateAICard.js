export const MateAICard = () => {
    return `
        <div class="mate-ai-card">
            <div class="mate-ai-header">
                <h3 class="mate-ai-title">Mate AI</h3>
            </div>
            <div class="mate-ai-content">
                <h2 class="mate-ai-prompt">Tanya Mate AI</h2>
                
                <div class="mate-ai-features">
                    <div class="feature-item">
                        <div class="feature-icon question">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                                <path d="M12 17V16.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M12 14.5V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <p class="feature-text">Ga perlu bingung lagi mau mulai improve dari mana.</p>
                    </div>
                    
                    <div class="feature-item">
                        <div class="feature-icon smile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                <circle cx="9" cy="10" r="1" fill="currentColor"/>
                                <circle cx="15" cy="10" r="1" fill="currentColor"/>
                            </svg>
                        </div>
                        <p class="feature-text">Jangan ragukan kemampuan Mate. Segalanya ada disini.</p>
                    </div>
                </div>
                
                <div class="mate-ai-input-container">
                    <input type="text" class="mate-ai-input" placeholder="Apa yang ingin dikerjakan?">
                    <button class="mate-ai-send-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13 6L19 12L13 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div class="mate-ai-disclaimer">
                    <p>MateAI can make mistakes. Check <span class="important-text">important info</span>.</p>
                </div>
            </div>
        </div>
    `;
}; 