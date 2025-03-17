export const BottomHomeBoard = () => {
  return`
  <div class="bottom-home-board">
    <div class="bottom-home-board-header">
      <h3 class="bottom-home-board-title">Leaderboard</h3>
    </div>
    
    <div class="bottom-home-board-content">
      <div class="board-filter">
        <span class="board-filter-label active">Minggu Ini</span>
        <span class="board-filter-label">Bulan Ini</span>
        <span class="board-filter-label">Tahun Ini</span>
      </div>
      
      <div class="board-list">
        <div class="board-item">
          <div class="board-rank">1</div>
          <div class="board-user">
            <div class="board-user-avatar">
              <img src="/assets/img/avatar-1.png" alt="User Avatar">
            </div>
            <div class="board-user-info">
              <h4 class="board-user-name">Budi Santoso</h4>
              <p class="board-user-title">UI/UX Designer</p>
            </div>
          </div>
          <div class="board-score">98</div>
        </div>
        
        <div class="board-item">
          <div class="board-rank">2</div>
          <div class="board-user">
            <div class="board-user-avatar">
              <img src="/assets/img/avatar-2.png" alt="User Avatar">
            </div>
            <div class="board-user-info">
              <h4 class="board-user-name">Siti Aminah</h4>
              <p class="board-user-title">Frontend Developer</p>
            </div>
          </div>
          <div class="board-score">95</div>
        </div>
        
        <div class="board-item">
          <div class="board-rank">3</div>
          <div class="board-user">
            <div class="board-user-avatar">
              <img src="/assets/img/avatar-3.png" alt="User Avatar">
            </div>
            <div class="board-user-info">
              <h4 class="board-user-name">Ahmad Rizki</h4>
              <p class="board-user-title">Backend Developer</p>
            </div>
          </div>
          <div class="board-score">92</div>
        </div>
        
        <div class="board-item">
          <div class="board-rank">4</div>
          <div class="board-user">
            <div class="board-user-avatar">
              <img src="/assets/img/avatar-4.png" alt="User Avatar">
            </div>
            <div class="board-user-info">
              <h4 class="board-user-name">Dewi Putri</h4>
              <p class="board-user-title">Product Manager</p>
            </div>
          </div>
          <div class="board-score">87</div>
        </div>
        
        <div class="board-item">
          <div class="board-rank">5</div>
          <div class="board-user">
            <div class="board-user-avatar">
              <img src="/assets/img/avatar-5.png" alt="User Avatar">
            </div>
            <div class="board-user-info">
              <h4 class="board-user-name">Rudi Hartono</h4>
              <p class="board-user-title">Data Analyst</p>
            </div>
          </div>
          <div class="board-score">85</div>
        </div>
      </div>
    </div>
  </div>
  `
}