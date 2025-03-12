export const ForumSidebar = () => {
    return `
        <div class="sidebar">
            <!-- Forum Categories Card with Create Forum Button -->
            <div class="sidebar-card">
                <!-- Create Forum Button -->
                <button class="create-forum-btn">
                    <i class="fas fa-plus"></i>
                    Buat Forum
                </button>
                
                <!-- Forum Categories -->
                <div class="forum-categories">
                    <div class="forum-category">
                        <img src="https://via.placeholder.com/32" alt="Harian Anak Kos">
                        <span>Harian Anak Kos</span>
                    </div>
                    <div class="forum-category">
                        <img src="https://via.placeholder.com/32" alt="Secangkir Kopi">
                        <span>Secangkir Kopi</span>
                    </div>
                    <div class="forum-category">
                        <img src="https://via.placeholder.com/32" alt="Sharing Experience">
                        <span>Sharing Experience</span>
                    </div>
                    <div class="forum-category">
                        <img src="https://via.placeholder.com/32" alt="Cari Teman Belajar">
                        <span>Cari Teman Belajar</span>
                    </div>
                    <div class="forum-category">
                        <img src="https://via.placeholder.com/32" alt="Forum Motivasi">
                        <span>Forum Motivasi</span>
                    </div>
                </div>
            </div>

            <!-- Friends Section Card -->
            <div class="sidebar-card">
                <h3>Teman-teman mu :</h3>
                <div class="friend-item">
                    <img src="https://via.placeholder.com/32" alt="Sigmaffan">
                    <span>Sigmaffan</span>
                    <div class="status online"></div>
                </div>
                <div class="friend-item">
                    <img src="https://via.placeholder.com/32" alt="Fikoajaa9">
                    <span>Fikoajaa9</span>
                    <div class="status offline"></div>
                </div>
                <div class="friend-item">
                    <img src="https://via.placeholder.com/32" alt="KingAhmed">
                    <span>KingAhmed</span>
                    <div class="status online"></div>
                </div>
            </div>
        </div>
    `;
}; 