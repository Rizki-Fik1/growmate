import { Navbar } from './components/navbar/Navbar.js';
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

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav .flex');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu && mobileMenuBtn && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
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
            const targetId = link.getAttribute('href');
            const targetSection = link.textContent.toLowerCase();
            
            // Tutup menu mobile jika sedang terbuka
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navMenu = document.querySelector('nav .flex');
            if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // Navigasi ke element berdasarkan id
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    return;
                }
            }
            
            // Fallback ke navigasi berdasarkan class jika id tidak ditemukan
            let targetElement = null;
            
            switch(targetSection) {
                case 'features':
                    targetElement = document.querySelector('#features') || document.querySelector('.timeline-container');
                    break;
                case 'about us':
                    targetElement = document.querySelector('.about-section');
                    break;
                case 'faq':
                    targetElement = document.querySelector('.faq-section');
                    break;
                case 'privacy policy':
                    targetElement = document.querySelector('.footer');
                    break;
            }
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Event listener untuk tombol Sign Up utama
    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            // Navigasi ke bagian CTA
            const ctaSection = document.querySelector('.cta-section');
            if (ctaSection) {
                window.scrollTo({
                    top: ctaSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }
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
    
    // Tambahkan sedikit delay untuk memastikan elemen-elemen telah benar-benar dirender
    setTimeout(() => {
        addEventListeners();
        
        // Event listener untuk tombol "Back to Top"
        const backToTopBtn = document.querySelector('.back-to-top');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                // Tutup menu mobile jika terbuka
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                const navMenu = document.querySelector('nav .flex');
                if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
                    mobileMenuBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }
                
                // Scroll ke atas halaman
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Home Mobile Menu
        const homeMobileMenuBtn = document.querySelector('.home-mobile-menu-btn');
        const homeNavMenu = document.querySelector('.comp-two');
        
        if (homeMobileMenuBtn && homeNavMenu) {
            homeMobileMenuBtn.addEventListener('click', () => {
                const isExpanded = homeMobileMenuBtn.getAttribute('aria-expanded') === 'true';
                homeNavMenu.classList.toggle('active');
                homeMobileMenuBtn.classList.toggle('active');
                
                // Update aria-expanded attribute for accessibility
                homeMobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            });
            
            // Close home menu when clicking outside
            document.addEventListener('click', (e) => {
                if (homeNavMenu && homeMobileMenuBtn && !homeNavMenu.contains(e.target) && !homeMobileMenuBtn.contains(e.target)) {
                    homeNavMenu.classList.remove('active');
                    homeMobileMenuBtn.classList.remove('active');
                    homeMobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }, 100);
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