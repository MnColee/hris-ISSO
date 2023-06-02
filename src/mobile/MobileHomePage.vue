<template>
    <section class="mobile-welcom-page h-screen w-full lg:hidden">
        <TouchSwipe />
        <MobileNavBarBottom />
    </section>
</template>

<script setup>
import MobileNavBarBottom from '../mobile/components/MobileNavBarBottom.vue'
import TouchSwipe from './components/TouchSwipe.vue';
</script>
