export const TodoListCard = () => {
    return `
        <div class="todo-list-card">
            <div class="todo-header">
                <div class="todo-header-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <h3 class="todo-title">To-do List</h3>
                <div class="todo-header-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
            
            <div class="day-selector">
                <h4 class="current-day">Hari ini</h4>
                <div class="day-tabs">
                    <button class="day-tab" data-day="sen">Sen</button>
                    <button class="day-tab" data-day="sel">Sel</button>
                    <button class="day-tab active" data-day="rab">Rab</button>
                    <button class="day-tab" data-day="kam">Kam</button>
                    <button class="day-tab" data-day="jum">Jum</button>
                    <button class="day-tab" data-day="sab">Sab</button>
                </div>
            </div>
            
            <div class="todo-list">
                <div class="todo-item">
                    <div class="todo-content">
                        <h4 class="todo-task-title">Membaca Novel</h4>
                        <p class="todo-task-desc">Rencana membaca sebuah novel.</p>
                    </div>
                    <div class="todo-time">15:30</div>
                    <div class="todo-status completed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12L10 17L19 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <div class="todo-item">
                    <div class="todo-content">
                        <h4 class="todo-task-title">Membaca Novel</h4>
                        <p class="todo-task-desc">Rencana membaca sebuah novel.</p>
                    </div>
                    <div class="todo-time">15:30</div>
                    <div class="todo-status">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
                
                <div class="todo-item">
                    <div class="todo-content">
                        <h4 class="todo-task-title">Membaca Novel</h4>
                        <p class="todo-task-desc">Rencana membaca sebuah novel.</p>
                    </div>
                    <div class="todo-time">15:30</div>
                    <div class="todo-status">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    `;
}; 