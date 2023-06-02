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
                <RouterLink :to="{ name: 'msendaccomplishmentreport'}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </RouterLink>
                <p class="font-bold text-base">Task Undertaken</p>
            </div>

            <div class="scrollBarHide w-full px-2 flex flex-col gap-y-5 h-96 overflow-auto pb-8">
                <div class="w-full flex flex-col gap-y-5">
                    <div class="addedInput w-full rounded-md py-1.5 px-2">
                        <input type="text" class="bg-transparent border-none outline-none" placeholder="Task done">
                    </div>

                    <div class=" w-full flex flex-col gap-y-2">
                        <!--1-->
                        <div class="bg-taskdone w-full p-1.5 rounded-md flex items-center justify-between">
                            <p class="w-full truncate text-sm">Task 1</p>
                            <button class="text-base text-red-600">x</button>
                        </div>
                        <!--2-->
                        <div class="bg-taskdone w-full p-1.5 rounded-md flex items-center justify-between">
                            <p class="w-full truncate text-sm">Task 2</p>
                            <button class="text-base text-red-600">x</button>
                        </div>
                    </div>
                </div>

                <div class="w-full flex flex-col gap-y-2.5">
                    <button class="w-full rounded-md p-2 text-white text-base bg-blue-600">Add</button>
                    <button class="w-full rounded-md p-2 text-white text-base bg-blue-600">Confirm</button>
                </div>

            </div>

            <TouchSwipe v-if="!$route.meta.touchswipe" />
            <MobileNavBarBottom />
        </article>
    </section>
</template>

<script setup>
import MobileNavBarBottom from '../components/MobileNavBarBottom.vue'
import TouchSwipe from '../components/TouchSwipe.vue'
</script>

<style scoped>
.mobile-welcom-page {
    background: linear-gradient(174.37deg, #D4E0FB -2.39%, #F3F7FE 95.51%);
}

.addedInput {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
}

.bg-taskdone {
    background: #CAD9FA;
    border-radius: 5px;
}

.scrollBarHide::-webkit-scrollbar {
  display: none;
}
.scrollBarHide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>