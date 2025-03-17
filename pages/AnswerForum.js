import { Navbar } from '../components/navbar/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';
import { SearchBar } from '../components/forum-section/answer/SearchBar.js';
import { SidebarAnswer } from '../components/forum-section/answer/SidebarAnswer.js';
import { ForumAnswers } from '../components/forum-section/answer/ForumAnswer.js';
import { SideRight } from '../components/forum-section/question/SideRight.js';

export const AnswerForum = () => {
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
                    ${SidebarAnswer()}
                </div>
                
                <div class="forum-main">
                    ${ForumAnswers()}
                </div>
                
                <div class="right-sidebar">
                    ${SideRight()}
                </div>
            </div>
        </div>
    `;
}; 