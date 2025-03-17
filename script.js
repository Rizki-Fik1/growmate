import { Navbar } from './components/chart-section/Navbar.js';
import { NavbarLanding } from './components/landing-section/Navbar-landing.js';
import { HeroSection } from './components/landing-section/Hero.js';
import { Partners } from './components/landing-section/Partners.js';
import { Timeline } from './components/landing-section/feature.js';
import { About } from './components/landing-section/About.js';
import { FAQ } from './components/landing-section/Faq.js';
import { CallToAction } from './components/landing-section/CTA.js';
import { Footer } from './components/landing-section/Footer.js';
import { MateChart } from './pages/MateChart.js';
import { MateForum } from './pages/MateForum.js';
import { ForumContent, initForumContentEvents } from './components/forum-section/ForumContent.js';

// Fungsi untuk merender halaman landing
function renderLanding() {
    const landing = document.getElementById('landing');
    if (landing) {
        landing.innerHTML = `
            <div id="current-page">
                ${NavbarLanding()}
                <div class="landing-page">
                    ${HeroSection()}
                    ${Partners()}
                    ${Timeline()}
                    ${About()}
                    ${FAQ()}
                    ${CallToAction()}
                    ${Footer()}
                </div>
            </div>
        `;
    }
}

// Fungsi untuk merender halaman chart
function renderChart() {
    const chart = document.getElementById('chart-page');
    if (chart) {
        chart.innerHTML = `
            ${Navbar('chart.html')}
            <div class="chart-page">
                ${MateChart()}
            </div>
        `;
    }
}

// Fungsi untuk merender halaman forum
function renderForum() {
    const forum = document.getElementById('forum-page');
    if (forum) {
        forum.innerHTML = MateForum();
        
        // Initialize forum content events
        setTimeout(() => {
            initForumContentEvents();
        }, 100);
    }
}

function renderQuestionForum() {
    const forum = document.getElementById('forum-question-page');
    if (forum) {
        forum.innerHTML = MateForum();
        
        // Initialize forum content events
        setTimeout(() => {
            initForumContentEvents();
        }, 100);
    }
}

// Fungsi untuk menangani navigasi
function handleNavigation(event) {
    const path = event.currentTarget.getAttribute('data-path');
    if (path) {
        window.location.href = path; // Navigasi ke halaman yang sesuai
    }
}

// Fungsi untuk menambahkan event listener
function addEventListeners() {
    // Event listener untuk .nav-item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });

    // Event listener untuk tombol di HeroSection
    const exploreButton = document.querySelector('.hero-section .explore');
    const getStartedButton = document.querySelector('.hero-section .get-started');

    if (exploreButton) {
        exploreButton.addEventListener('click', handleNavigation);
    }
    if (getStartedButton) {
        getStartedButton.addEventListener('click', handleNavigation);
    }

    // Animasi fade-in
    const animatedElements = document.querySelectorAll('.hero-section h1, .hero-section p, .hero-section .buttons');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300 * index);
    });
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.textContent.toLowerCase();
            
            switch(targetSection) {
                case 'features':
                    window.scrollTo({
                        top: document.querySelector('.timeline-section').offsetTop,
                        behavior: 'smooth'
                    });
                    break;
                case 'about us':
                    window.scrollTo({
                        top: document.querySelector('.about-section').offsetTop,
                        behavior: 'smooth'
                    });
                    break;
                case 'faq':
                    window.scrollTo({
                        top: document.querySelector('.faq-section').offsetTop,
                        behavior: 'smooth'
                    });
                    break;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    
    if (currentPath.endsWith('chart.html')) {
        renderChart();
    } else if (currentPath.endsWith('forum.html')) {
        renderForum();
    } else {
        renderLanding();
    }
    
    addEventListeners();
});

document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".home-feature-one, .home-feature-two, .home-feature-three");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });
  
    features.forEach(feature => {
      observer.observe(feature);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".feature-option-title");
    const featureSection = document.querySelector("#feature-main");
  
    if (button && featureSection) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
  
        const offset = 50;
        const targetPosition = featureSection.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: targetPosition + offset,
          behavior: "smooth",
        });
      });
    }
  });