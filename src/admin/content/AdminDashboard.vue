<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 lg:py-4 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl xl:text-3xl">Dashboard</p>
                </div>

                <div class="grid grid-cols-1 w-full sm:grid-cols-2 lg:gap-6 xl:grid-cols-2">
                    <div class="chart-box w-full flex flex-col items-center justify-center p-4 overflow-auto">
                        <p class="font-bold text-lg sm:text-lg lg:text-xl">Employee Status</p>
                        <VerticalBarChart />
                    </div>
                    <div class="chart-box w-full flex flex-col items-center justify-center p-4 overflow-auto">
                        <p class="font-bold text-lg sm:text-lg lg:text-xl">Job Application</p>
                        <HorizontalBarChart />
                    </div>
                    <div class="chart-box w-full flex flex-col items-center justify-center p-4 overflow-auto">
                        <p class="font-bold text-lg sm:text-lg lg:text-xl">Employee Status</p>
                        <PieChart />
                    </div>
                    <div class="chart-box w-full flex flex-col items-center justify-start p-4 overflow-auto">
                        <p class="font-bold text-lg sm:text-lg lg:text-xl">Employee Attendance</p>
                        <small class="text-base italic">current date</small>
                        <EmployeeAttendance />
                    </div>
                </div>
            </article>
        </section>
    </main>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
import PieChart from '../components/PieChart.vue';
import VerticalBarChart from '../components/VerticalBarChart.vue';
import HorizontalBarChart from '../components/HorizontalBarChart.vue'
import EmployeeAttendance from '../components/EmployeeAttendance.vue';
</script>

<style scoped>
.chart-box {
    background: #FBFCFF;
    border-radius: 20px;
    border: 1px solid #A6BFF7;
}
</style>
