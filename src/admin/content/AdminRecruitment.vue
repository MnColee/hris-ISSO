<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="dashboardBody w-full relative flex flex-col items-center justify-center px-4 py-6 lg:left-20 lg:py-6 lg:px-8 xl:p-8 2xl:left-10 2xl:container 2xl:mx-auto">
                <div class="flex items-center justify-center w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Recruitment</p>
                </div>

                <div class="w-full grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-x-5 lg:w-3/4 xl:gap-x-10">
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <p class="text-base uppercase font-bold">Interview</p>
                        <p class="text-lg font-medium lg:text-xl xl:text-5xl">5</p>
                    </div>
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <p class="text-base uppercase font-bold">Skill Test</p>
                        <p class="text-lg font-medium lg:text-xl xl:text-5xl">5</p>
                    </div>
                    <div class="estimateBox w-full flex flex-col items-center text-center gap-y-3 p-4 rounded-lg lg:py-4">
                        <p class="text-base uppercase font-bold">Final Interview</p>
                        <p class="text-lg font-medium lg:text-xl xl:text-5xl">5</p>
                    </div>
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <p class="text-base uppercase font-bold">On Board</p>
                        <p class="text-lg font-medium lg:text-xl xl:text-5xl">5</p>
                    </div>
                </div>

                <RecruitmentTable />
            </article>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import RecruitmentTable from '../components/RecruitmentTable.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<style scoped>
.estimateBox {
    background: linear-gradient(180deg, #FCFF2B 0%, rgba(253, 255, 150, 0) 100%);
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