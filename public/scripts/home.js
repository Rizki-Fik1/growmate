// Initialize scroll functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollFeature();
});

function initScrollFeature() {
    // Get the feature button and feature section
    const featureBtn = document.querySelector('.feature-option-title');
    const featureSection = document.getElementById('feature-main');

    if (featureBtn && featureSection) {
        featureBtn.addEventListener('click', () => {
            // Scroll to feature section with smooth animation
            featureSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Add active state to button
            featureBtn.classList.add('active');

            // Optional: Add animation class to feature section
            featureSection.classList.add('fade-in');
        });
    }
}

// Optional: Add scroll-based animations
window.addEventListener('scroll', () => {
    const featureSection = document.getElementById('feature-main');
    const featureCards = document.querySelectorAll('.feature-wrapper-one, .feature-wrapper-two, .feature-wrapper-three');
    
    if (featureSection) {
        const sectionTop = featureSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Add animation when feature section comes into view
        if (sectionTop < windowHeight * 0.75) {
            featureSection.classList.add('visible');
            
            // Animate feature cards with delay
            featureCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('slide-up');
                }, index * 200);
            });
        }
    }
}); 