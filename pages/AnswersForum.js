import { Navbar } from '../components/chart-section/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';
import { SearchBar } from '../components/forum-section/question/SearchBar.js';
import { SidebarQuestion } from '../components/forum-section/question/SidebarQuestion.js';
import { ForumAnswers } from '../components/forum-section/question/ForumAnswers.js';
import { SideRight } from '../components/forum-section/question/SideRight.js';

export const AnswersForum = () => {
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
                    ${SidebarQuestion()}
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