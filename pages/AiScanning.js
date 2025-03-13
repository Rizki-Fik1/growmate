import { Navbar } from '../components/chart-section/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';

export const AiScanning = () => {
    return `
        ${Navbar(window.location.pathname)}
        <div class="container">
            ${NewsHeader()}
            <div class="scanning-page">
                <div class="scanning-content">
                    <div class="article-preview">
                        <h2>Pizza enak enak enak enak...</h2>
                        <div class="article-image">
                            <img src="../../assets/img/pizza.png" alt="Pizza Article">
                        </div>
                        <div class="article-text" style="color: #fff; overflow-y: auto; max-height: 400px; display: block;">
                            <h3>Sejarah Pizza: Dari Roti Pipih Kuno hingga Makanan Ikonik Dunia</h3>
                            <p>Pizza adalah salah satu makanan paling populer di dunia, tetapi asal-usulnya bisa ditelusuri hingga ribuan tahun yang lalu. Dari roti pipih yang dibuat oleh peradaban kuno hingga hidangan khas Italia yang mendunia, pizza telah mengalami banyak evolusi sepanjang sejarah.</p>
                            
                            <h4>Asal-Usul Pizza di Peradaban Kuno</h4>
                            <p>Konsep dasar pizza—roti pipih dengan berbagai topping—telah ada sejak zaman kuno. Beberapa peradaban awal yang berkontribusi pada evolusi pizza meliputi:</p>
                            <p>1. Mesopotamia dan Mesir Kuno</p>
                            <p>Bangsa Mesopotamia dan Mesir Kuno diketahui telah membuat roti pipih tanpa ragi yang dipanggang di atas batu panas. Roti ini sering disajikan dengan berbagai topping seperti minyak zaitun, rempah-rempah, dan terkadang bawang atau bawang putih.</p>
                            <p>2. Yunani Kuno</p>
                            <p>Orang Yunani kuno mengembangkan makanan bernama "plakous" yang merupakan roti pipih berlapis dengan rempah-rempah, bawang, dan bawang putih. Ini dianggap sebagai salah satu pendahulu langsung dari pizza modern.</p>
                            <p>3. Kekaisaran Romawi</p>
                            <p>Bangsa Romawi mengadopsi konsep roti pipih dari Yunani dan mengembangkannya menjadi "placenta", sejenis roti pipih yang ditaburi keju dan madu, serta "focaccia" yang masih populer hingga saat ini.</p>
                            
                            <h4>Kelahiran Pizza Modern di Italia</h4>
                            <p>Pizza seperti yang kita kenal sekarang mulai berkembang di Naples, Italia, pada abad ke-18 dan ke-19. Beberapa poin penting dalam perkembangan pizza modern:</p>
                            <p>1. Pizza Margherita</p>
                            <p>Pada tahun 1889, pembuat pizza Raffaele Esposito menciptakan pizza khusus untuk menghormati kunjungan Ratu Margherita dari Savoy. Pizza ini menampilkan warna-warna bendera Italia: tomat merah, keju mozzarella putih, dan daun basil hijau. Pizza ini kemudian dikenal sebagai Pizza Margherita dan menjadi standar pizza Napoli klasik.</p>
                            <p>2. Imigrasi ke Amerika</p>
                            <p>Imigran Italia membawa pizza ke Amerika Serikat pada akhir abad ke-19 dan awal abad ke-20. Lombardi's, yang didirikan pada tahun 1905 di New York City, dianggap sebagai pizzeria pertama di Amerika Serikat.</p>
                            
                            <h4>Globalisasi Pizza</h4>
                            <p>Setelah Perang Dunia II, popularitas pizza melonjak di Amerika Serikat dan kemudian menyebar ke seluruh dunia. Beberapa faktor yang berkontribusi pada globalisasi pizza:</p>
                            <p>1. Rantai Pizza</p>
                            <p>Munculnya rantai pizza seperti Pizza Hut (1958), Domino's (1960), dan Little Caesars (1959) membantu mempopulerkan pizza di seluruh Amerika Serikat dan akhirnya ke seluruh dunia.</p>
                            <p>2. Variasi Regional</p>
                            <p>Pizza telah beradaptasi dengan selera lokal di berbagai negara, menciptakan variasi unik seperti pizza Chicago deep dish, pizza New York style, pizza California dengan topping non-tradisional, dan banyak lagi.</p>
                        </div>
                    </div>

                    <div class="scanning-result">
                        <div class="result-header">
                            <h3>Saran</h3>
                        </div>
                        
                        <div class="score-section">
                            <div class="score-circle">
                                <svg viewBox="0 0 36 36" style="width: 100%; height: 100%;">
                                    <path d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="rgba(255, 255, 255, 0.1)"
                                        stroke-width="3"/>
                                    <path d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#18D87B"
                                        stroke-width="3"
                                        stroke-dasharray="87, 100"/>
                                </svg>
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 24px; font-weight: 600;">87%</div>
                            </div>
                            <div class="score-text">
                                <h4 style="color: white;">Artikel yang bagus</h4>
                                <p style="color: #919BBF;">Mate AI akan memberikan beberapa saran</p>
                            </div>
                        </div>

                        <div class="suggestions-section">
                            <h4>Saran</h4>
                            <div class="suggestion-list">
                                <div class="suggestion-item">
                                    <div class="original-text">
                                        <div class="text-marker"></div>
                                        <p>Bangsa Mesopotamia dan Mesir Kuno diketahui telah membuat roti pipih tanpa ragi yang dipanggang di atas batu panas.</p>
                                    </div>
                                    <div class="suggestion-text">
                                        <p>Ungkapan 'diketahui telah membuat' bersifat bertele-tele dan dapat disederhanakan agar lebih ringkas. Ia menambahkan kata-kata yang tidak perlu yang tidak memberikan kontribusi signifikan terhadap maknanya.</p>
                                    </div>
                                    <div class="suggestion-actions">
                                        <button class="remove-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <div class="action-divider"></div>
                                        <button class="apply-btn">Apply</button>
                                    </div>
                                </div>

                                <div class="suggestion-item">
                                    <div class="original-text">
                                        <div class="text-marker"></div>
                                        <p>Konsep dasar pizza—roti pipih dengan berbagai topping—telah ada sejak zaman kuno.</p>
                                    </div>
                                    <div class="suggestion-text">
                                        <p>Tambahkan contoh spesifik tentang topping yang digunakan pada roti pipih di zaman kuno untuk memberikan konteks historis yang lebih kaya.</p>
                                    </div>
                                    <div class="suggestion-actions">
                                        <button class="remove-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <div class="action-divider"></div>
                                        <button class="apply-btn">Apply</button>
                                    </div>
                                </div>
                                
                                <div class="suggestion-item">
                                    <div class="original-text">
                                        <div class="text-marker"></div>
                                        <p>Pizza telah mengalami banyak evolusi sepanjang sejarah.</p>
                                    </div>
                                    <div class="suggestion-text">
                                        <p>Berikan contoh spesifik tentang evolusi pizza dari masa ke masa untuk memperkuat pernyataan ini.</p>
                                    </div>
                                    <div class="suggestion-actions">
                                        <button class="remove-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <button class="apply-btn">Apply</button>
                                    </div>
                                </div>
                                
                                <div class="suggestion-item">
                                    <div class="original-text">
                                        <div class="text-marker"></div>
                                        <p>Pizza adalah salah satu makanan paling populer di dunia.</p>
                                    </div>
                                    <div class="suggestion-text">
                                        <p>Tambahkan data atau statistik untuk mendukung pernyataan bahwa pizza adalah salah satu makanan paling populer di dunia.</p>
                                    </div>
                                    <div class="suggestion-actions">
                                        <button class="remove-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <button class="apply-btn">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="posting-section">
                            <p>Pastikan semuanya sudah benar</p>
                            <button class="posting-btn">Posting</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}; 