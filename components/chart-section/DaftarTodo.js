const generateTimeBlocks = () => {
    const blocks = [
        { 
            name: "Pagi Hari", 
            tag: "03", 
            time: "04:00 - 12:00", 
            icon: "sun",
            tasks: [
                { time: "05:30", category: "Kasual", description: "Jalan-jalan di taman", completed: true },
                { time: "08:30", category: "Penting", description: "Makan bareng temen", completed: false },
                { time: "10:40", category: "Opsional", description: "Pergi ke Mall siang-siang", completed: false }
            ]
        },
        { 
            name: "Siang Hari", 
            tag: "05", 
            time: "13:00 - 15:00", 
            icon: "sun",
            tasks: [
                { time: "13:30", category: "Penting", description: "Meeting dengan client", completed: false },
                { time: "14:45", category: "Kasual", description: "Coffee break", completed: false }
            ]
        },
        { 
            name: "Sore Hari", 
            tag: "03", 
            time: "15:00 - 17:00", 
            icon: "sunset",
            tasks: [
                { time: "15:30", category: "Penting", description: "Olahraga rutin", completed: false },
                { time: "16:45", category: "Kasual", description: "Baca buku", completed: false }
            ]
        },
        { 
            name: "Malam Hari", 
            tag: "02", 
            time: "18:00 - 21:00", 
            icon: "moon",
            tasks: [
                { time: "19:00", category: "Penting", description: "Makan malam", completed: false },
                { time: "20:30", category: "Opsional", description: "Nonton film", completed: false }
            ]
        }
    ];
    
    const getIconSVG = (iconName) => {
        const icons = {
            sun: `<svg viewBox="0 0 24 24" width="20" height="20">
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" />
                  </svg>`,
            sunset: `<svg viewBox="0 0 24 24" width="20" height="20">
                      <path d="M17 18H7M5 21h14M12 3v9M4.22 10.22l1.42 1.42M19.78 10.22l-1.42 1.42M1 14h3M20 14h3M12 17a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5z" stroke="currentColor" stroke-width="2" />
                    </svg>`,
            moon: `<svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
                   </svg>`
        };
        return icons[iconName] || icons.sun;
    };
    
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
    
    return blocks.map((block, blockIndex) => `
        <div class="time-block-container">
            <div class="checkbox-container">
                <div class="checkbox"></div>
            </div>
            <div class="time-block-box">
                <div class="time-block-header" data-block-index="${blockIndex}">
                    <div class="time-icon">
                        ${getIconSVG(block.icon)}
                    </div>
                    <div class="time-name">
                        ${block.name}
                        <span class="time-tag">${block.tag}</span>
                    </div>
                    <div class="time-hours">${block.time}</div>
                    <div class="expand-icon" id="expand-icon-${blockIndex}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 30 15" fill="none">
                            <g clip-path="url(#clip0_143_196)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1114 12.6962L7.0402 5.625L8.8077 3.8575L14.9952 10.045L21.1827 3.8575L22.9502 5.625L15.8789 12.6962C15.6445 12.9306 15.3267 13.0622 14.9952 13.0622C14.6637 13.0622 14.3459 12.9306 14.1114 12.6962Z" fill="white"/>
                            </g>
                            <defs>
                             <clipPath id="clip0_143_196">
                                <rect width="15" height="30" fill="white" transform="matrix(0 1 -1 0 30 0)"/>
                             </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="time-block-tasks" id="tasks-${blockIndex}">
                    ${block.tasks.map(task => `
                        <div class="task-item">
                            <div class="task-time">${task.time}</div>
                            <div class="task-category ${getCategoryClass(task.category)}">${task.category}</div>
                            <div class="task-description">${task.description}</div>
                            <div class="task-status ${task.completed ? 'completed' : ''}">
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
                            <div class="task-options">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="white"/>
                                    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="white"/>
                                    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
};

export const DaftarTodo = () => {
    return `
        <div class="card daftar-todo">
            <div class="header-container">
                <div class="title-section">
                    <h2 class="card-title">Daftar To-do</h2>
                    <p class="card-subtitle">Kelola kegiatanmu tiap hari.</p>
                </div>
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Cari To-do">
                    <button class="search-button">
                    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
                    <path d="M24.9227 26L15.367 16.4455C14.604 17.0955 13.7266 17.5985 12.7347 17.9545C11.7428 18.3105 10.7459 18.4886 9.74382 18.4886C7.30023 18.4886 5.23203 17.6428 3.53922 15.9512C1.84641 14.2596 1 12.1922 1 9.74886C1 7.30557 1.84539 5.23711 3.53617 3.54349C5.22694 1.84987 7.29413 1.00204 9.73772 1C12.1813 0.997969 14.2505 1.84427 15.9454 3.53891C17.6402 5.23355 18.4876 7.30201 18.4876 9.74428C18.4876 10.8042 18.2999 11.83 17.9246 12.8218C17.5492 13.8136 17.0558 14.6619 16.4444 15.3668L26 24.9197L24.9227 26ZM9.74535 16.9612C11.7698 16.9612 13.4789 16.2645 14.8726 14.8709C16.2663 13.4774 16.9632 11.768 16.9632 9.74275C16.9632 7.71753 16.2663 6.00865 14.8726 4.61612C13.4789 3.22358 11.7698 2.52681 9.74535 2.52579C7.72089 2.52477 6.01129 3.22155 4.61655 4.61612C3.22182 6.01068 2.52495 7.71956 2.52597 9.74275C2.52699 11.7659 3.22385 13.4748 4.61655 14.8694C6.00926 16.264 7.71835 16.9607 9.74382 16.9597" fill="white"/>
                    <path d="M9.74535 16.9612C11.7698 16.9612 13.4789 16.2645 14.8726 14.8709C16.2663 13.4774 16.9632 11.768 16.9632 9.74275C16.9632 7.71753 16.2663 6.00865 14.8726 4.61612C13.4789 3.22358 11.7698 2.52681 9.74535 2.52579C7.72089 2.52477 6.01129 3.22155 4.61655 4.61612C3.22182 6.01068 2.52495 7.71956 2.52597 9.74275C2.52699 11.7659 3.22385 13.4748 4.61655 14.8694C6.00926 16.264 7.71835 16.9607 9.74382 16.9597M24.9227 26L15.367 16.4455C14.604 17.0955 13.7266 17.5985 12.7347 17.9545C11.7428 18.3105 10.7459 18.4886 9.74382 18.4886C7.30023 18.4886 5.23203 17.6428 3.53922 15.9512C1.84641 14.2596 1 12.1921 1 9.74886C1 7.30557 1.84539 5.23711 3.53617 3.54349C5.22694 1.84987 7.29413 1.00204 9.73772 1C12.1813 0.997969 14.2505 1.84427 15.9454 3.53891C17.6402 5.23355 18.4876 7.30201 18.4876 9.74428C18.4876 10.8042 18.2999 11.83 17.9246 12.8218C17.5492 13.8136 17.0558 14.6619 16.4444 15.3668L26 24.9197L24.9227 26Z" stroke="#07101D" stroke-width="2"/>
                    </svg>
                    </button>
                </div>
            </div>
            
            <div class="navigation-container">
                <div class="tabs">
                    <div class="tab active">Hari ini</div>
                    <div class="tab">Besok</div>
                </div>
                <div class="action-buttons">
                    <div class="btn btn-green">
                    <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23 23" fill="none">
                    <path d="M22 11.5H11.5M11.5 11.5H1M11.5 11.5V1M11.5 11.5V22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>

                    <div class="btn btn-filter">
                        <svg class="filter-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 3H5C3.586 3 2.879 3 2.44 3.412C2.001 3.824 2 4.488 2 5.815V6.505C2 7.542 2 8.061 2.26 8.491C2.52 8.921 2.993 9.189 3.942 9.723L6.855 11.363C7.491 11.721 7.81 11.9 8.038 12.098C8.512 12.509 8.804 12.993 8.936 13.588C9 13.872 9 14.206 9 14.873V17.543C9 18.452 9 18.907 9.252 19.261C9.504 19.616 9.952 19.791 10.846 20.141C12.725 20.875 13.664 21.242 14.332 20.824C15 20.406 15 19.452 15 17.542V14.872C15 14.206 15 13.872 15.064 13.587C15.1896 13.0042 15.5059 12.4798 15.963 12.097C16.19 11.9 16.509 11.721 17.145 11.362L20.058 9.722C21.006 9.189 21.481 8.922 21.74 8.492C22 8.062 22 7.542 22 6.504V5.814C22 4.488 22 3.824 21.56 3.412C21.122 3 20.415 3 19 3Z" stroke="#07101D" stroke-width="1.5"/>
                        </svg>
                        <span>Filter</span>
                    </div>
                </div>
            </div>
            
            <div class="time-blocks">
                ${generateTimeBlocks()}
            </div>
        </div>
    `;
};