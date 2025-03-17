import { Navbar } from '../components/navbar/Navbar.js';
import { NewsHeader } from '../components/news-section/NewsHeader.js';
import { ArticleDetail } from '../components/detail-section/ArticleDetail.js';

export const NewsDetail = (articleId) => {
    // Dummy article data - in real app, this would be fetched based on articleId
    const article = {
        id: articleId,
        title: "Pizza enak enak enak enak enak",
        author: "Mass.muhh_",
        time: "10 jam lalu",
        content: `
            <h2>Sejarah Pizza: Dari Roti Pipih Kuno hingga Makanan Ikonik Dunia</h2>
            <p>Pizza adalah salah satu makanan paling populer di dunia, tetapi asal-usulnya bisa ditelusuri hingga ribuan tahun yang lalu. Dari roti pipih yang dibuat oleh peradaban kuno hingga hidangan khas Italia yang mendunia, pizza telah mengalami banyak evolusi sepanjang sejarah.</p>
            
            <h3>Asal-Usul Pizza di Peradaban Kuno</h3>
            <p>Konsep dasar pizza—roti pipih dengan berbagai topping—telah ada sejak zaman kuno. Beberapa peradaban awal yang berkontribusi pada evolusi pizza meliputi:</p>
            
            <h4>1. Mesopotamia dan Mesir Kuno</h4>
            <p>Bangsa Mesopotamia dan Mesir Kuno diketahui telah membuat roti pipih tanpa ragi yang dipanggang di atas batu panas. Roti ini sering kali diberi bumbu atau tambahan sederhana seperti minyak zaitun dan rempah-rempah.</p>
            
            <h4>2. Yunani dan Romawi Kuno</h4>
            <p>Bangsa Yunani memiliki hidangan yang disebut plakous, yaitu roti pipih yang diberi bawang, keju, dan rempah-rempah. Sementara itu, bangsa Romawi mengembangkan hidangan serupa yang disebut picea, yang sering disajikan dengan madu, keju, dan daun salam. Kata "pizza" diduga berasal dari picea.</p>
        `
    };

    // Add event listener for responsive behavior after page load
    setTimeout(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            document.body.classList.toggle('mobile-view', isMobile);
            
            // Adjust scrollable containers height based on viewport
            const articleText = document.querySelector('.article-text');
            const commentsContainer = document.querySelector('.comments-container');
            
            if (articleText && commentsContainer) {
                const viewportHeight = window.innerHeight;
                if (isMobile) {
                    articleText.style.maxHeight = `${viewportHeight * 0.4}px`;
                    commentsContainer.style.maxHeight = `${viewportHeight * 0.35}px`;
                } else {
                    articleText.style.maxHeight = `${viewportHeight * 0.6}px`;
                    commentsContainer.style.maxHeight = `${viewportHeight * 0.5}px`;
                }
            }
        };
        
        // Initial call and add resize listener
        handleResize();
        window.addEventListener('resize', handleResize);
        
        // Add smooth scrolling for back button
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.history.back();
            });
        }
    }, 100);

    return `
        ${Navbar(window.location.pathname)}
        <div class="container responsive-container">
            ${NewsHeader()}
            ${ArticleDetail(article)}
        </div>
    `;
}; 