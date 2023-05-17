<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Recruitment</p>
                </div>

                <div class="w-full grid grid-cols-4 gap-x-4 lg:w-3/4 xl:gap-x-10">
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <p class="text-base uppercase font-bold">Interview</p>
                        <p class="text-lg font-medium lg:text-xl xl:text-5xl">5</p>
                    </div>
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <p class="text-base uppercase font-bold">Skill Test</p>
                        <p class="text-lg font-medium lg:text-xl xl:text-5xl">5</p>
                    </div>
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
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

<style>
.estimateBox {
    background: linear-gradient(180deg, #FCFF2B 0%, rgba(253, 255, 150, 0) 100%);
}
</style>