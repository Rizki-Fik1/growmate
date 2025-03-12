function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    function handleNavItemClick(event) {
        // Remove 'active' class from all nav-items
        navItems.forEach(item => item.classList.remove('active'));
        
        // Add 'active' class to clicked nav-item
        const clickedItem = event.currentTarget;
        clickedItem.classList.add('active');
        
        // Get path from data attribute
        const path = clickedItem.getAttribute('data-path');
        if (path) {
            window.location.href = path;
        }
    }
    
    // Add event listener to each nav-item
    navItems.forEach(item => {
        item.addEventListener('click', handleNavItemClick);
    });
    
    // Handle back button
    const navBack = document.querySelector('.nav-back');
    if (navBack) {
        navBack.addEventListener('click', function() {
            const path = this.getAttribute('data-path');
            if (path) {
                window.location.href = path;
            }
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