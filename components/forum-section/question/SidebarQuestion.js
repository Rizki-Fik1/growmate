export const SidebarQuestion = () => {
    // Get current page path to determine which menu item should be active
    const currentPath = window.location.pathname;
    const isQuestionPage = currentPath.includes('question-forum.html');
    const isAnswersPage = currentPath.includes('answers-forum.html');
    
    return `
        <div class="sidebar">
            <!-- Info Pertanyaan Section -->
            <div class="sidebar-card">
                <h2 class="sidebar-title">Info Pertanyaan</h2>
                
                <hr class="sidebar-divider">
                
                <div class="sidebar-menu">
                    <div class="sidebar-menu-item ${isQuestionPage ? 'active' : ''}" onclick="window.location.href='question-forum.html'">
                        <i class="fas fa-fire"></i>
                        <span>Pertanyaan Trend</span>
                    </div>
                    
                    <div class="sidebar-menu-item ${isAnswersPage ? 'active' : ''}" onclick="window.location.href='answers-forum.html'">
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