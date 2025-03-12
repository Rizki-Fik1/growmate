export const SidebarQuestion = () => {
    return `
        <div class="sidebar">
            <!-- Info Pertanyaan Section -->
            <div class="sidebar-card">
                <h2 class="sidebar-title">Info Pertanyaan</h2>
                
                <hr class="sidebar-divider">
                
                <div class="sidebar-menu">
                    <div class="sidebar-menu-item">
                        <i class="far fa-edit"></i>
                        <span>Pertanyaan Umum</span>
                    </div>
                    
                    <div class="sidebar-menu-item">
                        <i class="fas fa-fire"></i>
                        <span>Pertanyaan Trend</span>
                    </div>
                    
                    <div class="sidebar-menu-item">
                        <i class="far fa-comment-alt"></i>
                        <span>Jawaban Anda</span>
                    </div>
                    
                    <div class="sidebar-menu-item">
                        <i class="far fa-bookmark"></i>
                        <span>Tersimpan</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}; 