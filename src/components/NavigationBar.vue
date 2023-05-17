<template>
    <nav>
        <ul class="text-primary flex items-center gap-x-8 text-base uppercase font-medium lg:text-lg">
            <RouterLink :to="{ name: 'home'}" class="hover:text-indigo-700">Home</RouterLink>
            <RouterLink :to="{ name: 'applyjob'}" class="hover:text-indigo-700">Apply Job</RouterLink>
            <RouterLink :to="{ name: 'about'}" class="hover:text-indigo-700">About Us</RouterLink>
            <RouterLink :to="{ name: 'login'}" class="hover:text-indigo-700"><PrimaryButton buttonText="LOGIN" /></RouterLink>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import PrimaryButton from './PrimaryButton.vue';
</script>

<style scoped>
.text-primary{
    color: #2563EB;
}
</style>