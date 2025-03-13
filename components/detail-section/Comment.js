export const Comment = () => {
    
    // Artikel yang sesuai section
    const artikelYangSesuai = `
        <div class="related-articles-section">
            <div class="section-header">
                <h2>Artikel yang sesuai</h2>
                <a href="#" class="view-all">Lebih banyak <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></a>
            </div>
            <div class="popular-articles">
                <!-- Article Card 1 -->
                <div class="popular-article">
                    <div class="article-image">
                        <img src="../../assets/img/pizza.png" alt="Pizza">
                    </div>
                    <div class="article-info">
                        <div class="author">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                            <span class="author-name">mass.muhh_</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3 class="article-title">Pizza enak enak enak enak enak</h3>
                        <p class="article-excerpt">bahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhc...</p>
                    </div>
                </div>

                <!-- Article Card 2 -->
                <div class="popular-article">
                    <div class="article-image">
                        <img src="../../assets/img/pizza.png" alt="Pizza">
                    </div>
                    <div class="article-info">
                        <div class="author">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                            <span class="author-name">mass.muhh_</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3 class="article-title">Pizza enak enak enak enak enak</h3>
                        <p class="article-excerpt">bahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhc...</p>
                    </div>
                </div>

                <!-- Article Card 3 -->
                <div class="popular-article">
                    <div class="article-image">
                        <img src="../../assets/img/pizza.png" alt="Pizza">
                    </div>
                    <div class="article-info">
                        <div class="author">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                            <span class="author-name">mass.muhh_</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3 class="article-title">Pizza enak enak enak enak enak</h3>
                        <p class="article-excerpt">bahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhc...</p>
                    </div>
                </div>

                <!-- Article Card 4 -->
                <div class="popular-article">
                    <div class="article-image">
                        <img src="../../assets/img/pizza.png" alt="Pizza">
                    </div>
                    <div class="article-info">
                        <div class="author">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                            <span class="author-name">mass.muhh_</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3 class="article-title">Pizza enak enak enak enak enak</h3>
                        <p class="article-excerpt">bahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhcbahsdjdhjabadjshabjshabjshabjshabjhc...</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return `
        <div class="comment-section">
            <h3>Komentar (5)</h3>
            
            <!-- Comment Input -->
            <div class="comment-input-container">
                <img src="../../assets/img/profile-dummy 1.png" alt="User" class="user-avatar">
                <div class="comment-input-wrapper">
                    <textarea placeholder="Tulis komentar..." class="comment-input"></textarea>
                    <button class="comment-submit">Kirim</button>
                </div>
            </div>

            <!-- Comments List with Scrollable Container -->
            <div class="comments-container">
                <div class="comments-list">
                    <!-- Comment 1 -->
                    <div class="comment-item">
                        <img src="../../assets/img/profile-dummy 1.png" alt="Commenter" class="commenter-avatar">
                        <div class="comment-content">
                            <div class="comment-header">
                                <span class="commenter-name">Fiko Gans</span>
                                <span class="comment-time">1 menit lalu</span>
                            </div>
                            <p class="comment-text">Mantap bro artikel nya</p>
                            <div class="comment-actions">
                                <button class="action-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    1
                                </button>
                                <button class="action-btn comment-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    3
                                </button>
                                <button class="action-btn reply-btn" onclick="return toggleReplyInput(this)">Balas</button>
                            </div>

                            <!-- Reply Input Container (Hidden by default) -->
                            <div class="reply-input-container" style="display: none;">
                                <div class="comment-input-container nested">
                                    <img src="../../assets/img/profile-dummy 1.png" alt="User" class="user-avatar">
                                    <div class="comment-input-wrapper">
                                        <textarea placeholder="Ayo berdiskusi..." class="comment-input"></textarea>
                                        <button class="comment-submit">Balas</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Nested Reply -->
                            <div class="comment-replies">
                                <div class="comment-item nested">
                                    <img src="../../assets/img/profile-dummy 1.png" alt="Commenter" class="commenter-avatar">
                                    <div class="comment-content">
                                        <div class="comment-header">
                                            <span class="commenter-name">Budi Santoso</span>
                                            <span class="comment-time">30 menit lalu</span>
                                        </div>
                                        <p class="comment-text">Setuju banget, artikelnya informatif!</p>
                                        <div class="comment-actions">
                                            <button class="action-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                1
                                            </button>
                                            <button class="action-btn reply-btn" onclick="return toggleReplyInput(this)">Balas</button>
                                        </div>
                                        
                                        <!-- Reply Input Container (Hidden by default) -->
                                        <div class="reply-input-container" style="display: none;">
                                            <div class="comment-input-container nested">
                                                <img src="../../assets/img/profile-dummy 1.png" alt="User" class="user-avatar">
                                                <div class="comment-input-wrapper">
                                                    <textarea placeholder="Ayo berdiskusi..." class="comment-input"></textarea>
                                                    <button class="comment-submit">Balas</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Comment 2 -->
                    <div class="comment-item">
                        <img src="../../assets/img/profile-dummy 1.png" alt="Commenter" class="commenter-avatar">
                        <div class="comment-content">
                            <div class="comment-header">
                                <span class="commenter-name">Siti Rahayu</span>
                                <span class="comment-time">2 jam lalu</span>
                            </div>
                            <p class="comment-text">Saya jadi ingin mencoba resep pizza ini di rumah. Ada tips tambahan?</p>
                            <div class="comment-actions">
                                <button class="action-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    3
                                </button>
                                <button class="action-btn comment-count">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    1
                                </button>
                                <button class="action-btn reply-btn" onclick="return toggleReplyInput(this)">Balas</button>
                            </div>

                            <!-- Reply Input Container (Hidden by default) -->
                            <div class="reply-input-container" style="display: none;">
                                <div class="comment-input-container nested">
                                    <img src="../../assets/img/profile-dummy 1.png" alt="User" class="user-avatar">
                                    <div class="comment-input-wrapper">
                                        <textarea placeholder="Ayo berdiskusi..." class="comment-input"></textarea>
                                        <button class="comment-submit">Balas</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Nested Reply -->
                            <div class="comment-replies">
                                <div class="comment-item nested">
                                    <img src="../../assets/img/profile-dummy 1.png" alt="Commenter" class="commenter-avatar">
                                    <div class="comment-content">
                                        <div class="comment-header">
                                            <span class="commenter-name">Chef Juna</span>
                                            <span class="comment-time">1 jam lalu</span>
                                        </div>
                                        <p class="comment-text">Pastikan adonan diistirahatkan minimal 2 jam untuk hasil terbaik!</p>
                                        <div class="comment-actions">
                                            <button class="action-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                2
                                            </button>
                                            <button class="action-btn reply-btn" onclick="return toggleReplyInput(this)">Balas</button>
                                        </div>
                                        
                                        <!-- Reply Input Container (Hidden by default) -->
                                        <div class="reply-input-container" style="display: none;">
                                            <div class="comment-input-container nested">
                                                <img src="../../assets/img/profile-dummy 1.png" alt="User" class="user-avatar">
                                                <div class="comment-input-wrapper">
                                                    <textarea placeholder="Ayo berdiskusi..." class="comment-input"></textarea>
                                                    <button class="comment-submit">Balas</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Comment 3 -->
                    <div class="comment-item">
                        <img src="../../assets/img/profile-dummy 1.png" alt="Commenter" class="commenter-avatar">
                        <div class="comment-content">
                            <div class="comment-header">
                                <span class="commenter-name">Dimas Pratama</span>
                                <span class="comment-time">3 jam lalu</span>
                            </div>
                            <p class="comment-text">Artikel yang sangat menarik! Saya jadi tahu sejarah pizza lebih dalam.</p>
                            <div class="comment-actions">
                                <button class="action-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    5
                                </button>
                                <button class="action-btn reply-btn" onclick="return toggleReplyInput(this)">Balas</button>
                            </div>
                            
                            <!-- Reply Input Container (Hidden by default) -->
                            <div class="reply-input-container" style="display: none;">
                                <div class="comment-input-container nested">
                                    <img src="../../assets/img/profile-dummy 1.png" alt="User" class="user-avatar">
                                    <div class="comment-input-wrapper">
                                        <textarea placeholder="Ayo berdiskusi..." class="comment-input"></textarea>
                                        <button class="comment-submit">Balas</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Separator -->
            <div class="section-separator"></div>
            
            <!-- Related Articles Section -->
            ${artikelYangSesuai}
        </div>
    `;
}; 