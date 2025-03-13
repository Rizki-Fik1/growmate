export const SearchBar = () => {
    return `
        <div class="search-bar">
            <div class="search-input-container" id="search-input-container">
                <div class="search-input">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Cari topik yang ingin kamu cari">
                </div>
            </div>
        </div>
    `;
};

// Add event listeners after the component is rendered
export const initSearchBarEvents = () => {
    const actionButtons = document.querySelectorAll('.search-actions a');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            actionButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
        });
    });
};