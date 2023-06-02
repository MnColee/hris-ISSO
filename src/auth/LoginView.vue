<template>
    <section class="hidden w-full items-center justify-center overflow-hidden h-screen lg:pt-10 lg:items-start lg:flex xl:pt-0 xl:items-center 2xl:items-start">
        <svg width="1440" height="500" viewBox="0 0 1440 862" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00012207 28C293.5 -34.5 1440 28 1440 28C1440 28 1965 763 1215.5 745.5C466 728 36.5002 1033.5 0.00012207 719.5C-36.5 405.5 -293.5 90.5 0.00012207 28Z" fill="url(#paint0_linear_55_747)"/>
            <defs>
                <linearGradient id="paint0_linear_55_747" x1="389.5" y1="203" x2="1145.5" y2="959" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E3EBFD"/>
                    <stop offset="1" stop-color="#E3EBFD" stop-opacity="0"/>
                </linearGradient>
            </defs>
        </svg>

        <article class="container mx-auto absolute top-0 w-full h-full px-4 lg:px-0 lg:pt-20 2xl:h-auto">
            <div class="w-full flex items-center justify-center">
                <fieldset class="login-wrapper relative w-full px-4 py-4 sm:w-96 lg:mt-16 lg:px-6">
                    <legend class="mx-auto"><img src="/img/isso-trans-logo.png" alt="isso-logo" class="bg-logo h-20 sm:h-24 lg:h-24 xl:h-28"></legend>
                    <form action="" class="w-full h-auto flex flex-col items-center justify-center gap-y-3 md:gap-y-4">
                        <p class="font-bold text-lg md:text-xl lg:text-2xl">Login</p>
                        <div class="flex flex-col items-center gap-y-3 w-full md:gap-y-4">
                            <div class="bg-input flex items-center gap-x-2.5 w-full rounded-md py-1.5 px-2.5">
                                <i class="fa-regular fa-envelope lg:text-xl"></i>
                                <Input v-model="email" type="email" placeholder="Email Address" required/>
                            </div>
                            <div class="bg-input relative w-full flex items-center gap-x-2.5 rounded-md py-1.5 px-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <Input v-model="password" placeholder="Password" required/>
                                <button type="button" @click="passwordToggle" class="absolute right-2 top-2"><i class="fa-solid text-icon"></i></button>
                            </div>
                        </div>
                        <SecondaryButton buttonText="Login" class="w-3/4 rounded-full py-1.5 md:w-2/4" />
                    </form>
                </fieldset>
            </div>
        </article>
    </section>



    <!----MOBILE-------->
    <section class="w-full flex items-center justify-center h-auto lg:hidden">
        <article class="lg:container mx-auto overflow-hidden w-full flex items-start justify-start">
            <svg class="relative sm:hidden" viewBox="0 0 360 488" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H360V457.686C360 457.686 360 525.893 180 457.686C0 389.479 0 457.686 0 457.686V0Z" fill="#CAD9FA"/>
            </svg>

            <div class="w-full overflow-hidden hidden sm:flex flex-col items-start justify-start gap-0">
                <div class="wave-box w-full"></div>
                <svg id="wave" class="relative bottom-4" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(202, 217, 250, 1)" offset="0%"></stop><stop stop-color="rgba(202, 217, 250, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,49L120,89.8C240,131,480,212,720,204.2C960,196,1200,98,1440,98C1680,98,1920,196,2160,220.5C2400,245,2640,196,2880,155.2C3120,114,3360,82,3600,130.7C3840,180,4080,310,4320,326.7C4560,343,4800,245,5040,228.7C5280,212,5520,278,5760,326.7C6000,376,6240,408,6480,375.7C6720,343,6960,245,7200,179.7C7440,114,7680,82,7920,89.8C8160,98,8400,147,8640,155.2C8880,163,9120,131,9360,114.3C9600,98,9840,98,10080,138.8C10320,180,10560,261,10800,285.8C11040,310,11280,278,11520,253.2C11760,229,12000,212,12240,179.7C12480,147,12720,98,12960,65.3C13200,33,13440,16,13680,40.8C13920,65,14160,131,14400,147C14640,163,14880,131,15120,114.3C15360,98,15600,98,15840,114.3C16080,131,16320,163,16560,179.7C16800,196,17040,196,17160,196L17280,196L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"></path></svg>
            </div>


            <div class="w-full absolute inset-0 z-20 mx-auto flex flex-col items-center justify-center gap-y-10 px-2 sm:w-96">
                <div class="w-full flex items-center justify-center">
                    <img src="/img/isso-trans-logo.png" alt="isso-logo" class="h-32 w-32">
                </div>

                <form class="mobile-login-wrapper w-full px-4 py-6 flex flex-col gap-y-5 border-2 border-green-400">
                    <div class="mobile-login-input w-full flex items-center gap-x-3 py-2.5 px-5 text-blue-600">
                        <i class="fa-regular fa-envelope text-blue-300 text-lg"></i>
                        <input type="email" class="bg-transparent border-none outline-none text-lg" placeholder="Email Address">
                    </div>
                    <div class="mobile-login-input w-full flex items-center gap-x-3 py-2.5 px-5 text-blue-600">
                        <i class="fa-solid fa-key text-blue-300 text-lg"></i>
                        <input type="password" class="bg-transparent border-none outline-none text-lg" placeholder="Password">
                    </div>
                    <RouterLink :to="{ name: 'promptpassword'}" class="py-2 w-full text-white text-center bg-blue-600 rounded text-lg">Login</RouterLink>
                </form>
            </div>
        </article>
    </section>
</template>


<script setup>
import Input from '../components/Input.vue';
import SecondaryButton from '../components/SecondaryButton.vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<style scoped>
.login-wrapper {
    border: 3px solid #1A45A5;
    border-radius: 30px;
}
.bg-input {
    color: #A6BFF7;
}
.text-icon {
    color: #1A45A5;
}

.mobile-login-wrapper {
    background-color: rgba(248, 250, 254, 0.3);
    border: 2px solid #A6BFF7;
    /* filter: blur(2px); */
    border-radius: 10px;
}

.mobile-login-input {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    box-shadow: inset 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.mobile-login-input input::placeholder { 
    color: #A6BFF7;
    opacity: 1;
}

.mobile-login-input input:-ms-input-placeholder {
    color: #A6BFF7;
}

.mobile-login-input input::-ms-input-placeholder {
    color: #A6BFF7;
}
.wave-box {
    background-color: #CAD9FA;
    height: 30vh;
}

@media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 359px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
    svg {
        height: 76vh;
    } 
}

@media only screen 
    and (min-device-width: 360px) 
    and (max-device-width: 374px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
    svg {
        height: 66vh;
    } 
}

@media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 389px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
    svg {
        width: 100%;
    } 
}

@media only screen 
    and (min-device-width: 390px) 
    and (max-device-width: 411px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
    svg {
        height: 63vh;
    } 
}

@media only screen 
    and (min-device-width: 412px) 
    and (max-device-width: 413px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
    svg {
        height: 61vh;
    } 
}

@media only screen 
    and (min-device-width: 414px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: portrait) {
    svg {
        height: 62.5vh;
    } 
}

/** landscape */
@media only screen 
  and (min-device-width: 640px) 
  and (max-device-width: 1023px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
    #wave {
        height: auto;
        width: 100%;
        margin-bottom: 1rem;
    } 
}
</style>