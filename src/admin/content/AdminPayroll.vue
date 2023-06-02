<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="dashboardBody w-full relative flex flex-col items-center justify-center px-4 py-6 lg:left-20 lg:py-6 lg:px-8 xl:p-8 2xl:left-10 2xl:container 2xl:mx-auto">
                <div class="flex items-center justify-center w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Payroll</p>
                </div>

                <div class="w-full flex flex-col items-start gap-y-7 md:flex-row lg:gap-y-0 md:gap-x-7 xl:gap-x-10">
                    <div class="w-full flex flex-col gap-y-3 md:w-2/4 xl:w-1/3">
                        <div class="w-full">
                            <div class="month w-full flex items-center justify-between py-1.5 px-2">
                                <div class="prev cursor-pointer" @click="previousMonth"><i class="fa-solid fa-chevron-left text-blue-600"></i></div>
                                <div class="date">
                                    <h1 class="text-base text-black font-bold">{{ monthYear }}</h1>
                                </div>
                                <div class="next cursor-pointer" @click="nextMonth"><i class="fa-solid fa-chevron-right text-blue-600"></i></div>
                            </div>
                        </div>

                        <div class="cutOffBox w-full flex items-start gap-x-4 p-4 md:flex-col md:gap-y-4 lg:gap-y-0 lg:flex-row lg:p-2 2xl:flex-col 2xl:gap-y-3">
                            <div class="bg-blue-600 rounded-md p-2 flex flex-col items-center text-center gap-y-1 w-full md:py-2.5 lg:px-8 lg:py-5 2xl:py-2">
                                <p class="font-bold text-base text-white lg:text-2xl xl:text-2xl">Cut Off 1</p>
                            </div>
                            <div class="bg-blue-600 rounded-md p-2 flex flex-col items-center text-center gap-y-1 w-full md:py-2.5 lg:px-8 lg:py-5 2xl:py-2">
                                <p class="font-bold text-base text-white lg:text-2xl xl:text-2xl">Cut Off 2</p>
                            </div>
                        </div>
                    </div>
                
                    <div class="w-full flex flex-col gap-y-6 lg:gap-y-4 xl:gap-y-6">
                        <div class="w-full grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-x-5 xl:gap-x-7">
                            <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:gap-y-1 xl:gap-y-3 lg:py-4">
                                <p class="uppercase font-bold text-xl xl:text-2xl">Cut Off</p>
                                <p class="font-semibold italic text-xl xl:text-3xl">Jan 16-31</p>
                            </div>
                            <div class="estimateBox w-full flex flex-col items-center justify-center gap-y-3 py-4 rounded-lg lg:gap-y-1 xl:gap-y-3 lg:py-4">
                                <p class="uppercase text-center font-bold text-xl xl:text-2xl">Total Work Days</p>
                                <p class="font-semibold italic text-xl xl:text-3xl">11</p>
                            </div>
                            <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:gap-y-1 xl:gap-y-3 lg:py-4">
                                <p class="uppercase font-bold text-xl xl:text-2xl">Holidays</p>
                                <p class="font-semibold italic text-xl xl:text-3xl">1</p>
                            </div>
                        </div>
                        
                        <div class="searchField w-full px-2 py-1.5 border border-blue-500 rounded-lg flex items-center gap-x-2 bg-blue-50">
                            <input type="search" class="w-full bg-transparent border-none outline-none" placeholder="Search name">
                            <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
                        </div>
                    </div>
                </div>

                <PayrollTable />
            </article>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import PayrollTable from '../components/PayrollTable.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<script>
export default {
    data() {
        return {
            currentDate: new Date(),
            currentMonth: null,
            currentYear: null
        };
    },
    computed: {
        monthYear() {
            const options = { month: "long", year: "numeric" };
            return new Intl.DateTimeFormat("en-PH", options).format(new Date(this.currentYear, this.currentMonth));
        }
    },
    methods: {
        updateMonthYear() {
            this.currentMonth = this.currentDate.getMonth();
            this.currentYear = this.currentDate.getFullYear();
        },
        previousMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.updateMonthYear();
        },
        nextMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.updateMonthYear();
        }
    },
    mounted() {
        this.updateMonthYear();
    },
    components: { PayrollTable }
};
</script>

<style scoped>
.estimateBox {
    background: linear-gradient(180deg, #FCFF2B 0%, rgba(253, 255, 150, 0) 100%);
}

.month{
    background: #F8FAFE;
    border: 1.5px solid #A6BFF7;
    border-radius: 10px;
    color: #A6BFF7;
}

.cutOffBox {
    background: #F8FAFE;
    border: 1.5px solid #A6BFF7;
    border-radius: 10px;
    color: #A6BFF7;
}

.searchField {
    background: #F8FAFE;
    border: 1.5px solid #A6BFF7;
    color: #A6BFF7;
}

.searchField input::placeholder { 
    color: #A6BFF7;
    opacity: 1;
    font-style: italic;
}

.searchField input:-ms-input-placeholder {
    color: #A6BFF7;
}

.searchField input::-ms-input-placeholder {
    color: #A6BFF7;
}

.dashboardBody {
    width: calc(100% - 80px);
}

@media only screen 
    and (min-device-width: 280px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
    .dashboardBody {
        width: 100%;
    }
    .xs-size {
        display: none;
    }

    .btnAdd {
        width: 80%;
        padding: 0.5rem 1rem;
    }
}

@media only screen 
    and (min-device-width: 640px) 
    and (max-device-width: 1023px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1) {
    .dashboardBody {
        width: 100%;
    }
}

@media only screen 
    and (min-device-width: 712px) 
    and (max-device-width: 1023px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1) {
    .dashboardBody {
        width: 100%;
        overflow-x: auto;
    }
}
</style>