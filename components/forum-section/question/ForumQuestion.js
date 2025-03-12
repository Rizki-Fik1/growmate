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
        
        // Event listener untuk tombol jawab
        jawabButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Fitur jawab pertanyaan akan segera hadir!');
            });
        });
        
        // Event listener untuk tombol simpan
        simpanButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Pertanyaan telah disimpan!');
                button.classList.toggle('saved');
            });
        });
        
        // Setup event listener untuk menu options
        const optionsButtons = document.querySelectorAll('.post-options');
        optionsButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Menu options akan segera hadir!');
            });
        });
    };

    // Memanggil setup events setelah DOM selesai di-load
    setTimeout(() => {
        setupButtonEvents();
    }, 100);

    return `
        <div class="main-content">
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
        </div>
    `;
};