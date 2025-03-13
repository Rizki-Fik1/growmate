export const TopHomeChart = () => {
  setTimeout(() => {
    const canvas = document.getElementById('myChart');
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
        progressElement.innerText = `${percentageIncrease.toFixed(1)}%`;
      }
    }, 100);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        datasets: [
          {
            label: 'Minggu Lalu',
            data: lastWeekData,
            backgroundColor: 'rgba(87, 207, 254, 0.2)', // Warna lebih soft
            borderColor: '#57CFFE',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
          },
          {
            label: 'Minggu Ini',
            data: thisWeekData,
            backgroundColor: 'rgba(0, 255, 161, 0.2)', // Warna lebih soft
            borderColor: '#00FFA1',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        animation: { duration: 500 },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: {
                size: 12,
                weight: 'normal',
              },
              color: "rgba(255, 255, 255, 0.7)", // Warna lebih soft
              padding: 15,
            },
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#000",
            bodyColor: "#000",
            borderColor: "#ddd",
            borderWidth: 1,
          },
        },
        scales: {
          x: { 
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: {
              color: "#FFF",
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
          y: { 
            max: 25, 
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: {
              color: "#FFF",
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
        },
        elements: {
          line: {
            borderWidth: 2, // Garis lebih tebal
          },
          point: {
            radius: 5,
            backgroundColor: "#fff",
            borderWidth: 2,
          },
        },
      },
    });
  }, 0);

  return `
    <div class="top-home-chart-section">
      <div class="top-home-info">
        <p class="top-home-title-one">Progres Harian Kamu</p>
        <div class="top-home-progres">
          <p class="top-home-title-two">Progres Info:</p>
          <div class="progress-container">
            <svg width="25" height="25" fill="#00FFA1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
              <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/>
            </svg>
            <span id="progress-percentage">0%</span> 
          </div>
        </div>
      </div>
      <canvas id="myChart"></canvas>
    </div>
  `;
};
