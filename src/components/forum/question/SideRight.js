export const SideRight = () => {
    // Fungsi untuk menghandle filter dropdown
    const setupFilterDropdown = () => {
        const filterButton = document.querySelector('.filter-time-button');
        const filterDropdown = document.querySelector('.filter-time-dropdown');
        
        if (filterButton && filterDropdown) {
            // Toggle dropdown when button is clicked
            filterButton.addEventListener('click', (e) => {
                e.stopPropagation();
                filterDropdown.classList.toggle('show');
                filterButton.classList.toggle('active');
            });
            
            // Handle filter option selection
            const filterOptions = document.querySelectorAll('.filter-time-option');
            filterOptions.forEach(option => {
                option.addEventListener('click', () => {
                    // Update button text with selected option
                    const selectedText = option.textContent;
                    filterButton.querySelector('span').textContent = selectedText;
                    
                    // Hide dropdown
                    filterDropdown.classList.remove('show');
                    filterButton.classList.remove('active');
                });
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                filterDropdown.classList.remove('show');
                filterButton.classList.remove('active');
            });
        }
    };
    
    // Call setup function after DOM is loaded
    setTimeout(() => {
        setupFilterDropdown();
    }, 100);
    
    return `
        <div class="filter-container">
            <div class="filter-time">
                <button class="filter-time-button">
                    <span>Pilih rentang waktu</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="filter-time-dropdown">
                    <div class="filter-time-option">1 Hari yang lalu</div>
                    <div class="filter-time-option">7 Hari yang lalu</div>
                    <div class="filter-time-option">1 Minggu lalu</div>
                </div>
            </div>
        </div>
    `;
};