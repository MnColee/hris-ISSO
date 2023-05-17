<template>
    <section class="container mx-auto w-full mt-16 px-4 lg:px-6 xl:px-6 2xl:px-0">
        <article class="flex flex-col w-full py-4 gap-y-5 lg:gap-y-7">
            <div class="flex items-center justify-center w-full">
                <p class="capitalize text-black font-bold w-full text-center text-2xl xl:text-3xl">Open Position</p>
            </div>

            <div class="w-full px-4 grid grid-cols-1 gap-x-5 gap-y-7 sm:px-0 sm:gap-x-4 sm:gap-y-6 sm:grid-cols-3 md:gap-y-8 lg:gap-x-6 lg:grid-cols-3 xl:gap-x-7 2xl:grid-cols-6">
                <PositionCard />
            </div>
        </article>
    </section>
</template>

<script setup>
import PositionCard from '../components/PositionCard.vue';
</script>

<style>
    
</style>