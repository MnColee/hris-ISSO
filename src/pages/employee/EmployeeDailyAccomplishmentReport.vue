<template>
    <main class="w-full flex flex-col items-start">
        <Navigation />
        <section class="w-full mt-16">
            <article class="w-full flex items-start">
                <AsideBar />
                <article class="w-full lg:py-4 lg:px-8 xl:p-8">
                    <div class="flex items-center justify-center w-full mb-5">
                        <RouterLink :to="{ name: 'employeeaccomplishmentreport'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                        <p class="capitalize text-black font-bold w-full text-center text-2xl lg:text-3xl">Daily Accomplishment Report</p>
                    </div>

                    <div class="w-full flex flex-col gap-y-2 lg:gap-y-6">
                        <div class="w-full grid grid-cols-1 lg:gap-x-7 lg:gap-y-4 lg:grid-cols-2">
                            <div class="dr-inputField w-full rounded-md px-2 py-1">
                                <p>Juan Dela Cruz</p>
                            </div>
                            <div class="dr-inputField w-full rounded-md px-2 py-1">
                                <p>UX/UI Design</p>
                            </div>
                            <div class="dr-inputField w-full rounded-md px-2 py-1">
                                <p>January 22, 2023</p>
                            </div>
                        </div>

                        <div class="w-full flex flex-col gap-y-3">
                            <div class="w-full flex flex-col gap-y-2 mt-1.5">
                                <p class="text-base font-semibold">Task Undertaken / Completed Today</p>
                                <div class="dr-inputField w-full rounded-md px-2 py-1">
                                    <ul class="list-disc list-inside px-2 py-1">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-y-2 mt-1.5">
                                <p class="text-base font-semibold">In - Process / For Completion</p>
                                <div class="dr-inputField w-full rounded-md px-2 py-1">
                                    <ul class="list-disc list-inside px-2 py-1">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-y-2 mt-1.5">
                                <p class="text-base font-semibold">( Planned ) Task On The Next Day/s</p>
                                <div class="dr-inputField w-full rounded-md px-2 py-1">
                                    <ul class="list-disc list-inside px-2 py-1">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-y-2 mt-1.5">
                                <p class="text-base font-semibold">What Were Your Challenges for Today?</p>
                                <div class="dr-inputField w-full rounded-md px-2 py-1">
                                    <ul class="list-disc list-inside px-2 py-1">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-y-2 mt-1.5">
                                <p class="text-base font-semibold">Your Strengths / Learnings for Today</p>
                                <div class="dr-inputField w-full rounded-md px-2 py-1">
                                    <ul class="list-disc list-inside px-2 py-1">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </article>
        </section>
    </main>

</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import AsideBar from '../components/AsideBar.vue'
</script>

<style scoped>
.dr-inputField {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    color: #A6BFF7;
}
</style>
