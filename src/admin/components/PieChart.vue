<template>
    <div class="w-full flex items-start justify-center">
        <canvas id="pieChart" class="w-full h-full"></canvas>
    </div>
</template>

<script>
export default {
    mounted() {

        Chart.defaults.font.size = 16;
        const ctx = document.getElementById('pieChart');
            
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: [
                        'Trainee',
                        'On-Call',
                        'Project-Based',
                        'Regular'
                    ],
                    datasets: [{
                        // label: 'My First Dataset',
                        data: [25, 25, 25, 25],
                        backgroundColor: [
                            'rgb(152,251,152)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 205, 86)',
                        ],
                        hoverOffset: 4,
                    }]
                },
                options: {
                    layout: {
                        padding: {
                            bottom: 25
                        },
                    },
                    plugins: {
                        tooltip: {
                            enabled: true,
                            callbacks: {
                                footer: (ttItem) => {
                                    let sum = 0;
                                    let dataArr = ttItem[0].dataset.data;
                                    dataArr.map(data => {
                                        sum += Number(data);
                                    });

                                    let percentage = (ttItem[0].parsed * 100 / sum).toFixed(2) + '%';
                                    return `${percentage} of Data`;
                                }
                            }
                        },
                        datalabels: {
                            formatter: (value, ctx) => {
                                let sum = 0;
                                let dataArr = ctx.chart.data.datasets[0].data;
                                dataArr.map(data => {
                                    sum += Number(data);
                                });

                                let percentage = (value * 100 / sum).toFixed(2) + '%';
                                return percentage;
                            },
                            color: '#fff',
                        },
                        legend: {
                            display: true,
                            position: 'right',
                        },
                    }
                },
                plugins: [ChartDataLabels]
            });
    }
}
</script>


<style>
    
</style>