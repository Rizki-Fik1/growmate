export const Footer = () => {
    return `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-top">
                    <div class="logo-section">
                        <h1 class="logo-text">
                            <img src="assets/img/G.png" alt="G" class="footer-logo" />
                            <span class="text-green">ROW</span>
                            <span>MATE</span>
                        </h1>
                        <span class="logo-description">
                            Wadah Anak Muda untuk Belajar, Bertumbuh, dan Meraih Karir Impian. Semua dalam satu platform.
                        </span>
                    </div>
                    
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>Perusahaan</h4>
                            <div class="footer-links-container">
                                <a href="#">Tentang Kami</a>
                                <a href="#">Kontak & Servis</a>
                                <a href="#">Kerja Sama</a>
                            </div>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Navigasi</h4>
                            <div class="footer-links-container">
                                <a href="#">Mate Chart</a>
                                <a href="#">Mate Forum</a>
                                <a href="#">Mate News</a>
                                <a href="#">Crowd Funding</a>
                            </div>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Sosial</h4>
                            <div class="footer-links-container">
                                <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
                                <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
                                <a href="#"><i class="fab fa-twitter"></i> Twitter/X</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="copyright">
                        © 2025 GrowMate. Hak Cipta Dilindungi.
                    </div>
                    <div class="footer-actions">
                        <button class="back-to-top" id="backToTopBtn">Kembali ke Atas ↑</button>
                        <a href="#" class="privacy-link">Kebijakan Privasi</a>
                    </div>
                </div>
            </div>
        </footer>
        <script>
            document.getElementById('backToTopBtn').addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        </script>
    `;
};