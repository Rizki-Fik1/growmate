// This file is now deprecated. All navigation functionality has been moved to navbar.js
// This file is kept for backward compatibility with pages that still include it

// Check if navigation has already been initialized by navbar.js
if (!window.navigationInitialized) {
    function initializeNavigation() {
        // Skip initialization if navbar.js has already initialized navigation
        if (window.navigationInitialized) return;
        
        const navItems = document.querySelectorAll('.nav-item');
        const navBack = document.querySelector('.nav-back');
        const navbar = document.getElementById('navbar');
        
        console.log('Initializing navigation from navigation.js with', navItems.length, 'navigation items');
        
        // Function to navigate to a path
        function navigateTo(path) {
            if (!path) return;
            
            console.log('Navigating to:', path);
            
            // If on mobile and navbar is open, close it before navigating
            if (window.innerWidth <= 768 && navbar && navbar.classList.contains('active')) {
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

    // Initialize navigation when DOM is loaded
    document.addEventListener('DOMContentLoaded', initializeNavigation);

    // Re-initialize navigation when content changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                initializeNavigation();
            }
        });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
} 