export const NewsFeatured = () => {
    return `
        <div class="featured-section">
            <div class="top-section">
                <div class="create-article">
                    <h3>Ayo buat artikel mu <br> disini!</h3>
                    <button class="create-button" onclick="window.location.href='create-article.html'">Buat Artikelmu</button>
                </div>
            </div>

            <div class="articles-section">
                <article class="featured-article trending" style="background-image: url('../../assets/img/Gebyar P5.png')">
                    <div class="article-content">
                        <h2>Gebyar P5 di SMKN 8 Semarang</h2>
                        <p>SMKN 8 Semarang baru saja melaksanakan Proyek Penguatan Profile Pelajar Pancasila atau P5 dengan tema...</p>
                        <a href="#" class="read-more">see more</a>
                    </div>
                </article>

                <article class="featured-article history" style="background-image: url('../../assets/img/Perang.png')">
                    <div class="article-content">
                        <h2>Perang Laut Midway</h2>
                        <p>SMKN 8 Semarang baru saja melaksanakan Proyek Penguatan Profile Pelajar Pancasila atau P5 dengan tema...</p>
                        <a href="#" class="read-more">see more</a>
                    </div>
                </article>
            </div>
        </div>
    `;
}; 