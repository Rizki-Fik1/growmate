class Top10UserGrowmate {
    constructor() {
        this.container = document.getElementById('top10-users');
        this.render();
        this.initializeEventListeners();
    }

    render() {
        const template = `
            <div class="top10-section">
                <div class="section-header">
                    <div class="title-container">
                        <h2 class="section-title">Top 10 User GrowMate</h2>
                        <p class="section-subtitle">Berdasarkan peringkat Mingguan</p>
                    </div>
                    <div class="search-container">
                        <div class="search-box">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Cari Username" class="search-input">
                        </div>
                        <div class="time-filter">
                            <button class="btn btn-secondary active">1W</button>
                            <button class="btn btn-secondary">1M</button>
                        </div>
                    </div>
                </div>

                <div class="leaderboard-table">
                    <div class="table-header">
                        <div class="col-rank">Rank</div>
                        <div class="col-user">Username</div>
                        <div class="col-status">Status</div>
                        <div class="col-badge">Badge</div>
                        <div class="col-todo">To-do</div>
                        <div class="col-artikel">Artikel</div>
                        <div class="col-action">Action</div>
                    </div>
                    <div class="table-body">
                        ${this.generateTableRows()}
                    </div>
                </div>
            </div>
        `;

        this.container.innerHTML = template;
    }

    generateTableRows() {
        const users = [
            { rank: 1, username: 'Iqballqbil', status: 'Siswa', badge: 'Karismatik', todo: '2,175', artikel: '34' },
            { rank: 2, username: 'SigmAffan', status: 'Mahasiswa', badge: 'Karismatik', todo: '2,079', artikel: '29' },
            { rank: 3, username: 'ElPape77', status: 'Guru', badge: 'Karismatik', todo: '1,923', artikel: '25' },
            { rank: 4, username: 'Somaliee', status: 'Mahasiswa', badge: 'Karismatik', todo: '1,816', artikel: '21' }
        ];

        return users.map(user => `
            <div class="table-row">
                <div class="col-rank">${user.rank}</div>
                <div class="col-user">${user.username}</div>
                <div class="col-status">${user.status}</div>
                <div class="col-badge"><span class="badge-karismatik">${user.badge}</span></div>
                <div class="col-todo">${user.todo}</div>
                <div class="col-artikel">${user.artikel}</div>
                <div class="col-action">
                    <button class="btn btn-secondary btn-sm">
                        Lihat
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    initializeEventListeners() {
        const timeFilterButtons = this.container.querySelectorAll('.time-filter .btn');
        timeFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                timeFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
}

// Initialize the component
new Top10UserGrowmate(); 