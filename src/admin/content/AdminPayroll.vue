<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Payroll</p>
                </div>

                <div class="w-full flex items-start lg:gap-x-7 xl:gap-x-10">
                    <div class="w-full flex flex-col gap-y-3 lg:w-2/4 xl:w-1/3">
                        <div class="w-full">
                            <div class="month w-full flex items-center justify-between py-1.5 px-2">
                                <div class="prev cursor-pointer" @click="previousMonth"><i class="fa-solid fa-chevron-left text-blue-600"></i></div>
                                <div class="date">
                                    <h1 class="text-base text-black font-bold">{{ monthYear }}</h1>
                                </div>
                                <div class="next cursor-pointer" @click="nextMonth"><i class="fa-solid fa-chevron-right text-blue-600"></i></div>
                            </div>
                        </div>

                        <div class="cutOffBox w-full flex items-start gap-x-4 p-4 lg:p-2">
                            <div class="bg-blue-600 rounded-md p-2 flex flex-col items-center text-center gap-y-1 w-full lg:px-8 lg:py-5">
                                <p class="font-bold text-base text-white lg:text-2xl xl:text-2xl">Cut Off 1</p>
                            </div>
                            <div class="bg-blue-600 rounded-md p-2 flex flex-col items-center text-center gap-y-1 w-full lg:px-8 lg:py-5">
                                <p class="font-bold text-base text-white lg:text-2xl xl:text-2xl">Cut Off 2</p>
                            </div>
                        </div>
                    </div>
                
                    <div class="w-full flex flex-col lg:gap-y-4 xl:gap-y-6">
                        <div class="w-full grid grid-cols-3 gap-x-4 lg:gap-x-5 xl:gap-x-7">
                            <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:gap-y-1 xl:gap-y-3 lg:py-4">
                                <p class="text-base uppercase font-bold lg:text-xl xl:text-2xl">Cut Off</p>
                                <p class="text-lg font-semibold italic lg:text-xl xl:text-3xl">Jan 16-31</p>
                            </div>
                            <div class="estimateBox w-full flex flex-col items-center justify-center gap-y-3 py-4 rounded-lg lg:gap-y-1 xl:gap-y-3 lg:py-4">
                                <p class="text-base uppercase text-center font-bold lg:text-xl xl:text-2xl">Total Work Days</p>
                                <p class="text-lg font-semibold italic lg:text-xl xl:text-3xl">11</p>
                            </div>
                            <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:gap-y-1 xl:gap-y-3 lg:py-4">
                                <p class="text-base uppercase font-bold lg:text-xl xl:text-2xl">Holidays</p>
                                <p class="text-lg font-semibold italic lg:text-xl xl:text-3xl">1</p>
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

<style>
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
</style>