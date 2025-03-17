import { PinTodo } from '../components/chart-section/PinTodoCard.js';
import { HasilTodo } from '../components/chart-section/HasilTodoCard.js';
import { DaftarTodo } from '../components/chart-section/DaftarTodo.js';
import { Chart } from '../components/chart-section/ChartTodo.js';
import { Navbar } from '../components/navbar/Navbar.js';

export const MateChart = () => {
    const currentPath = window.location.pathname;
    return `
        ${Navbar(currentPath)}
        <div class="container">
            <!-- Header -->
            <header>
                <div class="logo">Mate <span>Chart</span></div>
            </header>
            
            <!-- Main Layout -->
            <div class="main-layout">
                ${PinTodo()}
                ${HasilTodo()}
                ${DaftarTodo()}
                ${Chart()}
            </div>
        </div>

    `;
};