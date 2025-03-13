export const DaftarDetail = (taskData) => {
    // Default task data if none is provided
    const task = taskData || {
        time: "05:30",
        category: "Kasual",
        title: "Jalan-jalan di taman",
        description: "Pagi hari aku bersama teman-teman berencana untuk jalan-jalan di taman dekat rumah. Sudah lama momen ini tidak terjadi, semenjak aku menginjak kelas 1 SMA.\n\nJadi, aku harap dengan jadwal ini, aku bisa mengulang kejadian yang sama saat aku kecil dulu. Sungguh nostalgia sekali rasanya.",
        completed: true,
        exp: 30
    };

    // Get the category class
    const getCategoryClass = (category) => {
        switch(category.toLowerCase()) {
            case 'penting':
                return 'category-penting';
            case 'kasual':
                return 'category-kasual';
            case 'opsional':
                return 'category-opsional';
            default:
                return 'category-default';
        }
    };

    // Format the description with line breaks
    const formattedDescription = task.description.replace(/\n/g, '<br>');

    return `
        <div class="daftar-detail">
            <div class="detail-header">
                <button class="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <h2 class="detail-title">Detail Tugas</h2>
            </div>
            
            <div class="detail-content">
                <div class="detail-time-header">
                    <div class="detail-time">${task.time}</div>
                    <div class="detail-category ${getCategoryClass(task.category)}">${task.category}</div>
                    <div class="detail-status ${task.completed ? 'completed' : ''}">
                        ${task.completed ? 
                            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" fill="#00FF95" stroke="#00FF95" stroke-width="2"/>
                                <path d="M8 12L11 15L16 9" stroke="#030C19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>` : 
                            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                            </svg>`
                        }
                    </div>
                </div>
                
                <h3 class="detail-task-title">${task.title}</h3>
                
                <div class="detail-description">
                    ${formattedDescription}
                </div>
                
                <div class="detail-exp">
                    <span class="exp-label">+ ${task.exp} Exp</span>
                </div>
            </div>
            
            <div class="detail-actions">
                <button class="action-button edit-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    <span>Edit</span>
                </button>
                <button class="action-button delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    <span>Hapus</span>
                </button>
            </div>
        </div>
    `;
}; 