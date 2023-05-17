<template>
    <div class="w-full flex items-start justify-center lg:mt-14">
        <canvas id="verticalChartBar" class="w-full h-full"></canvas>
    </div>
</template>

<script>
export default {
    mounted() {

        Chart.defaults.font.size = 16;
        const ctx2 = document.getElementById('verticalChartBar');
        
            
            new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ["IT", "Admin", "HR", "Admin"],
                    datasets: [{
                        label: "Departments",
                        data: [50, 100, 75, 25],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgb(54, 162, 235)',
                            'rgb(255, 99, 132)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 205, 86)',
                        ],
                        borderWidth: 1,
                        barThickness: 50,
                    }],
                },
                options: {
                    responsive: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            }
                        },
                        y: {
                            grid: {
                                display: false,
                            },
                            ticks: {
                                display: false
                            }
                        },
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'left',
                            labels: {
                                boxWidth: 0,
                            }
                        },
                    },
                },
            });
    }
}
</script>


<style>
    .chartjs-render-monitor .chart-legend {
    transform: rotate(180deg);
}
</style>