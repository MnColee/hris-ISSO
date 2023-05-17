<template>
    <nav class="bg-dashHead fixed inset-x-0 top-0 z-40 w-full py-2 flex items-center justify-between px-4 shadow-md lg:px-6">
        <RouterLink :to="{ name: 'home'}">
            <img src="/img/isso-trans-logo.png" alt="isso-logo" class="h-10 w-10 lg:h-12 lg:w-12">
        </RouterLink>

        <ul class="flex items-center gap-x-4">
            <li class="relative">
                <button @click="toggleDropdown1" type="button" class="relative mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                    </svg>
                    <div class="absolute top-2 -right-1 rounded-full bg-red-500 text-white text-smaller px-1">1</div>
                </button>
                <div v-show="dropdown1Open" ref="dropdown" class="notifMenu absolute top-auto right-0 w-72 shadow-md rounded-md z-50 bg-black">
                    <div class="notifHead w-full px-2 py-1.5">
                        <p class="text-lg font-bold text-black lg:text-2xl">Notifications</p>
                    </div>
                    <div class="flex flex-col h-56 overflow-auto">
                        <!--1-->
                        <RouterLink :to="{name: ''}" class="hover:bg-blue-100 cursor-pointer flex items-start gap-x-2 p-2">
                            <img src="/img/photo.jpg" alt="user-photo" class="rounded-full h-10 w-10">
                            <figcaption class="w-full truncate">
                                <span class="text-base font-bold text-black">Juan Marko Dela Cruz Manalastas</span>
                                <span class="flex items-center justify-between w-full">
                                    <p class="italic text-gray-600 text-sm font-semibold">Sick Leave</p>
                                    <small class="text-xs">1 day ago</small>
                                </span>
                            </figcaption>
                        </RouterLink>
                    </div>
                </div>
            </li>
            <li class="relative">
                <button @click="toggleDropdown2" type="button" class="relative mt-2">
                    <img src="/img/1.jpg" alt="admin-photo" class="rounded-full h-5 w-5 border border-white lg:h-7 lg:w-7">
                </button>
                <div v-show="dropdown2Open" class="notifMenu absolute top-auto right-0 w-40 shadow-md rounded-md z-50 bg-black">
                    <div class="flex flex-col">
                        <!--1-->
                        <RouterLink :to="{name: 'employeemain'}" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                            <p class="profile-setText text-sm">Profile</p>
                        </RouterLink>
                        <RouterLink :to="{name: 'employeechangepassword'}" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                            <p class="text-sm">Change Password</p>
                        </RouterLink>
                        <button type="button" class=" hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2">
                            <p class="profile-setText text-sm">Logout</p>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<script>
export default {
    data() {
        return {
            dropdown1Open: false,
            dropdown2Open: false
        }
    },
    methods: {
        toggleDropdown1() {
            this.dropdown1Open = !this.dropdown1Open;
            if (this.dropdown1Open) {
                this.dropdown2Open = false;
            }
        },
        toggleDropdown2() {
            this.dropdown2Open = !this.dropdown2Open;
            if (this.dropdown2Open) {
                this.dropdown1Open = false;
            }
        }
    }
}
</script>

<style scoped>
    .bg-dashHead{
        background: #F3F7FE;
        color: #4A7EEE;
    }
    .text-smaller {
        font-size: 0.5rem;
    }
    .notifMenu {
        background: #F3F7FE;
        border-radius: 10px;
    }

    .notifHead {
        border-bottom: 2px solid #A6BFF7;
    }
    .profile-setLink {
        color: #173C8F;
        border-bottom:  1.4px solid #4A7EEE;;
    }
    .profile-setText {
        color: #173C8F;
    }
</style>