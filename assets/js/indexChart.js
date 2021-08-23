/**
 * Productivity Bar Chart
 */
let ctx = document.getElementById("productivityChart").getContext("2d")
new Chart (ctx, {
    type: 'bar',
    data: {
        labels: ['Phase01', 'Phase02', 'Phase03', 'FinalPhase'],
        datasets: [{
            label: 'Productivity',
            data: [2, 7, 13, 18],
            backgroundColor: [
                'rgb(220,20,60)',
                'rgb(0, 128, 128)',
                'rgb(0, 0, 128)',
                'rgb(0, 128, 0)',

            ]
        }],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        },
        legend: {
            display: false
        }
    }
});

/**
 * Budget Line Chart
 */
let ctx2 = document.getElementById("budgetChart").getContext("2d")

let competitorLineChartData = {
    labels: ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000", "11000", "12000", "13000", "14000", "15000", "16000", "17000", "18000", "19000", "20000"],
    datasets: [{
        label: "Days to get the money",
        data: [0, 0, 0, 0, 1, 1, 3, 3, 4, 4, 5, 8, 10, 11, 12, 15, 17, 20, 22, 25],
        lineTension: 0,
        fill: false,
        borderColor: '#333333',
        backgroundColor: 'transparent',
        pointBorderColor: '#333333',
        pointBackgroundColor: '#333333',
        pointRadius: 4,
        pointHoverRadius: 5,
        pointHitRadius: 7,
        pointBorderWidth: 2,
        pointStyle: 'round'
    }]
};

let chartOptions = {
    legend: {
        display: false
    },
    animationEnabled: true
};
new Chart(ctx2, {
    type: 'line',
    data: competitorLineChartData,
    options: chartOptions
});
