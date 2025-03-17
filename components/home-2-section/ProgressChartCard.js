export const ProgressChartCard = () => {
    return `
        <div class="progress-chart-card">
            <div class="progress-header">
                <h3 class="progress-title">Progres Harian Kamu</h3>
                <div class="progress-info">
                    <span class="progress-percentage">↗ 5, 25 %</span>
                </div>
            </div>
            <div class="chart-container">
                <div class="chart-labels">
                    <div class="y-axis-labels">
                        <span>10</span>
                        <span>8</span>
                        <span>6</span>
                        <span>4</span>
                        <span>2</span>
                        <span>0</span>
                    </div>
                </div>
                <div class="chart-area">
                    <canvas id="progressChart"></canvas>
                </div>
            </div>
            <div class="chart-legend">
                <div class="day-labels">
                    <span>Senin<br>21 Jan</span>
                    <span>Selasa<br>22 Jan</span>
                    <span>Rabu<br>23 Jan</span>
                    <span>Kamis<br>24 Jan</span>
                    <span>Jum'at<br>25 Jan</span>
                    <span>Sabtu<br>26 Jan</span>
                    <span>Minggu<br>27 Jan</span>
                </div>
                <div class="legend-items">
                    <div class="legend-item">
                        <span class="legend-color current"></span>
                        <span class="legend-text">Minggu Ini</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color previous"></span>
                        <span class="legend-text">Minggu Lalu</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}; 