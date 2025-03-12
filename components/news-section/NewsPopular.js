export const NewsPopular = () => {
    return `
        <div class="popular-section">
            <div class="section-header">
                <h2>Sedang Populer</h2>
                <a href="#" class="view-all">Lebih banyak <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></a>
            </div>
            <div class="popular-articles">
                <article class="popular-article" onclick="window.location.href='news-detail.html?id=1'">
                    <img src="../../assets/img/pizza.png" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Pizza enak enak enak enak enak</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sit voluptate ea iure enim rem in.</p>
                    </div>
                </article>

                <article class="popular-article" onclick="window.location.href='news-detail.html?id=2'">
                    <img src="assets/pizza.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Pizza enak enak enak enak enak</h3>
                        <p>bshbdjbhsabdhsabdhsabdhbsahdbhsabdhsabdhbsahdbhsabdhsabdhsabhdbsahdbhsabdhsabdhsabhd...</p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="3">
                    <img src="assets/pizza.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Pizza enak enak enak enak enak</h3>
                        <p>bshbdjbhsabdhsabdhsabdhbsahdbhsabdhsabdhbsahdbhsabdhsabdhsabhdbsahdbhsabdhsabdhsabhd...</p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="4">
                    <img src="assets/pizza.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Pizza enak enak enak enak enak</h3>
                        <p>bshbdjbhsabdhsabdhsabdhbsahdbhsabdhsabdhbsahdbhsabdhsabdhsabhdbsahdbhsabdhsabdhsabhd...</p>
                    </div>
                </article>
            </div>
        </div>

        <div class="popular-section">
            <div class="section-header">
                <h2>Terbaru</h2>
                <a href="#" class="view-all">Lebih banyak <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></a>
            </div>
            <div class="popular-articles">
                <article class="popular-article" data-article-id="5">
                    <img src="../../assets/img/pizza.png" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Pizza enak enak enak enak enak</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sit voluptate ea iure enim rem in.</p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="6">
                    <img src="assets/pizza.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Pizza enak enak enak enak enak</h3>
                        <p>bshbdjbhsabdhsabdhsabdhbsahdbhsabdhsabdhbsahdbhsabdhsabdhsabhdbsahdbhsabdhsabdhsabhd...</p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="7">
                    <img src="assets/pizza.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Pizza enak enak enak enak enak</h3>
                        <p>bshbdjbhsabdhsabdhsabdhbsahdbhsabdhsabdhbsahdbhsabdhsabdhsabhdbsahdbhsabdhsabdhsabhd...</p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="8">
                    <img src="assets/pizza.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Pizza enak enak enak enak enak</h3>
                        <p>bshbdjbhsabdhsabdhsabdhbsahdbhsabdhsabdhbsahdbhsabdhsabdhsabhdbsahdbhsabdhsabdhsabhd...</p>
                    </div>
                </article>
            </div>
        </div>
    `;
}; 