export const NavbarLanding = () => {
    return `
        <nav>
            <div class="text-white text-2xl font-bold">Growmate.</div>
            <button class="mobile-menu-btn">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="flex space-x-12">
                <a href="#features">Features</a>
                <a href="#about">About Us</a>
                <a href="#faq">FAQ</a>
                <a href="#privacy">Privacy Policy</a>
            </div>
            <button class="signup-btn">Sign Up</button>
        </nav>
    `;
};