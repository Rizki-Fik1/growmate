export const Navbar = (currentPath) => {
    const isActive = (path) => {
        if (!path) return false;
        
        // Handle root path 
        if (path === 'index.html' && (currentPath === '/' || currentPath.endsWith('/index.html'))) {
            return true;
        }
        
        // Handle other paths
        return currentPath.endsWith(path);
    };

    // Add 'active' class based on current page
    const homeClass = isActive('index.html') ? 'active' : '';
    const chartClass = isActive('chart.html') ? 'active' : '';
    const newsClass = isActive('news.html') ? 'active' : '';
    const forumClass = isActive('forum.html') ? 'active' : '';

    return `
        <div class="navbar">
            <div class="nav-back" data-path="index.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 91 91" fill="none">
                    <g filter="url(#filter0_d_711_491)">
                        <circle cx="45.5" cy="41.5" r="29.5" fill="url(#paint0_linear_711_491)"/>
                    </g>
                    <path d="M39.8015 42.8755L46.7233 49.6615C47.0058 49.9385 47.1414 50.2617 47.1301 50.631C47.1188 51.0003 46.9714 51.3234 46.688 51.6004C46.4055 51.8543 46.0759 51.9873 45.6992 51.9993C45.3225 52.0113 44.9929 51.8783 44.7103 51.6004L35.3871 42.4601C35.2459 42.3216 35.1456 42.1715 35.0863 42.01C35.0269 41.8484 34.9982 41.6753 35.0001 41.4906C35.002 41.306 35.0316 41.1329 35.0891 40.9713C35.1465 40.8097 35.2464 40.6597 35.3886 40.5212L44.7117 31.3808C44.9707 31.1269 45.2947 31 45.6836 31C46.0726 31 46.4078 31.1269 46.6894 31.3808C46.9719 31.6578 47.1132 31.987 47.1132 32.3683C47.1132 32.7496 46.9719 33.0783 46.6894 33.3543L39.8015 40.1057H55.5874C55.9876 40.1057 56.3234 40.2387 56.5946 40.5046C56.8658 40.7705 57.0009 41.0992 57 41.4906C56.9991 41.8821 56.8634 42.2112 56.5932 42.4781C56.3229 42.7449 55.9876 42.8774 55.5874 42.8755H39.8015Z" fill="#030C19"/>
                    <defs>
                        <filter id="filter0_d_711_491" x="0" y="0" width="91" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_711_491"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="5.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_711_491"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_711_491" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_711_491" x1="12.5" y1="12" x2="75" y2="71" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#64C9DF"/>
                        <stop offset="0.748682" stop-color="#18D87B"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="nav-item ${homeClass}" data-path="index.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 33" fill="none">
                    <path d="M2.14286 30.8551H10.0543V19.9652C10.0543 19.4747 10.2207 19.0636 10.5536 18.7318C10.885 18.3986 11.2957 18.232 11.7857 18.232H18.2143C18.7043 18.232 19.1157 18.3986 19.4486 18.7318C19.78 19.0636 19.9457 19.4747 19.9457 19.9652V30.8551H27.8571V12.2112C27.8571 11.991 27.8093 11.7908 27.7136 11.6106C27.6179 11.4304 27.4871 11.2731 27.3214 11.1387L15.7843 2.43451C15.5643 2.2429 15.3029 2.14709 15 2.14709C14.6971 2.14709 14.4364 2.2429 14.2179 2.43451L2.67857 11.1387C2.51429 11.276 2.38357 11.4333 2.28643 11.6106C2.18929 11.7879 2.14143 11.9881 2.14286 12.2112V30.8551ZM0 30.8551V12.2112C0 11.6621 0.122857 11.1423 0.368571 10.6518C0.614286 10.1613 0.952857 9.75736 1.38429 9.43991L12.9236 0.692819C13.5279 0.23094 14.2179 0 14.9936 0C15.7693 0 16.4636 0.23094 17.0764 0.692819L28.6157 9.43777C29.0486 9.75522 29.3871 10.1599 29.6314 10.6518C29.8771 11.1423 30 11.6621 30 12.2112V30.8551C30 31.4299 29.7864 31.9311 29.3593 32.3587C28.9321 32.7862 28.4314 33 27.8571 33H19.5343C19.0429 33 18.6314 32.8341 18.3 32.5024C17.9686 32.1692 17.8029 31.7574 17.8029 31.2669V20.3791H12.1971V31.2669C12.1971 31.7588 12.0314 32.1706 11.7 32.5024C11.3686 32.8341 10.9579 33 10.4679 33H2.14286C1.56857 33 1.06786 32.7862 0.640714 32.3587C0.213571 31.9311 0 31.4299 0 30.8551Z" fill="currentColor"/>
                </svg>
            </div>
            <div class="nav-item ${chartClass}" data-path="chart.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <path d="M2.67 26L9.06 14L16.36 20.49C16.5886 20.6931 16.8607 20.841 17.1554 20.9225C17.4501 21.004 17.7596 21.0168 18.06 20.96C18.3632 20.9032 18.6491 20.7771 18.8954 20.5915C19.1418 20.4059 19.3418 20.1658 19.48 19.89L25 8.9L23.18 8L17.69 19L10.39 12.51C10.1672 12.3028 9.90008 12.1492 9.60895 12.0608C9.31783 11.9724 9.01038 11.9516 8.71 12C8.41336 12.0492 8.13164 12.1647 7.88579 12.3378C7.63994 12.511 7.43629 12.7373 7.29 13L2 23V0H0V26C0 26.5304 0.210714 27.0391 0.585786 27.4142C0.960859 27.7893 1.46957 28 2 28H28V26H2.67Z" fill="currentColor"/>
                </svg>
            </div> 
            <div class="nav-item ${newsClass}" data-path="news.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <path d="M1 1V27.25C1 28.2446 1.35119 29.1984 1.97631 29.9016C2.60143 30.6049 3.44928 31 4.33333 31H27.6667C28.5507 31 29.3986 30.6049 30.0237 29.9016C30.6488 29.1984 31 28.2446 31 27.25V8.5H24.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1H24.3333V27.25C24.3333 28.2446 24.6845 29.1984 25.3096 29.9016C25.9348 30.6049 26.7826 31 27.6667 31M17.6667 8.5H7.66667M17.6667 16H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="nav-item ${forumClass}" data-path="forum.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 30 30" fill="none">
                    <path d="M5.04444 27.3452L7.41511 25.3279L7.43067 25.3147C7.92533 24.8927 8.17578 24.6809 8.45422 24.5303C8.70415 24.3946 8.96756 24.2964 9.24444 24.2357C9.554 24.1678 9.876 24.1678 10.5231 24.1678H24.0269C25.766 24.1678 26.6371 24.1678 27.3013 23.8071C27.8867 23.4898 28.3626 22.9835 28.6609 22.3608C29 21.6525 29 20.7258 29 18.879V6.29054C29 4.44043 29 3.51371 28.6609 2.80709C28.3622 2.18411 27.8857 1.67778 27.2998 1.36076C26.6356 1 25.7644 1 24.0222 1H5.97778C4.23556 1 3.36444 1 2.69867 1.36076C2.1133 1.67806 1.63738 2.18436 1.33911 2.80709C1 3.51537 1 4.44208 1 6.29551V25.2782C1 27.0423 1 27.9243 1.33911 28.3761C1.48493 28.5709 1.67019 28.7282 1.88108 28.8362C2.09197 28.9442 2.32305 29.0002 2.55711 29C3.10156 29 3.74867 28.4473 5.04444 27.3452Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 37 36" fill="none">
                    <path d="M18.499 9.5V1H11.499" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.9971 9.5H7.99707C6.06407 9.5 4.49707 11.4028 4.49707 13.75V30.75C4.49707 33.0972 6.06407 35 7.99707 35H28.9971C30.9301 35 32.4971 33.0972 32.4971 30.75V13.75C32.4971 11.4028 30.9301 9.5 28.9971 9.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 22.25H4.5M32.5 22.25H36M23.75 20.125V24.375M13.25 20.125V24.375" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    `;
};

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    
    function handleNavItemClick(event) {
        // Hapus class 'active' dari semua nav-item
        navItems.forEach(item => item.classList.remove('active'));
        
        // Tambahkan class 'active' ke nav-item yang diklik
        const clickedItem = event.currentTarget;
        clickedItem.classList.add('active');
        
        // Ambil path dari data attribute
        const path = clickedItem.getAttribute('data-path');
        if (path) {
            window.location.href = path;
        }
    }
    
    // Tambahkan event listener ke setiap nav-item
    navItems.forEach(item => {
        item.addEventListener('click', handleNavItemClick);
    });
    
    // Tambahan untuk nav-back jika diperlukan
    const navBack = document.querySelector('.nav-back');
    if (navBack) {
        navBack.addEventListener('click', function() {
            const path = this.getAttribute('data-path');
            if (path) {
                window.location.href = path;
            }
        });
    }
});