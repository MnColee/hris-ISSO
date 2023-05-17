<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center gap-y-4 lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex flex-col items-center justify-center gap-y-3 w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Job Posting</p>
                    <RouterLink :to="{ name: 'adminaddjobposting'}"  class="flex items-center justify-center gap-x-2 rounded-lg py-2 px-9 text-center bg-blue-600 text-white">
                        <p>Add New</p>
                        <i class="fa-regular fa-square-plus"></i>
                    </RouterLink>
                </div>

                <section class="w-full mb-5 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-3 xl:grid-cols-4">
                    <JobPostingCard />
                </section>

                <TertiaryButton buttonText="View More" class="px-10 py-1.5 rounded-md" />
            </article>
        </section>
    </main>
</template>

<script setup>
import TertiaryButton from '../../components/TertiaryButton.vue';
import JobPostingCard from '../components/JobPostingCard.vue'
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>
