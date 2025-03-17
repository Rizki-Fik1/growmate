// Import components
import { HomeHeader } from "../components/home-2-section/HomeHeader.js";
import { GreetingCard } from "../components/home-2-section/GreetingCard.js";
import { ProgressChartCard } from "../components/home-2-section/ProgressChartCard.js";
import { MateAICard } from "../components/home-2-section/MateAICard.js";
import { TodoListCard } from "../components/home-2-section/TodoListCard.js";
import { LeaderboardCard } from "../components/home-2-section/LeaderboardCard.js";
import { Navbar } from "../components/chart-section/Navbar.js";

// Initialize the home page
const initHomePage = () => {
    const currentPath = window.location.pathname;
    
    // Render the navbar
    document.getElementById('navbar-container').innerHTML = Navbar(currentPath);
    
    // Render the header
    document.getElementById('header-container').innerHTML = HomeHeader();
    
    // Render the main content
    const mainContent = document.getElementById('main-content');
    
    // First row: Greeting Card and Progress Chart
    const firstRow = document.createElement('div');
    firstRow.className = 'row-container';
    
    const greetingCardContainer = document.createElement('div');
    greetingCardContainer.className = 'card-container';
    greetingCardContainer.innerHTML = GreetingCard();
    
    const progressChartContainer = document.createElement('div');
    progressChartContainer.className = 'card-container';
    progressChartContainer.innerHTML = ProgressChartCard();
    
    firstRow.appendChild(greetingCardContainer);
    firstRow.appendChild(progressChartContainer);
    
    // Second row: Mate AI Card, Todo List Card, and Leaderboard Card
    const secondRow = document.createElement('div');
    secondRow.className = 'row-container';
    
    const mateAICardContainer = document.createElement('div');
    mateAICardContainer.className = 'card-container';
    mateAICardContainer.innerHTML = MateAICard();
    
    const todoListCardContainer = document.createElement('div');
    todoListCardContainer.className = 'card-container';
    todoListCardContainer.innerHTML = TodoListCard();
    
    const leaderboardCardContainer = document.createElement('div');
    leaderboardCardContainer.className = 'card-container';
    leaderboardCardContainer.innerHTML = LeaderboardCard();
    
    secondRow.appendChild(mateAICardContainer);
    secondRow.appendChild(todoListCardContainer);
    secondRow.appendChild(leaderboardCardContainer);
    
    // Append rows to main content
    mainContent.appendChild(firstRow);
    mainContent.appendChild(secondRow);
    
    // Initialize the progress chart
    setTimeout(() => {
        initProgressChart();
    }, 100);
    
    // Initialize tab functionality for leaderboard
    initLeaderboardTabs();
};

// Initialize the progress chart using Chart.js
const initProgressChart = () => {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;
    
    const chartContext = ctx.getContext('2d');
    
    // Sample data for the chart
    const data = {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'],
        datasets: [
            {
                label: 'Minggu Ini',
                data: [2, 5, 3, 7, 4, 8, 9],
                borderColor: '#00A67E',
                backgroundColor: 'rgba(0, 166, 126, 0.2)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Minggu Lalu',
                data: [1, 3, 6, 4, 2, 5, 7],
                borderColor: '#64C9DF',
                backgroundColor: 'rgba(100, 201, 223, 0.2)',
                tension: 0.4,
                fill: true
            }
        ]
    };
    
    // Chart configuration
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false,
                    min: 0,
                    max: 10
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    };
    
    // Create the chart
    new Chart(chartContext, config);
};

// Initialize tab functionality for leaderboard
const initLeaderboardTabs = () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.leaderboard-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show the selected tab content
            tabContents.forEach(content => {
                if (content.id === `${tabName}-tab`) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });
};

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initHomePage);
