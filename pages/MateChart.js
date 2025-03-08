import { PinTodoCard } from '../components/chart-section/PinTodoCard.js';
import { HasilTodoCard } from '../components/chart-section/HasilTodoCard.js';
import { DaftarTodoList } from '../components/chart-section/DaftarTodo.js';
import { ChartTodoList } from '../components/chart-section/ChartTodo.js';

export const MateChart = () => {
    return `
        <div class="mate-chart-container">
            <div class="mate-chart-header">
                <h2 class="mate-chart-title">Mate Chart</h2>
            </div>
            
            <div class="mate-chart-content">
                <!-- Kolom kiri -->
                <div class="mate-chart-left-column">
    
                        ${PinTodoCard()}
 
                        ${HasilTodoCard()}

                        ${ChartTodoList()}
                    </div>
                </div>
                
                <!-- Kolom kanan -->
                <div class="mate-chart-right-column">
                    ${DaftarTodoList()}
                </div>
            </div>
        </div>
    `;
};