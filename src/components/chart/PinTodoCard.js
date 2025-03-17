export const PinTodo = () => {
    return `
        <div class="pin-todo-container">
            <div class="time-range">
                <div class="time-select-box">
                    <span>Pilih rentang waktu</span>
                </div>
                <div class="dropdown-icon-box">
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
            <div class="card pin-todo">
                <h2 class="card-title">Pin To-do</h2>
                <p class="card-subtitle">Ini prioritas tugasmu hari ini.</p>
                
                <div class="todo-list">
                    <div class="todo-item">
                        <div class="todo-line-1"></div>
                        <div class="todo-content">
                            <h3>Belajar React</h3>
                            <p>Melanjutkan belajar...</p>
                        </div>
                        <div class="todo-actions">⋮</div>
                    </div>
                    
                    <div class="todo-item">
                        <div class="todo-line-2"></div>
                        <div class="todo-content">
                            <h3>Brainstorming</h3>
                            <p>Diskusi bersama tem...</p>
                        </div>
                        <div class="todo-actions">⋮</div>
                    </div>
                </div>
            </div>
        </div>
    `;
};
