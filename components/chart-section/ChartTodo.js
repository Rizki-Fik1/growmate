export const ChartTodoList = () => {
    return `
        <div class="chart-todo-list">
            <div class="chart-header">
                <h3>Chart To-do</h3>
                <p>Grafik hasil perkembangan diri berdasarkan to-do.</p>
                <div class="chart-period-selection">
                    <button class="period-button">1 D</button>
                    <button class="period-button active">1 W</button>
                </div>
            </div>
            <div class="chart-container">
                <div class="chart-y-axis">
                    <div class="y-label">10</div>
                    <div class="y-label">8</div>
                    <div class="y-label">6</div>
                    <div class="y-label">4</div>
                    <div class="y-label">2</div>
                    <div class="y-label">0</div>
                </div>
                <div class="chart-content">
                    <!-- Chart bars/lines would be dynamically generated -->
                </div>
                <div class="chart-x-axis">
                    <div class="x-label">Sen</div>
                    <div class="x-label">Sel</div>
                    <div class="x-label">Rab</div>
                    <div class="x-label">Kam</div>
                    <div class="x-label">Jum</div>
                    <div class="x-label">Sab</div>
                    <div class="x-label">Min</div>
                </div>
            </div>
        </div>
    `;
};