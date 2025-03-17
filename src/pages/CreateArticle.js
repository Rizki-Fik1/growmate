import { Navbar } from '../components/chart-section/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';

export const CreateArticle = () => {
    return `
        ${Navbar(window.location.pathname)}
        <div class="container">
            ${NewsHeader()}
            <div class="create-article-page">
                <h1>Buat Artikel</h1>
                
                <div class="article-form">
                    <div class="article-section">
                        <h2>Artikel</h2>
                        <p class="article-subtitle">Keluarkan ide ide cemerlang kamu <span>Mass.muhh_</span></p>
                        
                        <div class="form-group">
                            <label>Judul</label>
                            <input type="text" placeholder="Berikan judul" class="form-input">
                        </div>
                        
                        <div class="form-group">
                            <label>Isi Artikel</label>
                            <textarea placeholder="Apa yang kamu pikirkan, Mass?" class="form-textarea"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label>Masukan Gambar</label>
                            <div class="image-upload-area">
                                <div class="upload-placeholder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Masukan Gambar</p>
                                </div>
                            </div>
                        </div>

                        <button class="scan-button" onclick="window.location.href='ai-scanning.html'">Scan</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}; 