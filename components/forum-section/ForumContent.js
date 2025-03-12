export const ForumContent = () => {
    // Fungsi untuk menghandle tampilan popup dan tab switching
    const setupPopupEvents = () => {
        // Mendapatkan elemen-elemen yang dibutuhkan
        const filterDropdown = document.querySelector('.filter-dropdown');
        const popupOverlay = document.getElementById('popup-question');
        const closeButton = document.querySelector('.popup-close');
        const sendButton = document.querySelector('.send-button');
        
        // Event listener untuk filter dropdown
        filterDropdown.addEventListener('click', () => {
            popupOverlay.style.display = 'flex';
        });
        
        // Event listener untuk tombol close
        closeButton.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
        });
        
        // Event listener untuk tombol kirim
        sendButton.addEventListener('click', () => {
            // Disini bisa ditambahkan logika untuk memproses pertanyaan
            const questionText = document.querySelector('.question-input').value;
            if (questionText.trim() !== '') {
                alert('Pertanyaan berhasil dikirim: ' + questionText);
                document.querySelector('.question-input').value = '';
                popupOverlay.style.display = 'none';
            } else {
                alert('Silakan masukkan pertanyaan terlebih dahulu');
            }
        });
        
        // Tutup popup jika user mengklik area di luar popup
        window.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
        
        // Tab switching
        const tabs = document.querySelectorAll('.popup-tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Menghapus class active dari semua tab
                tabs.forEach(t => t.classList.remove('active'));
                // Menambahkan class active ke tab yang diklik
                tab.classList.add('active');
                
                // Menyembunyikan semua tab content
                tabContents.forEach(content => {
                    content.style.display = 'none';
                });
                
                // Menampilkan tab content yang sesuai
                tabContents[index].style.display = 'block';
            });
        });
        
        // Setup event listener untuk question cards
        const questionCards = document.querySelectorAll('.question-card');
        questionCards.forEach(card => {
            card.addEventListener('click', () => {
                // Redirect ke halaman detail pertanyaan (bisa diganti dengan URL yang sesuai)
                // alert('Navigating to question details...');
                // window.location.href = '/question-details.html'; // Uncomment ini untuk implementasi redirect
            });
        });
    };

    // Memanggil setup events setelah DOM selesai di-load
    setTimeout(() => {
        setupPopupEvents();
    }, 100);

    return `
        <div class="main-content">
            <!-- Forum Header Card -->
            <div class="content-card forum-header-card">
                <div class="forum-header">
                    <div class="forum-title">
                        <h1>Mate Forum</h1>
                        <h2>Home</h2>
                    </div>
                    <div class="filter-dropdown">
                        <div class="filter-button">
                            <span>Apa yang sedang kamu pikirkan?</span>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Post Actions -->
                <div class="post-actions">
                    <button class="action-btn" id="post-action-btn">
                        <i class="fas fa-edit"></i>
                        Post
                    </button>
                    <a href="question-forum.html" class="action-btn" id="forum-question-page">
                        <i class="fas fa-question-circle"></i>
                        Tanya
                    </a>
                    <button class="action-btn" id="jawab-action-btn">
                        <i class="fas fa-reply"></i>
                        Jawab
                    </button>
                </div>
            </div>

        <!-- Forum Posts -->
        <div class="forum-posts">
            <!-- Post 1 -->
            <div class="content-card forum-post">
                <div class="post-header">
                    <div class="post-author">
                        <img src="/api/placeholder/40/40" alt="AndiSulaiman">
                        <div class="author-info">
                            <span class="author-name">AndiSulaiman</span>
                            <span class="author-badge">Si Paling Aktif</span>
                        </div>
                    </div>
                    <div class="post-date">28 Jan 2025</div>
                </div>
                <div class="post-content">
                    <h3>Rekomendasi film apa yang bagus untuk akhir tahun?</h3>
                    <p>Sebenarnya, ada banyak film yang ingin saya rekomendasikan. Namun untuk kali ini, mungkin hanya ada beberapa yang bisa saya bagikan, sesuai dengan mood saya :)</p>
                    <img src="../../assets/img/Film.png" alt="Film Recommendations" class="post-image">
                </div>
                <div class="post-actions-bottom">
                    <div class="post-reactions">
                        <div class="reaction-btn liked">
                            <i class="fas fa-thumbs-up"></i>
                            <span>79</span>
                        </div>
                        <div class="reaction-btn">
                            <i class="fas fa-thumbs-down"></i>
                            <span>4</span>
                        </div>
                    </div>
                    <div class="post-comments">
                        <i class="fas fa-comment"></i>
                        <span>4</span>
                    </div>
                    <div class="post-share">
                        <i class="fas fa-share"></i>
                        <span>11</span>
                    </div>
                </div>
            </div>

            <!-- Post 2 -->
            <div class="content-card forum-post">
                <div class="post-header">
                    <div class="post-author">
                        <img src="/api/placeholder/40/40" alt="HerryPrastyo">
                        <div class="author-info">
                            <span class="author-name">HerryPrastyo</span>
                        </div>
                    </div>
                    <div class="post-date">17 Jan 2025</div>
                </div>
                <div class="post-content">
                    <h3>Bagaimana cara mengatasi writer's block?</h3>
                    <p>Saya sedang mengalami kesulitan menulis untuk proyek akhir semester. Ada yang punya tips?</p>
                </div>
                <div class="post-actions-bottom">
                    <div class="post-reactions">
                        <div class="reaction-btn">
                            <i class="fas fa-thumbs-up"></i>
                            <span>23</span>
                        </div>
                        <div class="reaction-btn">
                            <i class="fas fa-thumbs-down"></i>
                            <span>2</span>
                        </div>
                    </div>
                    <div class="post-comments">
                        <i class="fas fa-comment"></i>
                        <span>7</span>
                    </div>
                    <div class="post-share">
                        <i class="fas fa-share"></i>
                        <span>3</span>
                    </div>
                </div>
            </div>

            <!-- Post 3 (Additional) -->
            <div class="content-card forum-post">
                <div class="post-header">
                    <div class="post-author">
                        <img src="/api/placeholder/40/40" alt="DianaWijaya">
                        <div class="author-info">
                            <span class="author-name">DianaWijaya</span>
                            <span class="author-badge">Kontributor</span>
                        </div>
                    </div>
                    <div class="post-date">10 Feb 2025</div>
                </div>
                <div class="post-content">
                    <h3>Review kafe baru di Jakarta Selatan</h3>
                    <p>Minggu lalu saya berkunjung ke kafe yang baru buka di daerah Kemang. Suasananya nyaman dan cocok untuk kerja remote. Menu kopi dan makanannya juga enak!</p>
                    <img src="/api/placeholder/600/300" alt="Cafe Review" class="post-image">
                </div>
                <div class="post-actions-bottom">
                    <div class="post-reactions">
                        <div class="reaction-btn liked">
                            <i class="fas fa-thumbs-up"></i>
                            <span>45</span>
                        </div>
                        <div class="reaction-btn">
                            <i class="fas fa-thumbs-down"></i>
                            <span>1</span>
                        </div>
                    </div>
                    <div class="post-comments">
                        <i class="fas fa-comment"></i>
                        <span>12</span>
                    </div>
                    <div class="post-share">
                        <i class="fas fa-share"></i>
                        <span>8</span>
                    </div>
                </div>
            </div>

            <!-- Post 4 (Additional) -->
            <div class="content-card forum-post">
                <div class="post-header">
                    <div class="post-author">
                        <img src="/api/placeholder/40/40" alt="BudiSantoso">
                        <div class="author-info">
                            <span class="author-name">BudiSantoso</span>
                        </div>
                    </div>
                    <div class="post-date">5 Feb 2025</div>
                </div>
                <div class="post-content">
                    <h3>Tips belajar coding untuk pemula?</h3>
                    <p>Saya baru mulai belajar programming. Ada rekomendasi sumber belajar online yang bagus untuk pemula?</p>
                </div>
                <div class="post-actions-bottom">
                    <div class="post-reactions">
                        <div class="reaction-btn">
                            <i class="fas fa-thumbs-up"></i>
                            <span>38</span>
                        </div>
                        <div class="reaction-btn">
                            <i class="fas fa-thumbs-down"></i>
                            <span>0</span>
                        </div>
                    </div>
                    <div class="post-comments">
                        <i class="fas fa-comment"></i>
                        <span>15</span>
                    </div>
                    <div class="post-share">
                        <i class="fas fa-share"></i>
                        <span>6</span>
                    </div>
                </div>
            </div>
        </div>

            <!-- Popup Question -->
            <div id="popup-question" class="popup-overlay" style="display: none;">
                <div class="popup-container">
                    <div class="popup-close">
                        <i class="fas fa-times"></i>
                    </div>
                    <div class="popup-header">
                        <div class="popup-tab active">Buat Pertanyaan</div>
                        <div class="popup-tab">Daftar Pertanyaan</div>
                    </div>
                    
                    <!-- Tab contents -->
                    <div class="tab-content" style="display: block;">
                        <div class="popup-body">
                            <div class="user-info">
                                <div class="user-avatar">
                                    <img src="../../assets/img/profile-dummy 1.png" alt="User Avatar">
                                </div>
                                <div class="visibility-selector">
                                    <i class="fas fa-eye"></i>
                                    <span>Publik</span>
                                </div>
                            </div>
                            <textarea class="question-input" placeholder="Tanyakan sesuatu. Mulai dengan kata 'Apa', 'Bagaimana', dll..."></textarea>
                        </div>
                        <div class="popup-footer">
                            <button class="send-button">
                                Kirim
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Daftar Pertanyaan Tab -->
                    <div class="tab-content" style="display: none;">
                        <div class="popup-body question-list">
                            <!-- Question Card 1 -->
                            <div class="question-card">
                                <p>Bagaimana cara agar saya dapat fokus mengembangkan skill saya, di kala tugas sekolah yang teramat banyak?</p>
                                <div class="question-divider"></div>
                            </div>
                            
                            <!-- Question Card 2 -->
                            <div class="question-card">
                                <p>Bagaimana cara agar karir tidak stuck sebagai seorang pelajar? Apa saja yang sekiranya harus dikuasai sebelum terjun ke dunia kerja?</p>
                                <div class="question-divider"></div>
                            </div>
                            
                            <!-- Question Card 3 -->
                            <div class="question-card">
                                <p>Apa tips terbaik untuk belajar bahasa pemrograman baru dengan cepat?</p>
                                <div class="question-divider"></div>
                            </div>
                            
                            <!-- Question Card 4 -->
                            <div class="question-card">
                                <p>Bagaimana cara terbaik untuk membangun portfolio sebagai pelajar?</p>
                                <div class="question-divider"></div>
                            </div>
                            
                            <!-- Question Card 5 -->
                            <div class="question-card">
                                <p>Apa saja soft skill yang paling dibutuhkan di industri teknologi saat ini?</p>
                                <div class="question-divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export const initForumContentEvents = () => {
    // Handle action buttons active state
    const actionButtons = document.querySelectorAll('.post-actions .action-btn');
    
    actionButtons.forEach(button => {
        if (button.id !== 'forum-question-page') { // Updated ID reference to match the HTML template
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                actionButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
            });
        }
    });
    
    // Add hover effect for post action button
    const postActionBtn = document.getElementById('post-action-btn');
    if (postActionBtn) {
        postActionBtn.addEventListener('mouseenter', () => {
            if (!postActionBtn.classList.contains('active')) {
                postActionBtn.classList.add('hover');
            }
        });
        
        postActionBtn.addEventListener('mouseleave', () => {
            postActionBtn.classList.remove('hover');
        });
    }
    
    // Set active class on the forum question page link when it's clicked
    const forumQuestionBtn = document.getElementById('forum-question-page');
    if (forumQuestionBtn) {
        forumQuestionBtn.addEventListener('click', () => {
            // Remove active class from all buttons
            actionButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to forum question button
            forumQuestionBtn.classList.add('active');
        });
    }
};