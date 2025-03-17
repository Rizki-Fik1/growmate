// Time Range Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Time Range Dropdown script loaded');
    
    // Wait a bit for the components to be fully rendered
    setTimeout(function() {
        initTimeRangeDropdowns();
    }, 500);
});

function initTimeRangeDropdowns() {
    console.log('Initializing time range dropdowns');
    
    // Initialize HasilTodo dropdown
    setupDropdown('.time-select-box-2', '.dropdown-icon-box-2');
    
    // Initialize PinTodo dropdown
    setupDropdown('.time-select-box', '.dropdown-icon-box');
}

function setupDropdown(selectBoxSelector, dropdownIconSelector) {
    const selectBoxes = document.querySelectorAll(selectBoxSelector);
    const dropdownIcons = document.querySelectorAll(dropdownIconSelector);
    
    if (selectBoxes.length === 0 || dropdownIcons.length === 0) {
        console.warn(`No elements found for ${selectBoxSelector} or ${dropdownIconSelector}. Will try again in 1 second.`);
        setTimeout(() => setupDropdown(selectBoxSelector, dropdownIconSelector), 1000);
        return;
    }
    
    selectBoxes.forEach((selectBox, index) => {
        const dropdownIcon = dropdownIcons[index];
        if (!dropdownIcon) return;
        
        // Store original text
        const originalText = selectBox.querySelector('span').textContent;
        
        // Create click handler for both the select box and dropdown icon
        const clickHandler = function(e) {
            e.stopPropagation();
            
            // Close any open dropdowns first
            const openDropdowns = document.querySelectorAll('.time-range-dropdown');
            openDropdowns.forEach(dropdown => dropdown.remove());
            
            // Create dropdown menu
            const dropdown = document.createElement('div');
            dropdown.className = 'time-range-dropdown';
            dropdown.innerHTML = `
                <div class="time-range-option" data-value="1-day">1 hari</div>
                <div class="time-range-option" data-value="1-week">1 minggu</div>
            `;
            
            // Position the dropdown
            const timeRange = selectBox.closest('.time-range');
            timeRange.style.position = 'relative';
            timeRange.appendChild(dropdown);
            
            // Add event listeners to options
            const options = dropdown.querySelectorAll('.time-range-option');
            options.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const value = this.getAttribute('data-value');
                    const text = this.textContent;
                    
                    // Update the select box text
                    selectBox.querySelector('span').textContent = text;
                    
                    // Close the dropdown
                    dropdown.remove();
                    
                    // Rotate the dropdown icon back
                    if (dropdownIcon.querySelector('svg')) {
                        dropdownIcon.querySelector('svg').style.transform = 'rotate(0deg)';
                    }
                    
                    console.log(`Selected time range: ${text} (${value})`);
                });
            });
            
            // Rotate the dropdown icon
            if (dropdownIcon.querySelector('svg')) {
                dropdownIcon.querySelector('svg').style.transform = 'rotate(180deg)';
            }
        };
        
        // Add click event listeners
        selectBox.addEventListener('click', clickHandler);
        dropdownIcon.addEventListener('click', clickHandler);
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
        const openDropdowns = document.querySelectorAll('.time-range-dropdown');
        openDropdowns.forEach(dropdown => {
            dropdown.remove();
        });
        
        // Reset all dropdown icons
        document.querySelectorAll(`${dropdownIconSelector} svg`).forEach(svg => {
            svg.style.transform = 'rotate(0deg)';
        });
    });
} 