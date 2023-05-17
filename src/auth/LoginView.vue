<template>
    <section class="w-full flex items-center justify-center overflow-hidden h-screen">
        <svg width="1440" height="500" viewBox="0 0 1440 862" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00012207 28C293.5 -34.5 1440 28 1440 28C1440 28 1965 763 1215.5 745.5C466 728 36.5002 1033.5 0.00012207 719.5C-36.5 405.5 -293.5 90.5 0.00012207 28Z" fill="url(#paint0_linear_55_747)"/>
            <defs>
                <linearGradient id="paint0_linear_55_747" x1="389.5" y1="203" x2="1145.5" y2="959" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E3EBFD"/>
                    <stop offset="1" stop-color="#E3EBFD" stop-opacity="0"/>
                </linearGradient>
            </defs>
        </svg>

        <article class="container mx-auto h-screen absolute top-0 w-full flex items-center justify-center px-4 lg:px-0">
            <div class="w-full flex items-center justify-center">
                <fieldset class="login-wrapper relative w-full px-4 py-4 sm:w-96 lg:mt-16 lg:px-6">
                    <legend class="mx-auto"><img src="/img/isso-trans-logo.png" alt="isso-logo" class="bg-logo h-20 sm:h-24 lg:h-24 xl:h-28"></legend>
                    <form action="" class="w-full h-auto flex flex-col items-center justify-center gap-y-3 md:gap-y-4">
                        <p class="font-bold text-lg md:text-xl lg:text-2xl">Login</p>
                        <div class="flex flex-col items-center gap-y-3 w-full md:gap-y-4">
                            <div class="bg-input flex items-center gap-x-2.5 w-full rounded-md py-1.5 px-2.5">
                                <i class="fa-regular fa-envelope lg:text-xl"></i>
                                <Input v-model="email" type="email" placeholder="Email Address" autofocus required/>
                            </div>
                            <div class="bg-input relative w-full flex items-center gap-x-2.5 rounded-md py-1.5 px-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <Input :type="fieldType" v-model="password" placeholder="Password" required/>
                                <button type="button" @click="passwordToggle" class="absolute right-2 top-2"><i class="fa-solid text-icon" :class="{ 'fa-eye': showPassword, 'fa-eye-slash': !showPassword }"></i></button>
                            </div>
                        </div>
                        <SecondaryButton buttonText="Login" class="w-3/4 rounded-full py-1.5 md:w-2/4" />
                    </form>
                </fieldset>
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

<script>
export default {
    data() {
        return {
            passwordVisible: false,
            fieldType: "password",
        };
    },

    props: {
        type: { type: String, default: "password" },
    },

    methods: {
        passwordToggle() {
            this.fieldType = this.fieldType === "text" ? "password" : "text"
            this.showPassword = !this.showPassword;
        },
    },

    watch: {
        type(val) {
            this.fieldType = val;
        },
    },
        mounted() {
            this.fieldType = this.type;
    },
};
</script>

<style>
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
    
</style>