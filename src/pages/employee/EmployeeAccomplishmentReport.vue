<template>
    <main class="w-full flex flex-col items-start">
        <Navigation />
        <section class="w-full mt-16">
            <article class="w-full flex items-start">
                <AsideBar />
                <article class="w-full lg:py-4 lg:px-8 xl:p-8">
                    <div class="flex items-center justify-center w-full mb-5">
                        <RouterLink :to="{ name: 'employeemain'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                        <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Accomplishment Report</p>
                    </div>

                    <div class="w-full flex flex-col lg:gap-y-7 xl:gap-y-8">
                        <div class="w-full flex items-center justify-between gap-x-8">
                            <div class="searchField w-full px-2 py-1.5 border border-blue-300 rounded-lg flex items-center gap-x-2 bg-blue-50">
                                <input type="search" class="w-full bg-transparent border-none outline-none" placeholder="search">
                                <i class="fa-solid fa-magnifying-glass text-blue-300"></i>
                            </div>
                            <RouterLink :to="{ name: 'employeesenddailyaccomplishmentreport'}" class="w-1/2 bg-blue-600 text-base text-white rounded-md py-2 text-center">Send Report</RouterLink>
                        </div>

                        <!--Reports-->
                        <div class="scrollBarThin w-full h-80 overflow-auto flex flex-col gap-y-1.5 pr-2">

                            <RouterLink :to="{ name: 'employeedailyaccomplishmentreport'}" class="dailyReportViewBox cursor-pointer w-full p-2 flex items-center gap-x-4 lg:py-1.5 lg:px-3">
                                <div class="h-10 w-10 bg-blue-200 p-1 rounded-full">
                                    <img src="/img/isso-trans-logo.png" alt="logo" class="h-full w-full">
                                </div>
                                <div class="w-full flex flex-col items-start">
                                    <p class="text-base font-medium">Daily Accomplishment Report</p>
                                    <small class="italic">January 22, 2023</small>
                                </div>
                            </RouterLink>

                        </div>
                    </div>

                </article>
            </article>
        </section>
    </main>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import AsideBar from '../components/AsideBar.vue'
</script>

<style scoped>
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
.scrollBarThin::-webkit-scrollbar {
    width: 6px;
}

.scrollBarThin::-webkit-scrollbar-track {
    background: transparent;
}

.scrollBarThin::-webkit-scrollbar-thumb {
    background: #A6BFF7;
    border-radius: 10px;
}

.scrollBarThin::-webkit-scrollbar-thumb:hover {
    background: #4A7EEE;
}

.dailyReportViewBox {
    background: #FBFCFF;
    border: 1px solid #A6BFF7;
    border-radius: 5px;
    color: #A6BFF7;
}

.dailyReportViewBox:hover{
    background-color: #E3EBFD;
}
</style>
