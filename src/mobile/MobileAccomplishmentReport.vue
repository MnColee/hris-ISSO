<template>
    <section class="mobile-welcom-page h-screen w-full lg:hidden">
        <svg width="180" height="113" class="absolute right-0" viewBox="0 0 180 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="23" r="90" fill="#E3EBFD"/>
        </svg>

        <svg width="111" height="141" class="absolute right-0" viewBox="0 0 111 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="51" r="90" fill="#D4E0FB"/>
        </svg>

        <article class="container mx-auto absolute inset-0 h-full flex flex-col w-full py-4 gap-y-3 px-1">
            <div class="w-full flex items-center gap-x-1">
                <RouterLink :to="{ name: 'profilepage'}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </RouterLink>
                <p class="font-bold text-sm">Accomplishment Report</p>
            </div>

            <div class="scrollBarHide h-screen overflow-auto flex flex-col gap-y-1.5 px-1.5 pb-16">
                <!--1-->
                <RouterLink :to="{ name: 'mdailyaccomplishmentreport'}" class="mobile-notif-box w-full px-2 py-1 rounded-md flex items-center gap-x-4">
                    <div class="m-img-bg h-12 w-16 rounded-full overflow-hidden sm:w-14">
                        <img src="/img/isso-trans-logo.png" alt="isso-logo" class="h-full w-full">
                    </div>
                    <figcaption class="w-full flex flex-col">
                        <p class="font-bold text-sm">Daily Accomplishment Report</p>
                        <small class="text-xs">Jan 03, 2023</small>
                    </figcaption>
                </RouterLink>
                
            </div>

            <TouchSwipe v-if="!$route.meta.touchswipe" />
            <MobileNavBarBottom />
        </article>
    </section>
</template>

<script setup>
import MobileNavBarBottom from '../mobile/components/MobileNavBarBottom.vue'
import TouchSwipe from './components/TouchSwipe.vue';
</script>

<style scoped>
.mobile-welcom-page {
    background: linear-gradient(174.37deg, #D4E0FB -2.39%, #F3F7FE 95.51%);
}

.profile-status-box {
    background: linear-gradient(174.37deg, #D4E0FB -2.39%, #F3F7FE 95.51%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: #4A7EEE;
}
.mobile-notif-box {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
}

.m-img-bg {
    background: #D4E0FB;
}

.btnBox {
    background: #F8FAFE;
}
.notifFont {
    font-size: 0.6rem;
    color: #81A5F3;
}
.profile-img-bg {
    background: linear-gradient(340.59deg, #D4E0FB 9.37%, #F3F7FE 103.47%);
}

.scrollBarHide::-webkit-scrollbar {
  display: none;
}
.scrollBarHide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>