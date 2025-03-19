class HeaderLeaderboard {
    constructor() {
        this.container = document.getElementById('header-leaderboard');
        this.render();
    }

    render() {
        const template = `
            <div class="header-leaderboard">
                <div class="runner-up-section">
                    <h3 class="runner-up-title">Runner Up</h3>
                    <div class="runner-up-avatars">
                        <div class="avatar-container">
                            <img src="assets/images/avatar-1.png" alt="SigmAffan" class="avatar">
                            <span class="avatar-name">SigmAffan</span>
                        </div>
                        <div class="avatar-container">
                            <img src="assets/images/avatar-2.png" alt="ElPape77" class="avatar">
                            <span class="avatar-name">ElPape77</span>
                        </div>
                    </div>
                </div>

                <div class="top-user-section">
                    <h2 class="top-title">Top 1 di GrowMate!</h2>
                    <div class="top-user-avatar">
                        <img src="assets/images/avatar-top.png" alt="Iqballqbil" class="avatar-large">
                        <h3 class="top-user-name">Iqballqbil</h3>
                        <span class="user-level">(30) Siswa</span>
                    </div>
                    <div class="decorative-elements">
                        <span class="dot dot-1"></span>
                        <span class="dot dot-2"></span>
                        <span class="dot dot-3"></span>
                        <span class="dot dot-4"></span>
                    </div>
                </div>

                <div class="user-card-section">
                    <div class="user-card">
                        <div class="user-header">
                            <h3 class="user-title">Iqballqbil <span class="rank">#1</span></h3>
                            <p class="user-stats">Telah mengalahkan 187 user.</p>
                        </div>
                        <div class="notification-badge">
                            Kamu tidak masuk peringkat
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.container.innerHTML = template;
    }
}

// Initialize the component
new HeaderLeaderboard(); 