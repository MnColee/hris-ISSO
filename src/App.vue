<script setup>
import { RouterView, RouterLink } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';
import AdminNav from './components/AdminNav.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header v-if="!$route.meta.hideNav" class="bg-secondary shadow-md fixed inset-x-0 top-0 z-40 w-full py-2 px-2 lg:py-1 lg:px-6 xl:px-6 2xl:px-0">
    <div class="container mx-auto w-full flex items-center justify-between">
      <RouterLink :to="{ name: 'home'}"><img src="/img/isso-trans-logo.png" alt="isso-logo" class="h-10 lg:h-12"></RouterLink>
      <NavigationBar />
    </div>
  </header>

  <header v-if="!$route.meta.hideAdminNav" class="bg-adminnav shadow-md fixed inset-x-0 top-0 z-40 w-full py-2 px-2 lg:py-1 lg:px-6 xl:px-6 2xl:px-0">
    <div class="container mx-auto w-full flex items-center justify-between">
      <AdminNav />
    </div>
  </header>

  <main class="w-full">
    <RouterView />
  </main>

  <Footer v-if="!$route.meta.hideFooter" />
</template>

<style scoped>
.bg-secondary {
    background-color: #F3F7FE;
}

.bg-adminnav{
    background: #A6BFF7;
}
</style>
