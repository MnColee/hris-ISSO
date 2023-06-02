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
                <RouterLink :to="{ name: 'maccomplishmentreport'}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </RouterLink>
                <p class="font-bold text-sm">Daily Accomplishment</p>
            </div>

            <div class="scrollBarHide h-screen overflow-auto w-full px-2 flex flex-col gap-y-4 pb-16">
                <div class="marBox w-full rounded-md text-center py-1">
                    <p class="font-bold">Juan Dela Cruz</p>
                    <small>UX/UI Designer</small>
                </div>

                <div class="w-full flex flex-col gap-y-2">
                    <span class="w-full flex items-center gap-x-1.5">
                        <p class="uppercase font-bold text-sm">TASK UNDERTAKEN / COMPLETED TODAY</p>
                    </span>
                    <div class="marBox w-full rounded-md py-1 px-2">
                        <ul class="list-disc list-inside text-sm">
                            <li>Login Authentication</li>
                            <li>Login Authentication</li>
                            <li>Login Authentication</li>
                        </ul>
                    </div>
                </div>

                <div class="w-full flex flex-col gap-y-2">
                    <span class="w-full flex items-center gap-x-1.5">
                        <p class="uppercase font-bold text-sm">IN - PROCESS / FOR COMPLETION</p>
                    </span>
                    <div class="marBox w-full rounded-md py-1 px-2">
                        <ul class="list-disc list-inside text-sm">
                            <li>Login Authentication</li>
                            <li>Login Authentication</li>
                            <li>Login Authentication</li>
                        </ul>
                    </div>
                </div>

                <div class="w-full flex flex-col gap-y-2">
                    <span class="w-full flex items-center gap-x-1.5">
                        <p class="uppercase font-bold text-sm">(PLANNED) TASKS ON THE NEXT DAY/S</p>
                    </span>
                    <div class="marBox w-full rounded-md py-1 px-2">
                        <ul class="list-disc list-inside text-sm">
                            <li>Login Authentication</li>
                            <li>Login Authentication</li>
                            <li>Login Authentication</li>
                        </ul>
                    </div>
                </div>

                <div class="w-full flex flex-col gap-y-2">
                    <span class="w-full flex items-center gap-x-1.5">
                        <p class="text-sm">What were your challenges</p>
                    </span>
                    <div class="marBox w-full rounded-md py-1 px-2 h-20"></div>
                </div>

                <div class="w-full flex flex-col gap-y-2">
                    <span class="w-full flex items-center gap-x-1.5">
                        <p class="text-sm font-bold">YOUR STRENGTHS / LEARNINGS FOR TODAY</p>
                    </span>
                    <div class="marBox w-full rounded-md py-1 px-2 h-20"></div>
                </div>
            </div>

            <TouchSwipe v-if="!$route.meta.touchswipe" />
            <MobileNavBarBottom />
        </article>
    </section>
</template>

<script setup>
import MobileNavBarBottom from '../mobile/components/MobileNavBarBottom.vue'
import TouchSwipe from './components/TouchSwipe.vue';
import { RouterLink } from 'vue-router';
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

.marBox {
    background: #FBFCFF;
    border: 1px solid #A6BFF7;
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