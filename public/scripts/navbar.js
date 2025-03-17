document.addEventListener('DOMContentLoaded', function () {
    // Use a small timeout to ensure the navbar elements are in the DOM
    setTimeout(function() {
        initNavbar();
        initNavigation();
    }, 100);
    
    function initNavbar() {
        // Toggle navbar functionality for mobile/tablet
        const navbarToggle = document.getElementById('navbar-toggle');
        const navbar = document.getElementById('navbar');
        const overlay = document.getElementById('navbar-overlay');
        
        if (navbarToggle && navbar && overlay) {
            console.log('Navbar elements found, initializing toggle functionality');
            
            // Function to toggle navbar
            function toggleNavbar() {
                navbar.classList.toggle('active');
                navbarToggle.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.classList.toggle('navbar-hidden');
                
                // Update aria-expanded attribute for accessibility
                const isExpanded = navbar.classList.contains('active');
                navbarToggle.setAttribute('aria-expanded', isExpanded);
                
                console.log('Navbar toggled, active state:', navbar.classList.contains('active'));
            }
            
            // Toggle navbar when button is clicked
            navbarToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleNavbar();
                console.log('Toggle button clicked');
            });
            
            // Close navbar when overlay is clicked
            overlay.addEventListener('click', toggleNavbar);
            
            // Set initial state for mobile
            if (window.innerWidth <= 768) {
                document.body.classList.add('navbar-hidden');
                console.log('Initial state set for mobile');
            }
            
            // Handle resize events
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    // Reset navbar state on larger screens
                    navbar.classList.remove('active');
                    navbarToggle.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.classList.remove('navbar-hidden');
                }
            });
        } else {
            console.error('Navbar elements not found:', {
                toggle: navbarToggle,
                navbar: navbar,
                overlay: overlay
            });
        }
    }
    
    function initNavigation() {
        // Set a flag to indicate that navigation has been initialized
        window.navigationInitialized = true;
        
        const navItems = document.querySelectorAll('.nav-item');
        const navBack = document.querySelector('.nav-back');
        const navbar = document.getElementById('navbar');
        const navbarToggle = document.getElementById('navbar-toggle');
        const overlay = document.getElementById('navbar-overlay');
        
        console.log('Initializing navigation with', navItems.length, 'navigation items');
        
        // Function to navigate to a path
        function navigateTo(path) {
            if (!path) return;
            
            console.log('Navigating to:', path);
            
            // If on mobile and navbar is open, close it before navigating
            if (window.innerWidth <= 768 && navbar && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                if (navbarToggle) navbarToggle.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.classList.remove('navbar-hidden');
                
                // Add a small delay to allow the navbar to close before navigating
                setTimeout(() => {
                    window.location.href = path;
                }, 300);
            } else {
                // Navigate immediately on desktop
                window.location.href = path;
            }
        }
        
        // Handle navigation item clicks
        navItems.forEach(item => {
            // Only add event listener if it doesn't already have one
            if (!item.hasAttribute('data-nav-initialized')) {
                item.setAttribute('data-nav-initialized', 'true');
                
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Remove active class from all items
                    navItems.forEach(navItem => navItem.classList.remove('active'));
                    
                    // Add active class to clicked item
                    this.classList.add('active');
                    
                    // Get path from data attribute
                    const path = this.getAttribute('data-path');
                    console.log('Nav item clicked, path:', path);
                    
                    // Navigate to the path
                    navigateTo(path);
                });
            }
        });
        
        // Handle back button
        if (navBack && !navBack.hasAttribute('data-nav-initialized')) {
            navBack.setAttribute('data-nav-initialized', 'true');
            
            navBack.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const path = this.getAttribute('data-path');
                console.log('Back button clicked, path:', path);
                
                // Navigate to the path
                navigateTo(path);
            });
        }
    }
}); 