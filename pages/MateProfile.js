import { Navbar } from '../components/navbar/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';
import { BadgeCard } from '../components/profile-section/BadgeCard.js';
import { CardProfile } from '../components/profile-section/CardProfile.js';
import { FollowCard } from '../components/profile-section/FollowCard.js';


export const MateProfile = () => {
    const currentPath = window.location.pathname;
    
    // Initial render
    return `
        ${Navbar(currentPath)}
        <div class="container">
            ${NewsHeader().replace('News', 'Profile')}
            ${CardProfile()}
            ${BadgeCard()}
            ${FollowCard()}
        </div>
    `;
}; 