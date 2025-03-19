class UserInfo {
    constructor() {
        this.container = document.getElementById('user-info');
        this.render();
    }

    render() {
        const template = `
            <div class="user-info-card">
                <div class="stats-container">
                    <div class="stat-item">
                        <i class="fas fa-fire icon"></i>
                        <div class="stat-content">
                            <span class="stat-value">2,175</span>
                            <span class="stat-label">To-do</span>
                        </div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-lightbulb icon"></i>
                        <div class="stat-content">
                            <span class="stat-value">34</span>
                            <span class="stat-label">Artikel</span>
                        </div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-award icon"></i>
                        <div class="stat-content">
                            <span class="stat-value">12</span>
                            <span class="stat-label">Badge</span>
                        </div>
                    </div>
                </div>
                <div class="action-buttons">
                    <button class="btn btn-primary">
                        <i class="fas fa-user-plus"></i>
                        Berteman
                    </button>
                    <button class="btn btn-secondary">
                        <i class="fas fa-user"></i>
                        Cek Profil
                    </button>
                </div>
            </div>
        `;

        this.container.innerHTML = template;
    }
}

// Initialize the component
new UserInfo(); 