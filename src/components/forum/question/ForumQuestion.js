export const ForumQuestion = () => {
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

    // Fungsi untuk menghandle interaksi dengan tombol jawab dan simpan
    const setupButtonEvents = () => {
        // Mendapatkan semua tombol jawab dan simpan
        const jawabButtons = document.querySelectorAll('.jawab-btn');
        const simpanButtons = document.querySelectorAll('.simpan-btn');
        const answerPopup = document.getElementById('popup-answer');
        const answerCloseButton = document.querySelector('#popup-answer .popup-close');
        const answerSendButton = document.querySelector('#popup-answer .send-button');
        const notificationPopup = document.getElementById('notification-popup');
        
        // Event listener untuk tombol jawab
        jawabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Tampilkan popup jawaban
                answerPopup.style.display = 'flex';
                // Focus pada textarea
                document.querySelector('#popup-answer .answer-input').focus();
            });
        });
        
        // Event listener untuk tombol close pada popup jawaban
        if (answerCloseButton) {
            answerCloseButton.addEventListener('click', () => {
                answerPopup.style.display = 'none';
            });
        }
        
        // Event listener untuk tombol kirim pada popup jawaban
        if (answerSendButton) {
            answerSendButton.addEventListener('click', () => {
                const answerText = document.querySelector('#popup-answer .answer-input').value;
                if (answerText.trim() !== '') {
                    alert('Jawaban berhasil dikirim: ' + answerText);
                    document.querySelector('#popup-answer .answer-input').value = '';
                    answerPopup.style.display = 'none';
                } else {
                    alert('Silakan masukkan jawaban terlebih dahulu');
                }
            });
        }
        
        // Tutup popup jawaban jika user mengklik area di luar popup
        window.addEventListener('click', (e) => {
            if (e.target === answerPopup) {
                answerPopup.style.display = 'none';
            }
        });
        
        // Event listener untuk tombol simpan
        simpanButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('saved');
                
                // Tampilkan notifikasi
                notificationPopup.textContent = 'Pertanyaan sudah tersimpan';
                notificationPopup.classList.add('show');
                
                // Sembunyikan notifikasi setelah 3 detik
                setTimeout(() => {
                    notificationPopup.classList.remove('show');
                }, 3000);
            });
        });
        
        // Setup event listener untuk menu options
        const optionsButtons = document.querySelectorAll('.post-options');
        optionsButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Menu options akan segera hadir!');
            });
        });
        
        // Setup event listener untuk action buttons
        const actionButtons = document.querySelectorAll('.post-actions .action-btn');
        
        actionButtons.forEach(button => {
            if (button.id !== 'forum-question-page') {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    actionButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                });
            }
        });
        
        // Set active class on the forum question page button when it's clicked
        const forumQuestionBtn = document.getElementById('forum-question-page');
        if (forumQuestionBtn) {
            forumQuestionBtn.addEventListener('click', () => {
                // Remove active class from all buttons
                actionButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to forum question button
                forumQuestionBtn.classList.add('active');
                
                // Navigate to question-forum.html
                window.location.href = 'question-forum.html';
            });
        }
        
        // Add navigation for post-action-btn
        const postActionBtn = document.getElementById('post-action-btn');
        if (postActionBtn) {
            postActionBtn.addEventListener('click', () => {
                // Remove active class from all buttons
                actionButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to post action button
                postActionBtn.classList.add('active');
                
                // Navigate to forum.html
                window.location.href = 'forum.html';
            });
            
            postActionBtn.addEventListener('mouseenter', () => {
                if (!postActionBtn.classList.contains('active')) {
                    postActionBtn.classList.add('hover');
                }
            });
            
            postActionBtn.addEventListener('mouseleave', () => {
                postActionBtn.classList.remove('hover');
            });
        }
        
        // Add navigation for jawab-action-btn
        const jawabActionBtn = document.getElementById('jawab-action-btn');
        if (jawabActionBtn) {
            jawabActionBtn.addEventListener('click', () => {
                // Remove active class from all buttons
                actionButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to jawab action button
                jawabActionBtn.classList.add('active');
                
                // Navigate to answer-forum.html
                window.location.href = 'answer-forum.html';
            });
        }
    };

    // Memanggil setup events setelah DOM selesai di-load
    setTimeout(() => {
        setupButtonEvents();
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
                    <button class="action-btn" id="forum-question-page">
                        <i class="fas fa-question-circle"></i>
                        Tanya
                    </button>
                    <button class="action-btn" id="jawab-action-btn">
                        <i class="fas fa-reply"></i>
                        Jawab
                    </button>
                </div>
            </div>
            
            <h1 class="section-title">Pertanyaan <span class="trending-text">Trending</span></h1>
            
            <!-- Forum Posts -->
            <div class="forum-posts">
                <!-- Post 1 -->
                <div class="content-card forum-post">
                    <div class="post-header">
                        <div class="post-author">
                            <img src="/api/placeholder/40/40" alt="P">
                            <div class="author-info">
                                <span class="author-name">P</span>
                                <div class="post-meta">
                                    <span class="post-date">27 Jan 2025</span>
                                    <span class="post-category kategori-politik">Kategori Politik</span>
                                </div>
                            </div>
                        </div>
                        <div class="post-options">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                    
                    <div class="post-type">
                        <i class="fas fa-question-circle"></i>
                        <span>Pertanyaan (Aktif)</span>
                    </div>
                    
                    <div class="post-content">
                        <h3>Apa tanggapan kalian terkait 100 hari pemerintahan Prabowo-Gibran?</h3>
                    </div>
                    
                    <div class="post-footer">
                        <div class="post-stats">
                            <span class="stat-item">3 jawaban</span>
                            <span class="stat-separator">•</span>
                            <span class="stat-item">1.3k suka</span>
                            <span class="stat-separator">•</span>
                            <span class="stat-item">64 share</span>
                        </div>
                        
                        <div class="post-actions-bottom">
                            <button class="action-button jawab-btn">
                                <i class="fas fa-comment"></i>
                                Jawab
                            </button>
                            <button class="action-button simpan-btn">
                                <i class="far fa-bookmark"></i>
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Post 2 -->
                <div class="content-card forum-post">
                    <div class="post-header">
                        <div class="post-author">
                            <img src="/api/placeholder/40/40" alt="GioFufah">
                            <div class="author-info">
                                <span class="author-name">GioFufah</span>
                                <div class="post-meta">
                                    <span class="post-date">22 Jan 2025</span>
                                    <span class="post-category kategori-edukasi">Kategori Edukasi</span>
                                </div>
                            </div>
                        </div>
                        <div class="post-options">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                    
                    <div class="post-type">
                        <i class="fas fa-question-circle"></i>
                        <span>Pertanyaan (Aktif)</span>
                    </div>
                    
                    <div class="post-content">
                        <h3>Apa langkah yang benar-benar tepat agar Pendidikan kita maju?</h3>
                    </div>
                    
                    <div class="post-footer">
                        <div class="post-stats">
                            <span class="stat-item">3 jawaban</span>
                            <span class="stat-separator">•</span>
                            <span class="stat-item">964 suka</span>
                            <span class="stat-separator">•</span>
                            <span class="stat-item">35 share</span>
                        </div>
                        
                        <div class="post-actions-bottom">
                            <button class="action-button jawab-btn">
                                <i class="fas fa-comment"></i>
                                Jawab
                            </button>
                            <button class="action-button simpan-btn">
                                <i class="far fa-bookmark"></i>
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Post 3 -->
                <div class="content-card forum-post">
                    <div class="post-header">
                        <div class="post-author">
                            <img src="/api/placeholder/40/40" alt="Ahmad">
                            <div class="author-info">
                                <span class="author-name">Ahmad</span>
                                <div class="post-meta">
                                    <span class="post-date">22 Jan 2025</span>
                                    <span class="post-category kategori-teknologi">Kategori Teknologi</span>
                                </div>
                            </div>
                        </div>
                        <div class="post-options">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                    
                    <div class="post-type">
                        <i class="fas fa-question-circle"></i>
                        <span>Pertanyaan (Aktif)</span>
                    </div>
                    
                    <div class="post-content">
                        <h3>Yoo guysss... pada setuju gak kalo penerapan teknologi Blockchain di Indonesia...</h3>
                    </div>
                    
                    <div class="post-footer">
                        <div class="post-stats">
                            <span class="stat-item">0 jawaban</span>
                            <span class="stat-separator">•</span>
                            <span class="stat-item">124 suka</span>
                            <span class="stat-separator">•</span>
                            <span class="stat-item">12 share</span>
                        </div>
                        
                        <div class="post-actions-bottom">
                            <button class="action-button jawab-btn">
                                <i class="fas fa-comment"></i>
                                Jawab
                            </button>
                            <button class="action-button simpan-btn">
                                <i class="far fa-bookmark"></i>
                                Simpan
                            </button>
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
            
            <!-- Popup Answer -->
            <div id="popup-answer" class="popup-overlay" style="display: none;">
                <div class="popup-container">
                    <div class="popup-close">
                        <i class="fas fa-times"></i>
                    </div>
                    <div class="popup-header">
                        <div class="popup-title">Berikan Jawaban Anda</div>
                    </div>
                    
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
                        <textarea class="answer-input" placeholder="Tulis jawaban Anda di sini..."></textarea>
                    </div>
                    <div class="popup-footer">
                        <button class="send-button">
                            Kirim Jawaban
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Notification Popup -->
            <div id="notification-popup" class="notification-popup"></div>
        </div>
    `;
};