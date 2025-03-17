import { Navbar } from '../components/navbar/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';
import { SearchBar } from '../components/forum-section/SearchBar.js';
import { ForumSidebar } from '../components/forum-section/ForumSidebar.js';
import { ForumContent } from '../components/forum-section/ForumContent.js';
import { TopDiscussions } from '../components/forum-section/TopDiscussions.js';

export const MateForum = () => {
    const currentPath = window.location.pathname;
    
    return `
        ${Navbar(currentPath)}
        <div class="container">
            <div class="header-wrapper">
                ${NewsHeader().replace('News', 'Forum')}
            </div>
            
            <div class="search-wrapper">
                ${SearchBar()}
            </div>

            <div class="forum-layout">
                <div class="left-sidebar">
                    ${ForumSidebar()}
                </div>
                
                <div class="forum-main">
                    ${ForumContent()}
                </div>
                
                <div class="right-sidebar">
                    ${TopDiscussions()}
                </div>
            </div>
        </div>
    `;
};