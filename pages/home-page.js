// Component functions for the home page
import { Footer } from "../components/landing-section/Footer.js"

const HomeNav = () => {
  return`
  <div class="home-nav">
    <div class="left-home-nav">
      <div class="comp-one">
        <img src="assets/img/G.png" alt="G" />
        <p class=title-one>row</p>
        <p class="title-two">Mate</p>
      </div>

      <div class="comp-two">
        <p class="text-one">Fitur</p>
        <p class="text-two">Support</p> 
        <p class="text-three">Sosial</p>
        <p class="text-four">Guide</p>
      </div>
    </div>

    <div class="right-home-nav">
      <p class="comp-three">Logout</p>
    </div>
  </div>
  `
}

const HomeLeft = () => {
  return`
  <div class="home-left">
    <div class="left-home-comp">
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="chart-home-icon-one">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="chart-home-icon-two">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hat-home-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="news-home-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
      
      <p class="text-title-one">
        Jalani Setidaknya <span>1% Progres</span>
      </p>
      <p class="text-title-two">Setiap Harimu.</p>
      <p class="text-title-three">
        Seseorang tidak akan berubah nasibnya, 
        kecuali diri mereka sendiri yang mau berubah. 
        Ayo berubah bersama Mate :)
      </p>
    </div>
  </div>
  `
}

const HomeRight = () => {
  return`
  <div class="home-right">
    <div class="right-home-comp">
      <div class="layer-one">
        <p class="right-text-one">Gimana Kabarmu</p>
        <p class="right-text-two">Hari ini User?</p>
        <div class="home-layer-wrapper">
          <div class="layer-deep">
            <p class="right-text-three">Ceritakan</p>
            <p class="right-text-four">Kepada Mate:</p>
            <button class="tell-story-btn">Yuk, cerita!</button>
          </div>

          <img class="mate-logo-home" src="assets/img/logo-mate.png" alt="img">
        </div>
      </div>
      
      <div class="layer-two">
      </div>
    </div>
  </div>
  `
}

const HomeFeature = () => {
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

const FeatureButton = () => {
  return `
  <button class="feature-option-title">
    Pilih Fitur
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  </button>   
  `;
}

const HomeUser = () => {
  return `
  <div class="home-user-info">
    <img class="dummy-home" src="../../assets/img/profile-dummy 1.png" alt="icon-dummy-user"/>
    <div class="home-user-info-text">
      <div class="home-user-info-text-username">Username</div>
      <div class="home-user-info-text-status">Siswa</div>
    </div>
  </div>
  `
}

// Main HomePage component
export const HomePage = () => {
  return `
  <div class="wrapper-homepage">
    <div class="home-page">
      ${HomeNav()}
      <div class="home-main">
        ${HomeLeft()}
        ${HomeRight()}
      </div>
      <div class="home-button">
        <div class="blurry-dot-at-button"></div>
        ${FeatureButton()}
      </div>
      <div class="home-user">
        ${HomeUser()}
      </div>
    </div>
    
    <div id="feature-main" class="feature-main">
      <div class="blurry-dot-feature"></div>
      <p class="feature-title-one">Fitur Andalan GrowMate</p>
      <p class="feature-title-two">Silakan pilih fitur mana yang ingin Kamu gunakan</p>
      <div class="feature-container">
        ${HomeFeature()}
      </div>
    </div>

    <div class="feature-footer">
      ${Footer()}
    </div>
  </div>
  `;
};
