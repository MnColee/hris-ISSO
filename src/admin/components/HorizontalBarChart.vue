<template>
    <div class="w-full flex items-start justify-center lg:mt-14">
        <canvas id="horizontalChartBar" class="w-full h-full"></canvas>
    </div>
</template>

<script>
export default {
    mounted() {

        Chart.defaults.font.size = 12;
        const ctx3 = document.getElementById('horizontalChartBar');
        
            
            new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ["Interview", "Skill Test", "Final Interview", "On Board"],
                    datasets: [{
                        label: ["Applicants"],
                        data: [13, 13, 13, 13],
                        backgroundColor: [
                            'FF0000',
                            'FFFF00',
                            'ffa500',
                            '00FF00',
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 205, 86)',
                            'rgb(255, 159, 64)',
                            'rgb(75, 192, 192)',
                        ],
                        borderWidth: 1,
                        barThickness: 25,
                    }],
                },
                options: {
                    indexAxis: 'y',
                    responsive: false,
                    data: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                display: false
                            },
                            stacked: true
                        },
                        y: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                display: false
                            },
                            stacked: true
                        },
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                generateLabels: (chart) => {
                                    return chart.data.labels.map(
                                        (label, index)=> ({
                                            text: label,
                                            strokeStyle: chart.data.datasets[0].borderColor[index],
                                            fillStyle: chart.data.datasets[0].borderColor[index]
                                        })
                                    )
                                }
                            }
                        },
                        datalabels: {
                            formatter: (value, ctx) => {
                                return `${value} Applicants`;
                            },
                            color: '#fff',
                        },
                    },
                },
                plugins: [ChartDataLabels]
            });
            
    }
}
</script>


<style>
    .chartjs-render-monitor .chart-legend {
    transform: rotate(180deg);
}
</style>