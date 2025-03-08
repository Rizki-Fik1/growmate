// TodoComponents.js
export const TodoComponents = () => {
    return `
      <div class="todo-container">
        <div class="todo-card pin-todo-card">
          <div class="card-header">
            <h3>Pin To-do</h3>
            <div class="time-range-selector">
              <button class="time-selector-btn">
                Pilih rentang waktu
                <span class="dropdown-icon">▼</span>
              </button>
            </div>
          </div>
          <p>Ini prioritas tugasmu hari ini.</p>
          <div class="pin-todo-items">
            <div class="pin-todo-item">
              <div class="pin-todo-color-indicator react"></div>
              <div class="pin-todo-content">
                <h4>Belajar React</h4>
                <p>Melanjutkan belajar...</p>
              </div>
              <button class="todo-more-btn">⋮</button>
            </div>
            <div class="pin-todo-item">
              <div class="pin-todo-color-indicator brainstorming"></div>
              <div class="pin-todo-content">
                <h4>Brainstorming</h4>
                <p>Diskusi bersama team...</p>
              </div>
              <button class="todo-more-btn">⋮</button>
            </div>
          </div>
        </div>
  
        <div class="todo-card hasil-todo-card">
          <div class="card-header">
            <h3>Hasil To-do</h3>
            <div class="time-range-selector">
              <button class="time-selector-btn dark">
                Pilih rentang waktu
                <span class="dropdown-icon">▼</span>
              </button>
            </div>
          </div>
          <p>Pantau capaian tugas.</p>
          <div class="speedometer-container">
            <div class="speedometer">
              <div class="speedometer-scale"></div>
              <div class="speedometer-needle"></div>
              <div class="speedometer-center"></div>
            </div>
            <div class="speedometer-results">
              <div class="result-column">
                <span class="result-label selesai">Selesai</span>
                <span class="result-number">13</span>
              </div>
              <div class="result-divider"></div>
              <div class="result-column">
                <span class="result-label terlewat">Terlewat</span>
                <span class="result-number">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  };