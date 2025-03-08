export const DaftarTodoList = () => {
    return `
        <div class="daftar-todo-list">
            <div class="daftar-todo-header">
                <h3>Daftar To-do</h3>
                <p>Kelola kegiatanmu tiap hari.</p>
                <div class="daftar-todo-actions">
                    <div class="search-container">
                        <input type="text" placeholder="Cari To-do" class="search-input">
                        <button class="search-button">🔍</button>
                    </div>
                    <button class="add-todo-button">+</button>
                    <button class="filter-button">
                        <span class="filter-icon">⚙️</span>
                        <span>Filter</span>
                    </button>
                </div>
                <div class="todo-tabs">
                    <button class="todo-tab active">Hari ini</button>
                    <button class="todo-tab">Besok</button>
                </div>
            </div>
            
            <div class="todo-list-container">
                <!-- Morning -->
                <div class="time-section">
                    <div class="time-header">
                        <div class="time-indicator">
                            <div class="time-checkbox"></div>
                            <div class="sun-icon">🌄</div>
                            <div class="time-label">Pagi Hari</div>
                            <div class="time-count">03</div>
                        </div>
                        <div class="time-range">04:00 - 12:00</div>
                        <button class="expand-button expanded">▲</button>
                    </div>
                    <div class="time-items">
                        <div class="todo-item">
                            <div class="todo-item-checkbox"></div>
                            <div class="todo-item-content">
                                <div class="todo-item-title">Meeting dengan tim design</div>
                                <div class="todo-item-time">09:00 - 10:30</div>
                            </div>
                            <div class="todo-item-priority high"></div>
                        </div>
                        <div class="todo-item">
                            <div class="todo-item-checkbox completed"></div>
                            <div class="todo-item-content">
                                <div class="todo-item-title completed">Email laporan mingguan</div>
                                <div class="todo-item-time">08:00 - 08:30</div>
                            </div>
                            <div class="todo-item-priority medium"></div>
                        </div>
                        <div class="todo-item">
                            <div class="todo-item-checkbox"></div>
                            <div class="todo-item-content">
                                <div class="todo-item-title">Standup meeting</div>
                                <div class="todo-item-time">11:00 - 11:30</div>
                            </div>
                            <div class="todo-item-priority low"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Afternoon -->
                <div class="time-section">
                    <div class="time-header">
                        <div class="time-indicator">
                            <div class="time-checkbox"></div>
                            <div class="sun-icon">☀️</div>
                            <div class="time-label">Siang Hari</div>
                            <div class="time-count">05</div>
                        </div>
                        <div class="time-range">13:00 - 15:00</div>
                        <button class="expand-button">▼</button>
                    </div>
                </div>
                
                <!-- Evening -->
                <div class="time-section">
                    <div class="time-header">
                        <div class="time-indicator">
                            <div class="time-checkbox"></div>
                            <div class="sun-icon">🌇</div>
                            <div class="time-label">Sore Hari</div>
                            <div class="time-count">03</div>
                        </div>
                        <div class="time-range">15:00 - 17:00</div>
                        <button class="expand-button">▼</button>
                    </div>
                </div>
                
                <!-- Night -->
                <div class="time-section">
                    <div class="time-header">
                        <div class="time-indicator">
                            <div class="time-checkbox"></div>
                            <div class="sun-icon">🌙</div>
                            <div class="time-label">Malam Hari</div>
                            <div class="time-count">02</div>
                        </div>
                        <div class="time-range">18:00 - 21:00</div>
                        <button class="expand-button">▼</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};