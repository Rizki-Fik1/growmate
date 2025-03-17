import { Navbar } from "../components/chart-section/Navbar.js"
import { TopHomeAI } from "../components/home-2-section/top-home-ai.js"
import { TopHomeChart } from "../components/home-2-section/top-home-chart.js"
import { BottomHomeAI } from "../components/home-2-section/bottom-home-ai.js"
import { BottomHomeBoard } from "../components/home-2-section/bottom-home-board.js"
import { BottomHomeTodo } from "../components/home-2-section/bottom-home-todo.js"

export const HomePageTwo = () => {
  const currentPath = window.location.pathname;
  
  setTimeout(() => {
    const adjustLayout = () => {
      const homePage = document.querySelector('.home-two-page');
      if (homePage) {
        homePage.style.minHeight = `${window.innerHeight}px`;
      }
    };
    
    adjustLayout();
    
    window.addEventListener('resize', adjustLayout);
  }, 0);
  
  return `
  <div class="home-two-page">
    <div class="blurry-dot-home-two-one"></div>
    <div class="blurry-dot-home-two-two"></div>
    
    ${Navbar(currentPath)}
    
    <div class="home-two-top-section">
      <div class="top-home-ai-section">
        ${TopHomeAI()}
      </div>
      <div class="top-home-chart-section">
        ${TopHomeChart()}
      </div>
    </div>

    <div class="home-two-bottom-section">
      <div class="bottom-home-ai-container">
        ${BottomHomeAI()}
      </div>
      <div class="bottom-home-todo-container">
        ${BottomHomeTodo()}
      </div>
      <div class="bottom-home-board-container">
        ${BottomHomeBoard()}
      </div>
    </div>
  </div>
  `;
};