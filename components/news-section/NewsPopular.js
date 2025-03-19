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
                        <h3>Pizza enak menjadi industri meyakinkan</h3>
                        <p>Industri kuliner terus berkembang, dan pizza tetap menjadi salah satu makanan favorit di seluruh dunia. Tahun 2025 membawa berbagai inovasi menarik dalam dunia pizza.</p>
                    </div>
                </article>

                <article class="popular-article" onclick="window.location.href='news-detail.html?id=2'">
                    <img src="../../assets/img/Univ Ilus.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>10 PTN Terbaik di Indonesia Versi QS World University Rankings</h3>
                        <p>Peringkat terbaru 10 Perguruan Tinggi Negeri (PTN) terbaik di Indonesia menurut QS World University Rankings, termasuk Universitas Indonesia, Universitas Gadjah Mada, dan Institut Teknologi Bandung. </p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="3">
                    <img src="../../assets/img/2 Orang.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Kesiapan Mental Anak Dinilai Berpengaruh ke Prestasi Akademik</h3>
                        <p>Penelitian menunjukkan bahwa kesiapan mental anak memiliki pengaruh signifikan terhadap prestasi akademik mereka. Orang tua dan pendidik diimbau untuk memberikan perhatian lebih pada aspek ini.</p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="4">
                    <img src="../../assets/img/Pasta.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Cara mengolah pasta</h3>
                        <p>Pasta merupakan salah satu makanan asal Italia yang populer dan menjadi favorit banyak orang. Makanan olahan tepung ini ada berbagai macam jenis dengan bentuk dan ukuran yang bervariasi.</p>
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
                    <img src="../../assets/img/Olahraga.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="../../assets/img/profile-dummy 1.png" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>5 Langkah untuk Gen Z Temukan Potensi Diri, Langsung Praktikkan!</h3>
                        <p>Panduan bagi generasi Z untuk menemukan dan mengembangkan potensi diri mereka melalui langkah-langkah praktis.</p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="6">
                    <img src="../../assets/img/Buku.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Rekomendasi Enam Buku untuk Pengembangan Diri, dari Tekanan Medsos hingga Arti Bahagia</h3>
                        <p>Daftar enam buku yang direkomendasikan untuk membantu pembaca memahami tekanan media sosial hingga menemukan arti kebahagiaan dalam konteks pengembangan diri. </p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="7">
                    <img src="../../assets/img/Minyak.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Banyak Minyakita yang Tak Sesuai Takaran</h3>
                        <p>Satgas Pangan Polri menemukan banyak produk Minyakita yang tidak sesuai takaran dan akan memperluas inspeksi ke seluruh Indonesia serta memberikan edukasi kepada distributor. </p>
                    </div>
                </article>

                <article class="popular-article" data-article-id="8">
                    <img src="../../assets/img/Self Coach.jpg" alt="Pizza" class="article-image">
                    <div class="article-info">
                        <div class="author">
                            <img src="assets/profile.jpg" alt="Author" class="author-img">
                            <span class="author-name">miss.muhh</span>
                            <span class="post-time">10 jam lalu</span>
                        </div>
                        <h3>Self-Coaching, Kunci Pengembangan Diri</h3>
                        <p>  Mengenalkan konsep self-coaching sebagai kunci dalam proses pengembangan diri untuk mencapai tujuan pribadi dan profesional.</p>
                    </div>
                </article>
            </div>
        </div>
    `;
}; 