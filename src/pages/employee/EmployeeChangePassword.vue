<template>
    <main class="w-full flex flex-col items-start">
        <Navigation />
        <section class="w-full mt-16">
            <article class="w-full lg:py-4 lg:px-8 xl:p-8">
                <div class="relative bg-form rounded-xl overflow-hidden shadow-md w-full">
                    <button @click="toggleChangePassword" class="header w-full flex items-center justify-between text-white px-2 py-1 text-base lg:text-lg">
                        <p>Change Password</p>
                        <i :class="{ rotate: rotated }"  class="fa-solid fa-chevron-up"></i>
                    </button>
                    <div v-show="dropdownChangePassword" class="px-2.5 py-3 flex flex-col gap-y-2">
                        <p class="text-gray-500">Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).</p>
                        <div class="w-full">
                            <form action="" class="flex flex-col w-full gap-y-4">
                                <div class="bg-form-input px-2 py-1.5">
                                    <input type="password" name="currentPassword" id="" class="w-full bg-transparent border-none outline-none text-base" placeholder="Current Password">
                                </div>
                                <div class="bg-form-input px-2 py-1.5">
                                    <input type="password" name="newPassword" id="" class="w-full bg-transparent border-none outline-none text-base" placeholder="New Password">
                                </div>
                                <div class="bg-form-input px-2 py-1.5">
                                    <input type="password" name="reEnterPassword" id="" class="w-full bg-transparent border-none outline-none text-base" placeholder="Re-Enter Password">
                                </div>
                                <button class="w-full header rounded-md py-1.5 text-base text-white shadow-md">Confirm</button>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
</script>

<script>
export default {
    data() {
        return {
            dropdownChangePassword: true,
            rotated: false
        }
    },
    methods: {
        toggleChangePassword() {
            this.dropdownChangePassword = !this.dropdownChangePassword
            this.rotated = !this.rotated
        },
    }
}
</script>

<style>
.header{
    background-color: #2563EB;
}
.bg-form {
    background-color: #E3EBFD;
}

.bg-form-input{
    background: #FBFCFF;
    border: 1px solid #A6BFF7;
    border-radius: 5px;
}
.rotate {
    transform: rotate(180deg);
}

.bg-form-input input::placeholder { 
    color: #2563EB;
    opacity: 1;
}

.bg-form-input input:-ms-input-placeholder {
    color: #2563EB;
}

.bg-form-input input::-ms-input-placeholder {
    color: #2563EB;
}
</style>