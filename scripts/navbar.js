document.addEventListener('DOMContentLoaded', function () {
    // Detect touch device
    const isTouchDevice = ('ontouchstart' in window) || 
                          (navigator.maxTouchPoints > 0) || 
                          (navigator.msMaxTouchPoints > 0);
    
    // Add class to body for touch-specific styling
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    }
    
    // Load Hammer.js dynamically if it's not already loaded
    if (typeof Hammer === 'undefined') {
        const hammerScript = document.createElement('script');
        hammerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js';
        hammerScript.onload = function() {
            console.log('Hammer.js loaded successfully');
            initNavbarWithGestures();
            showSwipeTutorial();
        };
        hammerScript.onerror = function() {
            console.error('Failed to load Hammer.js, falling back to default navbar');
            initNavbar();
        };
        document.head.appendChild(hammerScript);
    } else {
        initNavbarWithGestures();
        showSwipeTutorial();
    }
    
    // Use a small timeout to ensure the navbar elements are in the DOM
    setTimeout(function() {
        if (typeof Hammer === 'undefined') {
            initNavbar();
        }
        initNavigation();
    }, 100);
    
    // Handle history state to prevent accidental back navigation when navbar is open
    function setupHistoryManagement() {
        // Push a dummy state to the history when the page loads
        const initialState = { navbarState: 'initial' };
        window.history.pushState(initialState, document.title);
        
        // Listen for popstate events (back button)
        window.addEventListener('popstate', function(event) {
            const navbar = document.getElementById('navbar');
            
            // If navbar is open, close it instead of navigating back
            if (navbar && navbar.classList.contains('active')) {
                // Prevent the actual back navigation
                event.preventDefault();
                
                // Close the navbar
                const overlay = document.getElementById('navbar-overlay');
                navbar.classList.remove('active');
                
                const navbarToggle = document.getElementById('navbar-toggle');
                if (navbarToggle) navbarToggle.classList.remove('active');
                
                if (overlay) overlay.classList.remove('active');
                document.body.classList.remove('navbar-hidden');
                
                // Push state again to maintain history
                window.history.pushState(initialState, document.title);
                
                console.log('Back gesture intercepted, navbar closed instead');
                return;
            }
        });
    }
    
    function initNavbarWithGestures() {
        // Get navbar elements
        const navbar = document.getElementById('navbar');
        const navbarToggle = document.getElementById('navbar-toggle');
        const overlay = document.getElementById('navbar-overlay');
        
        if (navbar && overlay) {
            console.log('Navbar elements found, initializing swipe gesture functionality');
            
            // Setup history management to handle back gestures
            setupHistoryManagement();
            
            // Function to toggle navbar
            function toggleNavbar() {
                navbar.classList.toggle('active');
                if (navbarToggle) navbarToggle.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.classList.toggle('navbar-hidden');
                
                // Update aria-expanded attribute for accessibility
                if (navbarToggle) {
                    const isExpanded = navbar.classList.contains('active');
                    navbarToggle.setAttribute('aria-expanded', isExpanded);
                }
                
                console.log('Navbar toggled, active state:', navbar.classList.contains('active'));
            }
            
            // Function to open navbar
            function openNavbar() {
                if (!navbar.classList.contains('active')) {
                    navbar.classList.add('active');
                    if (navbarToggle) navbarToggle.classList.add('active');
                    overlay.classList.add('active');
                    document.body.classList.add('navbar-hidden');
                    
                    if (navbarToggle) {
                        navbarToggle.setAttribute('aria-expanded', 'true');
                    }
                    
                    // Push state to history when navbar opens
                    window.history.pushState({ navbarState: 'open' }, document.title);
                    
                    console.log('Navbar opened');
                }
            }
            
            // Function to close navbar
            function closeNavbar() {
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    if (navbarToggle) navbarToggle.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.classList.remove('navbar-hidden');
                    
                    if (navbarToggle) {
                        navbarToggle.setAttribute('aria-expanded', 'false');
                    }
                    
                    console.log('Navbar closed');
                }
            }
            
            // Hide toggle button on mobile and tablet
            if (navbarToggle) {
                navbarToggle.style.display = 'none';
            }
            
            // Create a touch zone for edge detection
            const touchZone = document.createElement('div');
            touchZone.className = 'edge-touch-zone';
            touchZone.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 30px;
                height: 100%;
                z-index: 998;
                background: transparent;
                pointer-events: auto;
            `;
            document.body.appendChild(touchZone);
            
            // Track touch start position
            let touchStartX = 0;
            let touchStartY = 0;
            let isSwipingFromEdge = false;
            let isSwiping = false;
            
            // Add touch event listeners with passive: false to prevent default behavior
            touchZone.addEventListener('touchstart', function(e) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                isSwipingFromEdge = touchStartX <= 30;
                isSwiping = false;
                
                if (isSwipingFromEdge) {
                    // Prevent default only when starting from edge
                    e.preventDefault();
                }
            }, { passive: false });
            
            touchZone.addEventListener('touchmove', function(e) {
                if (!isSwipingFromEdge) return;
                
                const touchX = e.touches[0].clientX;
                const touchY = e.touches[0].clientY;
                
                // Calculate horizontal and vertical distance
                const deltaX = touchX - touchStartX;
                const deltaY = Math.abs(touchY - touchStartY);
                
                // If horizontal swipe is greater than vertical movement and moving right
                if (deltaX > 30 && deltaX > deltaY * 1.5) {
                    isSwiping = true;
                    openNavbar();
                    e.preventDefault();
                }
            }, { passive: false });
            
            touchZone.addEventListener('touchend', function(e) {
                if (isSwiping) {
                    e.preventDefault();
                    isSwiping = false;
                }
            }, { passive: false });
            
            // Prevent default on touchcancel to avoid unexpected behavior
            touchZone.addEventListener('touchcancel', function(e) {
                if (isSwiping) {
                    e.preventDefault();
                    isSwiping = false;
                }
            }, { passive: false });
            
            // Initialize Hammer.js on the touch zone for better gesture detection
            const zoneHammer = new Hammer(touchZone, {
                recognizers: [
                    [Hammer.Swipe, { direction: Hammer.DIRECTION_RIGHT, threshold: 10, velocity: 0.3 }]
                ]
            });
            
            // Add swipe right gesture to open navbar
            zoneHammer.on('swiperight', function(e) {
                openNavbar();
                console.log('Swipe right detected from edge, opening navbar');
                e.srcEvent.preventDefault();
            });
            
            // Initialize Hammer.js on navbar for swipe left gesture
            const navbarHammer = new Hammer(navbar, {
                recognizers: [
                    [Hammer.Swipe, { direction: Hammer.DIRECTION_LEFT, threshold: 10, velocity: 0.3 }]
                ]
            });
            
            // Add swipe left gesture to close navbar
            navbarHammer.on('swipeleft', function(e) {
                closeNavbar();
                console.log('Swipe left on navbar detected, closing navbar');
                e.srcEvent.preventDefault();
            });
            
            // Initialize Hammer.js on overlay for swipe left gesture
            const overlayHammer = new Hammer(overlay, {
                recognizers: [
                    [Hammer.Swipe, { direction: Hammer.DIRECTION_LEFT, threshold: 10, velocity: 0.3 }]
                ]
            });
            
            // Add swipe left gesture to close navbar when swiping on overlay
            overlayHammer.on('swipeleft', function(e) {
                closeNavbar();
                console.log('Swipe left on overlay detected, closing navbar');
                e.srcEvent.preventDefault();
            });
            
            // Close navbar when overlay is clicked
            overlay.addEventListener('click', closeNavbar);
            
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
                    if (navbarToggle) navbarToggle.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.classList.remove('navbar-hidden');
                }
            });
            
            // Add global touch event listener to prevent Chrome back gesture when navbar is open
            document.addEventListener('touchstart', function(e) {
                if (navbar.classList.contains('active') && e.touches[0].clientX < 50) {
                    e.preventDefault();
                }
            }, { passive: false });
            
            // Prevent Chrome's back gesture on the left edge of the screen
            document.addEventListener('touchmove', function(e) {
                // If touch started near the left edge and is moving horizontally
                if (e.touches[0].clientX < 50 && Math.abs(e.touches[0].clientX - touchStartX) > 10) {
                    e.preventDefault();
                }
            }, { passive: false });
        } else {
            console.error('Navbar elements not found:', {
                navbar: navbar,
                overlay: overlay
            });
            // Fall back to default navbar
            initNavbar();
        }
    }
    
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
        
        // Remove any existing event listeners to prevent duplicates
        navItems.forEach(item => {
            const clone = item.cloneNode(true);
            if (item.parentNode) {
                item.parentNode.replaceChild(clone, item);
            }
        });
        
        // Get fresh references after cloning
        const freshNavItems = document.querySelectorAll('.nav-item');
        
        // Handle navigation item clicks with improved touch handling
        freshNavItems.forEach(item => {
            // Add data attribute to mark as initialized
            item.setAttribute('data-nav-initialized', 'true');
            
            // Create a navigation handler function
            const handleNavigation = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Remove active class from all items
                freshNavItems.forEach(navItem => navItem.classList.remove('active'));
                
                // Add active class to clicked item
                this.classList.add('active');
                
                // Get path from data attribute
                const path = this.getAttribute('data-path');
                console.log(`Nav item activated, path:`, path);
                
                // Navigate to the path
                navigateTo(path);
            };
            
            // Add click event for all devices
            item.addEventListener('click', handleNavigation);
            
            // For touch devices, add specific touch handling
            if (isTouchDevice) {
                // Track if this is a tap or a swipe
                let touchStartX = 0;
                let touchStartY = 0;
                let isTap = false;
                
                item.addEventListener('touchstart', function(e) {
                    touchStartX = e.touches[0].clientX;
                    touchStartY = e.touches[0].clientY;
                    isTap = true;
                    this.classList.add('touch-active');
                }, { passive: true });
                
                item.addEventListener('touchmove', function(e) {
                    // If moved more than a small threshold, it's not a tap
                    const touchX = e.touches[0].clientX;
                    const touchY = e.touches[0].clientY;
                    const deltaX = Math.abs(touchX - touchStartX);
                    const deltaY = Math.abs(touchY - touchStartY);
                    
                    if (deltaX > 10 || deltaY > 10) {
                        isTap = false;
                        this.classList.remove('touch-active');
                    }
                }, { passive: true });
                
                item.addEventListener('touchend', function(e) {
                    this.classList.remove('touch-active');
                    if (isTap) {
                        handleNavigation.call(this, e);
                    }
                });
                
                item.addEventListener('touchcancel', function() {
                    this.classList.remove('touch-active');
                    isTap = false;
                }, { passive: true });
            }
        });
        
        // Handle back button with improved touch handling
        if (navBack) {
            // Clone to remove existing listeners
            const cloneBack = navBack.cloneNode(true);
            if (navBack.parentNode) {
                navBack.parentNode.replaceChild(cloneBack, navBack);
            }
            
            // Get fresh reference
            const freshNavBack = document.querySelector('.nav-back');
            
            if (freshNavBack) {
                freshNavBack.setAttribute('data-nav-initialized', 'true');
                
                // Create a back navigation handler
                const handleBackNavigation = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const path = this.getAttribute('data-path');
                    console.log(`Back button activated, path:`, path);
                    
                    // Navigate to the path
                    navigateTo(path);
                };
                
                // Add click event for all devices
                freshNavBack.addEventListener('click', handleBackNavigation);
                
                // For touch devices, add specific touch handling
                if (isTouchDevice) {
                    // Track if this is a tap or a swipe
                    let touchStartX = 0;
                    let touchStartY = 0;
                    let isTap = false;
                    
                    freshNavBack.addEventListener('touchstart', function(e) {
                        touchStartX = e.touches[0].clientX;
                        touchStartY = e.touches[0].clientY;
                        isTap = true;
                        this.classList.add('touch-active');
                    }, { passive: true });
                    
                    freshNavBack.addEventListener('touchmove', function(e) {
                        // If moved more than a small threshold, it's not a tap
                        const touchX = e.touches[0].clientX;
                        const touchY = e.touches[0].clientY;
                        const deltaX = Math.abs(touchX - touchStartX);
                        const deltaY = Math.abs(touchY - touchStartY);
                        
                        if (deltaX > 10 || deltaY > 10) {
                            isTap = false;
                            this.classList.remove('touch-active');
                        }
                    }, { passive: true });
                    
                    freshNavBack.addEventListener('touchend', function(e) {
                        this.classList.remove('touch-active');
                        if (isTap) {
                            handleBackNavigation.call(this, e);
                        }
                    });
                    
                    freshNavBack.addEventListener('touchcancel', function() {
                        this.classList.remove('touch-active');
                        isTap = false;
                    }, { passive: true });
                }
            }
        }
    }
    
    // Function to show swipe tutorial for first-time users
    function showSwipeTutorial() {
        // Check if tutorial has been shown before
        if (window.innerWidth <= 768 && !localStorage.getItem('swipeTutorialShown')) {
            // Create tutorial element
            const tutorial = document.createElement('div');
            tutorial.className = 'swipe-tutorial';
            tutorial.innerHTML = `
                <div class="tutorial-content">
                    <div class="swipe-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 8l-4 4 4 4"></path>
                            <path d="M10 8l-4 4 4 4"></path>
                        </svg>
                        <div class="swipe-animation"></div>
                    </div>
                    <p>Swipe right from the left edge to open menu</p>
                    <button class="tutorial-close">Got it</button>
                </div>
            `;
            
            // Add styles for tutorial
            const style = document.createElement('style');
            style.textContent = `
                .swipe-tutorial {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: fadeIn 0.5s ease;
                }
                .tutorial-content {
                    background-color: #0A1422;
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    max-width: 80%;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(92, 230, 164, 0.3);
                }
                .swipe-icon {
                    position: relative;
                    width: 60px;
                    height: 60px;
                    margin: 0 auto 15px;
                    color: #5CE6A4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .swipe-animation {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: rgba(92, 230, 164, 0.3);
                    border-radius: 50%;
                    left: 10px;
                    animation: swipeRight 1.5s infinite;
                }
                .tutorial-content p {
                    color: white;
                    margin-bottom: 20px;
                    font-size: 16px;
                }
                .tutorial-close {
                    background: linear-gradient(180deg, #00AF66 0%, #2AC182 100%);
                    border: none;
                    color: white;
                    padding: 8px 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-weight: bold;
                }
                @keyframes swipeRight {
                    0% { transform: translateX(0); opacity: 0.8; }
                    70% { transform: translateX(30px); opacity: 0; }
                    71% { transform: translateX(0); opacity: 0; }
                    100% { transform: translateX(0); opacity: 0.8; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(tutorial);
            
            // Close tutorial and save to localStorage
            const closeButton = tutorial.querySelector('.tutorial-close');
            closeButton.addEventListener('click', function() {
                tutorial.style.opacity = '0';
                tutorial.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    tutorial.remove();
                }, 300);
                localStorage.setItem('swipeTutorialShown', 'true');
            });
            
            // Also close on tap anywhere
            tutorial.addEventListener('click', function(e) {
                if (e.target === tutorial) {
                    closeButton.click();
                }
            });
        }
    }
}); 