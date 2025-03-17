import { LoginNavbar } from "../components/login-section/login-navbar.js";
import { LoginComponent } from "../components/login-section/login-component.js";
import { Preloader } from "../components/preloader/preloader.js";

export const LoginPage = () => {
  setTimeout(() => {
    const adjustLayout = () => {
      const loginPage = document.querySelector('.login-page');
      if (loginPage) {
        loginPage.style.height = `${window.innerHeight}px`;
      }
      
      const loginComp = document.querySelector('.login-comp');
      if (loginComp) {
        const navHeight = document.querySelector('.login-nav')?.offsetHeight || 60;
        loginComp.style.height = `calc(${window.innerHeight}px - ${navHeight}px)`;
      }
    };
    
    // Initial adjustment
    adjustLayout();
    
    // Listen for window resize
    window.addEventListener('resize', adjustLayout);
  }, 0);
  
  return `
  <div class="login-page">
    <div class="blurry-dot-one"></div>
    <div class="blurry-dot-two"></div>
    
    ${LoginNavbar()}
    ${LoginComponent()}
    ${Preloader()}
  </div>
  `;
};
