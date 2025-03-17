import { AIComponent } from "../components/ai-section/ai-comp.js"
import { AINav } from "../components/ai-section/ai-nav.js"
import { Navbar } from "../components/chart-section/Navbar.js";

export const AIPage = () => {
  const currentPath = window.location.pathname;
  return`
  <div class="ai-wrapper">
    <div class="ai-pages">
      ${AINav()}
      ${AIComponent()}
      <div class="blurry-dot-ai-one"></div>
      <div class="blurry-dot-ai-two"></div>
      <div class="blurry-dot-ai-three"></div>
    </div>
  </div>
  `
}