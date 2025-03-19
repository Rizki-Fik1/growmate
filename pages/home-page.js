import { HomeNav } from "../components/home-section/home-nav.js";
import { HomeLeft } from "../components/home-section/home-left.js";
import { HomeRight } from "../components/home-section/home-right.js";
import { FeatureButton } from "../components/home-section/feature-button.js";
import { HomeUser } from "../components/home-section/home-users.js";
import { HomeFeature } from "../components/home-section/home-feature.js";
import { Footer } from "../components/landing-section/Footer.js"

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
