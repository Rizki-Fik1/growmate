import { Navbar } from '../components/navbar/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';
import { NewsSearch } from '../components/news-section/NewsSearch.js';
import { NewsFeatured } from '../components/news-section/NewsFeatured.js';
import { NewsPopular } from '../components/news-section/NewsPopular.js';

export const MateNews = () => {
    const currentPath = window.location.pathname;
    
    // Initial render
    return `
        ${Navbar(currentPath)}
        <div class="container">
            ${NewsHeader()}
            ${NewsSearch()}
            ${NewsFeatured()}
            ${NewsPopular()}
        </div>
    `;
}; 