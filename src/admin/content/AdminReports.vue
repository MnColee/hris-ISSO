<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Accomplishment Reports</p>
                </div>
                
                <AccomplishmentReportTable />
            </article>
        </section>
    </main>
</template>

<script setup>
import AccomplishmentReportTable from '../components/AccomplishmentReportTable.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>