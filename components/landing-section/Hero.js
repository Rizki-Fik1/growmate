export const HeroSection = () => {
    setTimeout(() => {
        document.querySelector('.explore').addEventListener('click', () => {
            window.location.href = '#features';
        });
        document.querySelector('.get-started').addEventListener('click', () => {
            window.location.href = '/login.html ';
        });
    })
    return `
        <div class="hero-section">
            <div class="hero-content">
                <h1>
                    <img src="assets/img/G.png" alt="G" class="hero-logo" />
                    <span class="text-green">ROW</span>
                    <span>MATE</span>
                </h1>
                <p class="hero-tagline">NEXT GEN EDUCATION WEB</p>
                <p class="small">
                    Temukan caramu untuk mulai pengembangan diri, bersama
                    <span>GrowMate</span>. Satu langkah menuju kesuksesan setiap harinya.
                    Bersiaplah!
                </p>
                <div class="buttons">
                    <button class="explore">
                        <span>Lanjut Explore</span>
                        <img src="assets/svg/Vector.svg" alt="Arrow Right" />
                    </button>
                    <button class="get-started" data-path="/login.html">
                        <span>Mulai Sekarang</span>
                        <img src="assets/svg/Arrow.svg" alt="Arrow Right" />
                    </button>
                </div>
            </div>
        </div>
    `;
};