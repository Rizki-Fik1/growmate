import { Navbar } from '../components/navbar/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';
import { SearchBar } from '../components/forum-section/question/SearchBar.js';
import { SidebarQuestion } from '../components/forum-section/question/SidebarQuestion.js';
import { ForumQuestion } from '../components/forum-section/question/ForumQuestion.js';
import { SideRight } from '../components/forum-section/question/SideRight.js';

export const QuestionForum = () => {
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
                    ${ForumQuestion()}
                </div>
                
                <div class="right-sidebar">
                    ${SideRight()}
                </div>
            </div>
        </div>
    `;
};