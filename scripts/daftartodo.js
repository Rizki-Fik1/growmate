// DaftarTodo dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DaftarTodo script loaded');
    
    // Wait a bit for the components to be fully rendered
    setTimeout(function() {
        initDaftarTodoDropdowns();
    }, 500);
});

// Function to show toast notification
function showToastNotification(message, type = 'success') {
    // Create toast container
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    
    // Add icon based on type
    const icon = document.createElement('div');
    if (type === 'success') {
        icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
        `;
    } else if (type === 'warning') {
        icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
        `;
    }
    
    // Add message
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    
    // Assemble toast
    toast.appendChild(icon);
    toast.appendChild(messageElement);
    
    // Add to document
    document.body.appendChild(toast);
    
    // Add animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Function to show task details
async function showTaskDetail(taskData) {
    console.log('Showing task detail for:', taskData);
    
    try {
        // Dynamically import the DaftarDetail component
        const module = await import('../components/chart-section/DaftarDetail.js');
        const DaftarDetail = module.DaftarDetail;
        
        // Get only the DaftarTodo component
        const daftarTodoCard = document.querySelector('.daftar-todo');
        if (!daftarTodoCard) {
            console.error('DaftarTodo card not found');
            return;
        }
        
        // Store the original content to restore later
        const originalContent = daftarTodoCard.innerHTML;
        
        // Replace the content with the detail view
        daftarTodoCard.innerHTML = DaftarDetail(taskData);
        daftarTodoCard.classList.add('showing-detail');
        
        // Add event listener to back button
        const backButton = daftarTodoCard.querySelector('.back-button');
        if (backButton) {
            backButton.addEventListener('click', function() {
                // Restore the original content
                daftarTodoCard.innerHTML = originalContent;
                daftarTodoCard.classList.remove('showing-detail');
                
                // Re-initialize the dropdowns
                initDaftarTodoDropdowns();
            });
        }
        
        // Add event listeners to action buttons
        const editButton = daftarTodoCard.querySelector('.edit-button');
        if (editButton) {
            editButton.addEventListener('click', function() {
                // Implement edit functionality directly without alert
                console.log('Edit functionality will be implemented here');
            });
        }
        
        const deleteButton = daftarTodoCard.querySelector('.delete-button');
        if (deleteButton) {
            deleteButton.addEventListener('click', function() {
                // Restore the original content
                daftarTodoCard.innerHTML = originalContent;
                daftarTodoCard.classList.remove('showing-detail');
                
                // Re-initialize the dropdowns
                initDaftarTodoDropdowns();
                
                // Find and remove the task from the list
                setTimeout(() => {
                    const taskItems = document.querySelectorAll('.task-item');
                    taskItems.forEach(item => {
                        const itemTime = item.querySelector('.task-time')?.textContent;
                        const itemDesc = item.querySelector('.task-description')?.textContent;
                        
                        if (itemTime === taskData.time && itemDesc === taskData.title) {
                            item.style.opacity = '0';
                            item.style.transform = 'translateX(20px)';
                            setTimeout(() => {
                                item.remove();
                                showToastNotification('Todo Telah Terhapus');
                            }, 300);
                        }
                    });
                }, 100);
            });
        }
    } catch (error) {
        console.error('Error showing task detail:', error);
    }
}

function initDaftarTodoDropdowns() {
    console.log('Initializing DaftarTodo dropdowns');
    
    // Find all time block headers
    const timeBlockHeaders = document.querySelectorAll('.time-block-header');
    console.log('Found time block headers:', timeBlockHeaders.length);
    
    if (timeBlockHeaders.length === 0) {
        console.warn('No time block headers found. Will try again in 1 second.');
        setTimeout(initDaftarTodoDropdowns, 1000);
        return;
    }
    
    // Add click event listeners to time block headers
    timeBlockHeaders.forEach((header, index) => {
        console.log('Adding click listener to header:', index);
        
        // Remove any existing click listeners
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
        
        // Add new click listener
        newHeader.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const blockIndex = this.getAttribute('data-block-index') || index;
            console.log('Header clicked, block index:', blockIndex);
            
            const tasksElement = document.getElementById('tasks-' + blockIndex);
            const expandIcon = document.getElementById('expand-icon-' + blockIndex);
            
            if (!tasksElement) {
                console.error('Tasks element not found for index:', blockIndex);
                return;
            }
            
            console.log('Current display style:', tasksElement.style.display);
            
            if (tasksElement.style.display === 'none' || !tasksElement.style.display || tasksElement.style.display === '') {
                tasksElement.style.display = 'block';
                if (expandIcon) expandIcon.classList.add('expanded');
                console.log('Expanded time block:', blockIndex);
            } else {
                tasksElement.style.display = 'none';
                if (expandIcon) expandIcon.classList.remove('expanded');
                console.log('Collapsed time block:', blockIndex);
            }
        });
    });
    
    // Add click event listeners to task status circles
    const taskStatusCircles = document.querySelectorAll('.task-status');
    taskStatusCircles.forEach(statusCircle => {
        // Remove any existing click listeners
        const newStatusCircle = statusCircle.cloneNode(true);
        statusCircle.parentNode.replaceChild(newStatusCircle, statusCircle);
        
        // Add new click listener
        newStatusCircle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent click events
            this.classList.toggle('completed');
            
            // Update the SVG based on completion status
            if (this.classList.contains('completed')) {
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#00FF95" stroke="#00FF95" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="#030C19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;
            } else {
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                    </svg>
                `;
            }
        });
    });
    
    // Close any open task option menus when clicking elsewhere
    document.addEventListener('click', function() {
        const openMenus = document.querySelectorAll('.task-options-menu');
        openMenus.forEach(menu => {
            menu.remove();
        });
    });
    
    // Add click event listeners to task options
    const taskOptions = document.querySelectorAll('.task-options');
    taskOptions.forEach((options, taskIndex) => {
        // Remove any existing click listeners
        const newOptions = options.cloneNode(true);
        options.parentNode.replaceChild(newOptions, options);
        
        // Add new click listener
        newOptions.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent click events
            
            // Close any open menus first
            const openMenus = document.querySelectorAll('.task-options-menu');
            openMenus.forEach(menu => {
                menu.remove();
            });
            
            // Create options menu
            const optionsMenu = document.createElement('div');
            optionsMenu.className = 'task-options-menu';
            optionsMenu.innerHTML = `
                <div class="task-option-item lihat-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Lihat Detail</span>
                </div>
                <div class="task-option-item hapus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    <span>Hapus</span>
                </div>
            `;
            
            // Position the menu
            const taskItem = this.closest('.task-item');
            taskItem.style.position = 'relative';
            taskItem.appendChild(optionsMenu);
            
            // Get task data
            const taskTime = taskItem.querySelector('.task-time').textContent;
            const taskCategory = taskItem.querySelector('.task-category').textContent;
            const taskDescription = taskItem.querySelector('.task-description').textContent;
            const isCompleted = taskItem.querySelector('.task-status').classList.contains('completed');
            
            // Create task data object
            const taskData = {
                time: taskTime,
                category: taskCategory,
                title: taskDescription,
                description: `${taskDescription}\n\nPagi hari aku bersama teman-teman berencana untuk jalan-jalan di taman dekat rumah. Sudah lama momen ini tidak terjadi, semenjak aku menginjak kelas 1 SMA.\n\nJadi, aku harap dengan jadwal ini, aku bisa mengulang kejadian yang sama saat aku kecil dulu. Sungguh nostalgia sekali rasanya.`,
                completed: isCompleted,
                exp: 30
            };
            
            // Add event listeners to menu items
            const lihatDetailBtn = optionsMenu.querySelector('.lihat-detail');
            lihatDetailBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('Lihat Detail clicked for task:', taskIndex);
                optionsMenu.remove();
                showTaskDetail(taskData);
            });
            
            const hapusBtn = optionsMenu.querySelector('.hapus');
            hapusBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('Hapus clicked for task:', taskIndex);
                
                taskItem.style.opacity = '0';
                taskItem.style.transform = 'translateX(20px)';
                setTimeout(() => {
                    taskItem.remove();
                    showToastNotification('Todo Telah Terhapus');
                }, 300);
                optionsMenu.remove();
            });
        });
    });
    
    // Ensure all task blocks are initially hidden
    const taskBlocks = document.querySelectorAll('.time-block-tasks');
    taskBlocks.forEach(block => {
        block.style.display = 'none';
    });
    
    console.log('DaftarTodo dropdowns initialized');
} 