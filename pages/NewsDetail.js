import { Navbar } from '../components/chart-section/Navbar.js';
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

    return `
        ${Navbar(window.location.pathname)}
        <div class="container">
            ${NewsHeader()}
            ${ArticleDetail(article)}
        </div>
    `;
}; 