export const CardProfile = () => {
    return `
        <div class="card-profile">
            <div class="profile-header">
                <div class="profile-info">
                    <div class="profile-avatar">
                        <img src="../../assets/img/profile-dummy 1.png" alt="Profile Avatar">
                    </div>
                    <div class="profile-details">
                        <div class="profile-name-container">
                            <h2 class="profile-name">Iqbaliqbil</h2>
                                <img src="../../assets/img/badge1.png" alt="Si Ambisius" class="badge-image">
                            <div class="profile-level">Level 6</div>
                        </div>
                        <p class="profile-role">Siswa</p>
                        <span class="progress-text">230 / 400 EXP</span>
                        <div class="profile-progress">
                            <div class="progress-bar">
                                <div class="progress-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="profile-stats">
                <div class="stat-card">
                    <div class="stat-icon article-icon"></div>
                    <div class="stat-info">
                        <h3 class="stat-value">12</h3>
                        <p class="stat-label">Artikel</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon post-icon"></div>
                    <div class="stat-info">
                        <h3 class="stat-value">12</h3>
                        <p class="stat-label">Post</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon friend-icon"></div>
                    <div class="stat-info">
                        <h3 class="stat-value">12</h3>
                        <p class="stat-label">Teman</p>
                    </div>
                </div>
            </div>
            
            <div class="profile-divider"></div>
            
            <div class="profile-contact">
                <div class="contact-item">
                    <div class="contact-icon email-icon"></div>
                    <div class="contact-info">
                        <h4 class="contact-title">Email</h4>
                        <p class="contact-value">ikbalsikma@gmail.com</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon instagram-icon"></div>
                    <div class="contact-info">
                        <h4 class="contact-title">Instagram</h4>
                        <p class="contact-value">@bali.ik</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon location-icon"></div>
                    <div class="contact-info">
                        <h4 class="contact-title">Location</h4>
                        <p class="contact-value">Semarang, Jawa Tengah</p>
                    </div>
                </div>
            </div>
            
            <div class="profile-about">
                <h3 class="about-title">Tentang Saya</h3>
                <p class="about-text">
                    Saya adalah seorang individu yang bersemangat dalam belajar dan berkembang di dunia teknologi. Dengan latar belakang dalam pengembangan web dan aplikasi, saya senang mengeksplorasi teknologi baru serta menciptakan solusi inovatif. Saat ini, saya fokus dalam membangun proyek berbasis React, Flutter, dan Laravel, serta terus memperdalam pemahaman dalam Firebase dan Jetpack Compose.
                </p>
            </div>
        </div>
    `;
};