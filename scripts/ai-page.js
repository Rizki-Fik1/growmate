document.addEventListener('DOMContentLoaded', function () {
    // Navbar toggle functionality
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('navbar-overlay');
    
    if (navbarToggle && navbar && overlay) {
        navbarToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            overlay.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
        
        overlay.addEventListener('click', function() {
            navbar.classList.remove('active');
            overlay.classList.remove('active');
            navbarToggle.classList.remove('active');
        });
    }
    
    // Navigation items functionality
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const path = this.getAttribute('data-path');
            if (path) {
                window.location.href = path;
            }
        });
    });
    
    // Nav back functionality
    const navBack = document.querySelector('.nav-back');
    if (navBack) {
        navBack.addEventListener('click', function() {
            const path = this.getAttribute('data-path');
            if (path) {
                window.location.href = path;
            }
        });
    }
    
    // AI search form functionality
    const form = document.querySelector(".ai-search");
    const inputField = document.querySelector(".ai-search-input");

    if (form && inputField) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const userMessage = inputField.value.trim();

            if (userMessage) {
                // Save user message in localStorage
                localStorage.setItem("userMessage", userMessage);

                // Redirect to chat page
                window.location.hash = "aichat";
            }
        });
    }
}); 