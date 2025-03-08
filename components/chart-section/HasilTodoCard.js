export const HasilTodoCard = () => {
    return `
        <div class="hasil-todo-card">
            <h3>Hasil To-do</h3>
            <p>Pantau capaian tugas.</p>
            <div class="speedometer-container">
                <div class="speedometer">
                    <div class="speedometer-scale"></div>
                    <div class="speedometer-needle"></div>
                    <div class="speedometer-center"></div>
                </div>
                <div class="speedometer-results">
                    <div class="result-column">
                        <span class="result-label selesai">Selesai</span>
                        <span class="result-number">13</span>
                    </div>
                    <div class="result-divider"></div>
                    <div class="result-column">
                        <span class="result-label terlawat">Terlewat</span>
                        <span class="result-number">4</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};