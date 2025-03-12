import { Comment } from './Comment.js';

export const ArticleDetail = (article) => {
    return `
        <div class="news-detail">
            <button class="back-button" onclick="window.location.href='news.html'">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_711_491)"/>
                    <path d="M18.5 22L13.5 17C12.8333 16.3333 12.8333 15.6667 13.5 15L18.5 10" stroke="#030C19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_711_491" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#64C9DF"/>
                            <stop offset="1" stop-color="#18D87B"/>
                        </linearGradient>
                    </defs>
                </svg>
                Kembali
            </button>
            <div class="article-header">
                <h1>${article.title}</h1>
                <div class="author">
                    <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                    <span class="author-name">${article.author}</span>
                    <span class="post-time">${article.time}</span>
                </div>
            </div>
            
            <div class="article-content">
                <img src="../../assets/img/pizza.png" alt="Pizza" class="article-main-image">
                <div class="article-interactions-container">
                    <div class="article-interactions">
                        <div class="interaction-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>1</span>
                        </div>
                        <div class="interaction-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.9965 11H16.0054" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.9955 11H12.0045" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.99451 11H8.00349" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>3</span>
                        </div>
                    </div>
                    <div class="share-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.96 6.17004C18.96 7.56004 20.34 9.77004 20.62 12.32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.49023 12.37C3.75023 9.83001 5.11023 7.62001 7.09023 6.22001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.19043 20.94C9.35043 21.53 10.6704 21.86 12.0604 21.86C13.4004 21.86 14.6604 21.56 15.7904 21.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.0603 7.70001C13.5959 7.70001 14.8403 6.45565 14.8403 4.92001C14.8403 3.38437 13.5959 2.14001 12.0603 2.14001C10.5246 2.14001 9.28027 3.38437 9.28027 4.92001C9.28027 6.45565 10.5246 7.70001 12.0603 7.70001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.83012 19.92C6.36576 19.92 7.61012 18.6757 7.61012 17.14C7.61012 15.6044 6.36576 14.36 4.83012 14.36C3.29448 14.36 2.05012 15.6044 2.05012 17.14C2.05012 18.6757 3.29448 19.92 4.83012 19.92Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.1706 19.92C20.7063 19.92 21.9506 18.6757 21.9506 17.14C21.9506 15.6044 20.7063 14.36 19.1706 14.36C17.635 14.36 16.3906 15.6044 16.3906 17.14C16.3906 18.6757 17.635 19.92 19.1706 19.92Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="article-text">
                    ${article.content}
                </div>
            </div>

            <!-- Comments Section -->
            ${Comment()}
        </div>
    `;
}; 