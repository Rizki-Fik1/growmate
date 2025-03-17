export const SidebarQuestion = () => {
    return `
        <div class="sidebar">
            <!-- Sidebar Content Container -->
            <div class="sidebar-content" id="sidebar-content">
                <!-- Forum Categories Card with Create Forum Button -->
                <div class="sidebar-card">
                    <!-- Create Forum Button -->
                    <button class="create-forum-btn">
                        <i class="fas fa-plus"></i>
                        Buat Forum
                    </button>
                    
                    <!-- Forum Categories -->
                    <div class="forum-categories">
                        <h3 class="category-heading">Kategori Forum <i class="fas fa-chevron-down category-toggle"></i></h3>
                        <div class="categories-container">
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
                </div>

                <!-- Friends Section Card -->
                <div class="sidebar-card">
                    <h3 class="friends-heading">Teman-teman mu <i class="fas fa-chevron-down friends-toggle"></i></h3>
                    <div class="friends-container">
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
            </div>
        </div>
    `;
}; 

// Initialize sidebar events after component is rendered
export const initSidebarQuestionEvents = () => {
    // Toggle categories section
    const categoryToggle = document.querySelector('.category-toggle');
    const categoriesContainer = document.querySelector('.categories-container');
    
    if (categoryToggle && categoriesContainer) {
        categoryToggle.addEventListener('click', (e) => {
            e.preventDefault();
            categoriesContainer.classList.toggle('collapsed');
            categoryToggle.classList.toggle('rotated');
        });
    }
    
    // Toggle friends section
    const friendsToggle = document.querySelector('.friends-toggle');
    const friendsContainer = document.querySelector('.friends-container');
    
    if (friendsToggle && friendsContainer) {
        friendsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            friendsContainer.classList.toggle('collapsed');
            friendsToggle.classList.toggle('rotated');
        });
    }
}; 