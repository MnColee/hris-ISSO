<template>
    <section class="mobile-welcom-page h-screen w-full lg:hidden">
        <svg width="180" height="113" class="absolute right-0" viewBox="0 0 180 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="23" r="90" fill="#E3EBFD"/>
        </svg>

        <svg width="111" height="141" class="absolute right-0" viewBox="0 0 111 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="51" r="90" fill="#D4E0FB"/>
        </svg>

        <article class="container mx-auto absolute inset-0 h-full flex flex-col w-full py-4 gap-y-3 px-3">
            <div class="w-full flex items-center gap-x-1">
                <p class="font-bold text-sm">Your Available Leave</p>
            </div>

            <div class="w-full flex items-center gap-x-5">
                <div class="mfileLeaveBox flex items-center justify-center gap-x-2 py-3 w-full">
                    <p class="font-bold text-base uppercase">SIL :</p>
                    <p class="text-base">4</p>
                </div>
                <div class="mfileLeaveBox flex items-center justify-center gap-x-2 py-3 w-full">
                    <p class="font-bold text-base uppercase">OFFSET :</p>
                    <p class="text-base">4</p>
                </div>
            </div>

            <form action="" class="w-full h-full flex flex-col justify-between gap-y-4 pt-3">
                <div class="flex flex-col gap-y-4">
                    <div class="flex flex-col gap-y-2">
                        <p class="font-bold text-sm">Type of leave</p>
                        <select name="" id="" class="mfileInput w-full outline-none py-2 rounded-md">
                            <option value="">Select</option>
                            <option value="">SIL</option>
                            <option value="">OFFSET</option>
                        </select>
                    </div>

                    <div class="flex flex-col gap-y-2">
                        <p class="font-bold text-sm">Reason</p>
                        <textarea rows="4" class="mfileInput resize-none w-full outline-none p-2 rounded-md" placeholder="Reason"></textarea>
                    </div>

                    <div class="flex flex-col gap-y-2">
                        <p class="font-bold text-sm">Select Date</p>
                        <div class="mfileInput w-2/3 p-2 rounded-md">
                            <input type="date" class="border-none outline-none bg-transparent">
                        </div>
                    </div>
                </div>
                <div class="w-full pb-16">
                    <button class="text-white text-base bg-blue-600 rounded-md py-2 w-full">Send Request</button>
                </div>
            </form>

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
.mfileInput {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    color: #A6BFF7;
}

.mfileInput input::placeholder { 
    color: #A6BFF7;
    opacity: 1;
    font-style: italic;
}

textarea::placeholder { 
    color: #A6BFF7;
    opacity: 1;
}

textarea::-ms-textarea-placeholder {
    color: #A6BFF7;
}

textarea::-ms-textarea-placeholder {
    color: #A6BFF7;
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

.mfileLeaveBox {
    background: linear-gradient(174.37deg, #D4E0FB -2.39%, #F3F7FE 95.51%);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
</style>