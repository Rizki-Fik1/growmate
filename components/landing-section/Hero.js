export const HeroSection = () => {
    setTimeout(() => {
        document.querySelector('.explore').addEventListener('click', () => {
            window.location.href = '#features';
        });
        document.querySelector('.get-started').addEventListener('click', () => {
            window.location.href = '/chart.html';
        });
    })
    return `
        <div class="hero-section">
            <h1>
                <img src="assets/img/G.png" alt="G" />
                <span class="text-green">ROW</span>
                <span>MATE</span>
            </h1>
            <p>NEXT GEN EDUCATION WEB</p>
            <p class="small">
                Temukan caramu untuk mulai pengembangan diri, bersama<br>
                <span>GrowMate</span>. Satu langkah menuju kesuksesan setiap harinya.<br>
                Bersiaplah!
            </p>
            <div class="buttons">
                <button class="explore">
                    <span >Lanjut Explore</span>
                    <img src="assets/svg/Vector.svg" alt="Arrow Right" />
                </button>
                <button class="get-started" data-path="/chart.html">
                    <span>Mulai Sekarang</span>
                    <img src="assets/svg/Arrow.svg" alt="Arrow Right" />
                </button>
            </div>
        </div>
    `;
};