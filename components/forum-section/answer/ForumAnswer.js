export const ForumAnswers = () => {
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
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all tab contents
                tabContents.forEach(content => {
                    content.style.display = 'none';
                });
                
                // Show the corresponding tab content
                tabContents[index].style.display = 'block';
            });
        });
    };


    // Memanggil setup events setelah DOM selesai di-load
    setTimeout(() => {
        setupPopupEvents();
    }, 100);

    // Fungsi untuk menghandle interaksi dengan tombol edit dan simpan
    const setupButtonEvents = () => {
        // Mendapatkan semua tombol edit dan simpan
        const editButtons = document.querySelectorAll('.jawab-btn');
        const simpanButtons = document.querySelectorAll('.simpan-btn');
        const answerPopup = document.getElementById('popup-answer');
        const answerCloseButton = document.querySelector('#popup-answer .popup-close');
        const answerSendButton = document.querySelector('#popup-answer .send-button');
        const notificationPopup = document.getElementById('notification-popup');
        
        // Event listener untuk tombol edit
        editButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Tampilkan popup edit jawaban
                answerPopup.style.display = 'flex';
                // Focus pada textarea
                document.querySelector('#popup-answer .answer-input').focus();
            });
        });
        
        // Event listener untuk tombol close pada popup edit
        if (answerCloseButton) {
            answerCloseButton.addEventListener('click', () => {
                answerPopup.style.display = 'none';
            });
        }
        
        // Event listener untuk tombol simpan perubahan pada popup edit
        if (answerSendButton) {
            answerSendButton.addEventListener('click', () => {
                const answerText = document.querySelector('#popup-answer .answer-input').value;
                if (answerText.trim() !== '') {
                    alert('Perubahan berhasil disimpan: ' + answerText);
                    document.querySelector('#popup-answer .answer-input').value = '';
                    answerPopup.style.display = 'none';
                } else {
                    alert('Silakan masukkan jawaban terlebih dahulu');
                }
            });
        }
        
        // Tutup popup edit jawaban jika user mengklik area di luar popup
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
                notificationPopup.textContent = 'Jawaban sudah tersimpan';
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
        if (postActionBtn) {
            postActionBtn.addEventListener('click', () => {
                // Remove active class from all buttons
                actionButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to post action button
                postActionBtn.classList.add('active');
                
                // Navigate to forum.html
                window.location.href = 'forum.html';
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
                        <span class="action-text">Post</span>
                    </button>
                    <button class="action-btn" id="forum-question-page">
                        <i class="fas fa-question-circle"></i>
                        <span class="action-text">Tanya</span>
                    </button>
                    <button class="action-btn active" id="jawab-action-btn">
                        <i class="fas fa-reply"></i>
                        <span class="action-text">Jawab</span>
                    </button>
                </div>
            </div>
            
            <h1 class="section-title">Jawaban <span class="trending-text">Anda</span></h1>
            
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
                        <i class="fas fa-comment"></i>
                        <span>Jawaban Anda</span>
                    </div>
                    
                    <div class="post-content">
                        <h3>Menurut saya, 100 hari pemerintahan Prabowo-Gibran sudah menunjukkan beberapa kemajuan di bidang ekonomi dan infrastruktur...</h3>
                    </div>
                    
                    <div class="post-footer">
                        <div class="post-stats">
                            <span class="stat-item">Menjawab pertanyaan: "Apa tanggapan kalian terkait 100 hari pemerintahan Prabowo-Gibran?"</span>
                        </div>
                        
                        <div class="post-actions-bottom">
                            <button class="action-button jawab-btn">
                                <i class="fas fa-edit"></i>
                                Edit
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
                        <i class="fas fa-comment"></i>
                        <span>Jawaban Anda</span>
                    </div>
                    
                    <div class="post-content">
                        <h3>Untuk memajukan pendidikan di Indonesia, kita perlu fokus pada peningkatan kualitas guru, pemerataan akses pendidikan, dan pembaruan kurikulum yang relevan dengan kebutuhan masa kini...</h3>
                    </div>
                    
                    <div class="post-footer">
                        <div class="post-stats">
                            <span class="stat-item">Menjawab pertanyaan: "Apa langkah yang benar-benar tepat agar Pendidikan kita maju?"</span>
                        </div>
                        
                        <div class="post-actions-bottom">
                            <button class="action-button jawab-btn">
                                <i class="fas fa-edit"></i>
                                Edit
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
                        <i class="fas fa-comment"></i>
                        <span>Jawaban Anda</span>
                    </div>
                    
                    <div class="post-content">
                        <h3>Saya setuju bahwa penerapan teknologi Blockchain di Indonesia memiliki potensi besar, terutama untuk transparansi dalam sistem keuangan dan pemerintahan...</h3>
                    </div>
                    
                    <div class="post-footer">
                        <div class="post-stats">
                            <span class="stat-item">Menjawab pertanyaan: "Yoo guysss... pada setuju gak kalo penerapan teknologi Blockchain di Indonesia..."</span>
                        </div>
                        
                        <div class="post-actions-bottom">
                            <button class="action-button jawab-btn">
                                <i class="fas fa-edit"></i>
                                Edit
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
                        <div class="popup-tab active">Tulis Jawaban</div>
                    </div>
                    
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
                            <textarea class="answer-input" placeholder="Tulis jawaban Anda di sini..."></textarea>
                        </div>
                        <div class="popup-footer">
                            <button class="send-button">
                                Kirim
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Notification Popup -->
            <div id="notification-popup" class="notification-popup"></div>
        </div>
    `;
};

// Initialize forum answer events
export const initForumAnswerEvents = () => {
    // Handle action buttons active state
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
    
    // Add navigation for post-action-btn
    const postActionBtn = document.getElementById('post-action-btn');
    if (postActionBtn) {
        postActionBtn.addEventListener('click', () => {
            // Navigate to forum.html
            window.location.href = 'forum.html';
        });
    }
    
    // Add navigation for forum-question-page button
    const forumQuestionBtn = document.getElementById('forum-question-page');
    if (forumQuestionBtn) {
        forumQuestionBtn.addEventListener('click', () => {
            // Navigate to question-forum.html
            window.location.href = 'question-forum.html';
        });
    }
    
    // Add navigation for jawab-action-btn
    const jawabActionBtn = document.getElementById('jawab-action-btn');
    if (jawabActionBtn) {
        jawabActionBtn.addEventListener('click', () => {
            // Navigate to answer-forum.html
            window.location.href = 'answer-forum.html';
        });
    }
}; 