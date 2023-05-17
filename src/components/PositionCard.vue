<template>
    <RouterLink :to="{ name: 'jobdescription'}" class="relative h-64 w-full rounded-3xl overflow-auto sm:h-52 md:h-64 lg:h-80 xl:h-96 xl:rounded-4xl 2xl:h-60">
        <img src="/img/photo2.jpg" alt="position-photo" class="h-full w-full">
        <div class="absolute z-10 inset-0 flex justify-center items-center">
            <div class="bg-title relative w-full py-12 text-white flex items-center justify-center text-center sm:py-10 lg:py-14 xl:py-16"></div>
            <p class="absolute text-center text-white font-bold px-4 text-3xl sm:text-2xl sm:px-2 md:text-3xl lg:px-3 lg:text-3xl xl:text-5xl 2xl:text-3xl">UX/UI Designer</p>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
.bg-title {
    background: #173C8F;
    opacity: 0.5;
    backdrop-filter: blur(21.5px);
    color: white;
}
</style>