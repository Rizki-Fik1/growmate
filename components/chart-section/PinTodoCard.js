export const PinTodoCard = () => {
    return `
        <div class="pin-todo-card">
            <h3>Pin To-do</h3>
            <p>Ini prioritas tugasmu hari ini.</p>
            <div class="pin-todo-items">
                <div class="pin-todo-item">
                    <div class="pin-todo-color-indicator react"></div>
                    <div class="pin-todo-content">
                        <h4>Belajar React</h4>
                        <p>Melanjutkan belajar components</p>
                    </div>
                    <button class="pin-todo-more-btn">⋮</button>
                </div>
                <div class="pin-todo-item">
                    <div class="pin-todo-color-indicator brainstorming"></div>
                    <div class="pin-todo-content">
                        <h4>Brainstorming</h4>
                        <p>Diskusi bersama team</p>
                    </div>
                    <button class="pin-todo-more-btn">⋮</button>
                </div>
            </div>
        </div>
    `;
};