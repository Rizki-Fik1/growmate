const generateChartGrid = () => {
    return Array.from({length: 6}, (_, i) => i * 2)
        .map(val => `
            <div class="chart-line"><span>${10 - val}</span></div>
        `).join('');
};

const generateVerticalGridLines = (days) => {
    return days.map(() => `
        <div class="chart-vline"></div>
    `).join('');
};

const generateChartData = () => {
    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    // Data points matching the example image (values 0-10)
    const dataPoints = [2, 4, 6, 5, 6.5, 4, 3];
    
    // Create SVG path for the line
    const svgPoints = dataPoints.map((point, index) => {
        // Calculate x position with proper margins
        // Leave 10% margin on each side (total 20%)
        const x = 10 + ((index / (days.length - 1)) * 80);
        // Calculate y position (inverted since SVG y=0 is top)
        // Map from our scale (0-10) to SVG scale (0-100)
        const y = 100 - (point * 10);
        return `${x},${y}`;
    }).join(' ');
    
    return {
        days,
        svgPoints
    };
};

export const Chart = () => {
    const { days, svgPoints } = generateChartData();
    
    return `
        <div class="card chart-container">
            <div class="chart-header">
                <div class="chart-title">
                    <h2 class="card-title">Chart To-do</h2>
                    <p class="card-subtitle">Grafik hasil perkembangan diri berdasarkan to-do.</p>
                </div>
                <div class="chart-controls">
                    <div class="chart-btn">1 D</div>
                    <div class="chart-btn active">1 W</div>
                </div>
            </div>
            
            <div class="chart-wrapper">
                <div class="y-axis-line"></div>
                <div class="chart">
                    <div class="chart-grid">
                        ${generateChartGrid()}
                    </div>
                    <div class="chart-vgrid">
                        ${generateVerticalGridLines(days)}
                    </div>
                    <div class="chart-line-container">
                        <svg class="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polyline
                                class="chart-polyline"
                                points="${svgPoints}"
                                fill="none"
                                stroke="#00c853"
                                stroke-width="2"
                            />
                            <polygon
                                class="chart-area"
                                points="10,100 ${svgPoints} 90,100 10,100"
                                fill="rgba(0, 200, 83, 0.1)"
                            />
                        </svg>
                    </div>
                </div>
                <div class="chart-labels">
                    ${days.map(day => `<div class="chart-label">${day}</div>`).join('')}
                </div>
            </div>
        </div>
    `;
};