export const HomeFeature = () => {
  return `
  <div class="home-feature">
    <div class="feature-wrapper-one">
      <div class="home-feature-one" onclick="window.location.href='chart.html'">
        <img src="assets/img/Maskgroup1.png" alt="fitur-image-1"/>
      </div>
      <p class="name-feature-one">Mate Chart</p>
    </div>

    <div class="feature-wrapper-two">
      <div class="home-feature-two" onclick="window.location.href='forum.html'">
        <img src="assets/img/Maskgroup2.png" alt="fitur-image-2"/>  
      </div>
      <p class="name-feature-two">Mate Forum</p>
    </div>

    <div class="feature-wrapper-three">
      <div class="home-feature-three" onclick="window.location.href='news.html'">
        <img src="assets/img/Maskgroup3.png" alt="fitur-image-3"/>
      </div>
      <p class="name-feature-three">Mate News</p>
    </div>
  </div>
  `;
}