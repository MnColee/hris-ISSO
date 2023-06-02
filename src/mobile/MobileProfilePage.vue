<template>
    <section class="mobile-welcom-page h-screen w-full lg:hidden">
        <svg width="180" height="113" class="absolute right-0" viewBox="0 0 180 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="23" r="90" fill="#E3EBFD"/>
        </svg>

        <svg width="111" height="141" class="absolute right-0" viewBox="0 0 111 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="51" r="90" fill="#D4E0FB"/>
        </svg>

        <article class="container mx-auto absolute inset-0 h-full flex flex-col w-full py-4 gap-y-3">
            <div class="w-full flex flex-col gap-y-2.5 px-4">
                <div class="w-full flex flex-col items-start justify-between">
                    <p class="text-base font-bold">Your Profile</p>
                    <div class="w-full flex flex-col items-center justify-center gap-y-2">
                        <div class="profile-img-bg relative rounded-full pt-3 px-2">
                            <div class="overflow-hidden rounded-full h-24 w-24">
                                <img src="/img/3.jpg" alt="profile-img" class="h-full w-full">
                            </div>
                            <div class="absolute bottom-0 right-0">
                                <label for="imgInput" type="button" class="bg-blue-600 text-white rounded-md w-full cursor-pointer text-center p-1">				
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </label>
                                <input name="img" id="imgInput" class="hidden cursor-pointer" type="file" accept="image/*"/>
                            </div>
                        </div>
                        <figcaption class="w-full flex flex-col items-center">
                            <p class="font-bold text-base">Juan Dela Cruz</p>
                            <small class="italic">UX/UI Designer</small>
                        </figcaption>
                    </div>
                </div>

                <div class="profile-status-box w-full flex items-center gap-x-4 py-3">
                    <div class="w-full flex flex-col items-center gap-y-1 py-2">
                        <p class="uppercase font-bold text-base">Status</p>
                        <p class="capitalize text-sm italic">Regular</p>
                    </div>
                    <div class="vertical h-full w-3 rounded-full"></div>
                    <div class="w-full flex flex-col items-center gap-y-1 py-2">
                        <p class="capitalize font-bold text-base">Date Hired</p>
                        <p class="uppercase text-sm italic">July 12, 2020</p>
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col gap-y-4 p-4">
                <RouterLink :to="{ name: 'maccomplishmentreport'}" class=" text-white text-center text-sm bg-blue-600 px-12 rounded-md py-2.5 w-full">
                    Accomplishment Report
                </RouterLink>
                <RouterLink :to="{ name: 'mchangepassword'}" class=" text-white text-center text-sm bg-blue-600 px-12 rounded-md py-2.5 w-full">
                    Change Password
                </RouterLink>
                <button class=" text-white text-center text-sm bg-blue-600 px-12 rounded-md py-2.5 w-full">
                    Logout
                </button>
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

.vertical {
    background: #A6BFF7;
}

.btnBox {
    background: #F8FAFE;
}
.notifFont {
    font-size: 0.5rem;
}
.profile-img-bg {
    background: linear-gradient(340.59deg, #D4E0FB 9.37%, #F3F7FE 103.47%);
}
</style>