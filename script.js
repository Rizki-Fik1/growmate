//Komponen HomePage

//Komponen ChartPage
import { Navbar } from './components/chart-section/Navbar.js';

// Komponen Landing
import { NavbarLanding } from './components/landing-section/Navbar-landing.js';
import { HeroSection } from './components/landing-section/Hero.js';
import { Partners } from './components/landing-section/Partners.js';
import { Timeline } from './components/landing-section/feature.js';
import { About } from './components/landing-section/About.js';
import { FAQ } from './components/landing-section/Faq.js';
import { CallToAction } from './components/landing-section/CTA.js';
import { Footer } from './components/landing-section/Footer.js';

const home = document.getElementById('home-page');
const chart = document.getElementById('chart-page');
const landing = document.getElementById('landing');

// Render komponen
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

chart.innerHTML = `
        ${Navbar()}
        <div class="chart-page">
        </div>
`;

// Tambahkan event listener atau logika JavaScript lainnya di sini
function showPage(pageId) {
    // Daftar semua halaman yang mungkin
    const pages = ['landing', 'chart-page', 'home-page'];
    
    // Loop through all possible pages
    pages.forEach(page => {
        const pageElement = document.getElementById(page);
        if (pageElement) {
            pageElement.style.display = page === pageId ? 'block' : 'none';
        } else {
            console.warn(`Halaman dengan ID ${page} tidak ditemukan`);
        }
    });
}

// Tambahkan event listener atau logika JavaScript lainnya di sini
document.addEventListener('DOMContentLoaded', () => {
    // Tampilkan halaman landing sebagai default
    showPage('landing');

    // Animasi fade-in (kode sebelumnya)
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

    // Hover effect untuk tombol (kode sebelumnya)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Tambahkan event listener untuk navigasi
    const getStartedButton = document.querySelector('.get-started');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', () => {
            showPage('chart-page');
        });
    }

    const exploreButton = document.querySelector('.explore');
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            // Misalnya, bisa navigasi ke halaman fitur atau scroll ke section fitur
            window.scrollTo({
                top: document.querySelector('.timeline-section').offsetTop,
                behavior: 'smooth'
            });
        });
    }

    // Event listener untuk navigasi di navbar
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
                // Tambahkan case lain sesuai kebutuhan
            }
        });
    });
});