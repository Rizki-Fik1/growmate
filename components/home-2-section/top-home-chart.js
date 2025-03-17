export const TopHomeChart = () => {
  setTimeout(() => {
    const canvas = document.getElementById('myChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');

    const lastWeekData = [10, 15, 12, 18, 20, 22, 25];
    const thisWeekData = [5, 10, 8, 12, 18, 20, 23];

    // Hitung kenaikan total dan persentasenya
    const totalLastWeek = lastWeekData.reduce((a, b) => a + b, 0);
    const totalThisWeek = thisWeekData.reduce((a, b) => a + b, 0);
    const percentageIncrease = ((totalThisWeek - totalLastWeek) / totalLastWeek) * 100;

    // Update elemen HTML dengan hasil perhitungan
    setTimeout(() => {
      const progressElement = document.getElementById("progress-percentage");
      if (progressElement) {
        progressElement.innerText = `${Math.abs(percentageIncrease).toFixed(1)}%`;
      }
    }, 100);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Senin\n21 Jan', 'Selasa\n22 Jan', 'Rabu\n23 Jan', 'Kamis\n24 Jan', 'Jum\'at\n25 Jan', 'Sabtu\n26 Jan', 'Minggu\n27 Jan'],
        datasets: [
          {
            label: 'Minggu Lalu',
            data: lastWeekData,
            backgroundColor: 'rgba(87, 207, 254, 0.2)',
            borderColor: 'rgba(87, 207, 254, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(87, 207, 254, 1)',
            pointBorderColor: '#fff',
            pointRadius: 4,
            tension: 0.4,
            fill: true
          },
          {
            label: 'Minggu Ini',
            data: thisWeekData,
            backgroundColor: 'rgba(0, 255, 149, 0.2)',
            borderColor: 'rgba(0, 255, 149, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(0, 255, 149, 1)',
            pointBorderColor: '#fff',
            pointRadius: 4,
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(10, 20, 34, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            padding: 10,
            cornerRadius: 8
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: '#fff',
              font: {
                size: 12
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#fff',
              font: {
                size: 12
              }
            }
          }
        }
      }
    });
  }, 100);

  return `
  <div class="top-home-chart-content">
    <div class="chart-header">
      <h2 class="chart-title">Progres Harian Kamu</h2>
      <div class="chart-info">
        <span class="info-label">Progress Info:</span>
        <div class="percentage-container">
          <svg class="trend-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
            <path d="M17 6h6v6"></path>
          </svg>
          <span id="progress-percentage" class="percentage-value">5.25%</span>
        </div>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="myChart"></canvas>
    </div>
    <div class="chart-legend">
      <div class="legend-item">
        <span class="legend-color" style="background-color: rgba(87, 207, 254, 1)"></span>
        <span class="legend-label">Minggu Ini</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background-color: rgba(0, 255, 149, 1)"></span>
        <span class="legend-label">Minggu Lalu</span>
      </div>
    </div>
  </div>
  `;
};
