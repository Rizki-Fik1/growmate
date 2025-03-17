export const HasilTodo = () => {
    return `
        <div>
            <div class="time-range">
                <div class="time-select-box-2">
                    <span>Pilih rentang waktu</span>
                </div>
                <div class="dropdown-icon-box-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 30 15" fill="none">
                         <g clip-path="url(#clip0_143_196)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1114 12.6962L7.0402 5.625L8.8077 3.8575L14.9952 10.045L21.1827 3.8575L22.9502 5.625L15.8789 12.6962C15.6445 12.9306 15.3267 13.0622 14.9952 13.0622C14.6637 13.0622 14.3459 12.9306 14.1114 12.6962Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_143_196">
                                <rect width="15" height="30" fill="white" transform="matrix(0 1 -1 0 30 0)"/>
                                 </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Hasil To-do</h2>
                    <p class="card-subtitle">Pantau capaian tugas.</p>
                </div>
                
                <div class="progress-container">
                    <div class="progress-meter">
                        <div class="meter">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                </div>
                
                <div class="stats-container">
                    <div class="stat-item completed">
                        <div class="stat-number">13</div>
                        <div class="stat-label">Selesai</div>
                    </div>
                    <div class="stat-separator"></div>
                    <div class="stat-item late">
                        <div class="stat-number">4</div>
                        <div class="stat-label">Terlewat</div>
                    </div>
                </div>
            </div>
        </div>
    `;
};