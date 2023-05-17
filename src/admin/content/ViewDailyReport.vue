<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <RouterLink :to="{ name: 'adminreports'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Daily Reports</p>
                </div>

                <div ref="tables" class="w-full flex flex-col gap-y-2 lg:gap-y-6">
                    <div class="w-full grid grid-cols-1 lg:gap-x-7 lg:gap-y-4 lg:grid-cols-2">
                        <div class="dr-inputField w-full rounded-md px-2 py-1">
                            <p>Juan Dela Cruz</p>
                        </div>
                        <div class="dr-inputField w-full rounded-md px-2 py-1">
                            <p>Position</p>
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

                <button @click="downloadPdf" class="bg-blue-600 text-base text-white py-2 px-8 rounded-md mt-8">Generate Report</button>
            </article>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<script>
import html2pdf from 'html2pdf.js';

export default {
    data() {
        return {
            isAction: false,
        }
    },
    methods: {
        downloadPdf() {
            const options = {
                filename: "daily_report.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait", margin: { top: 0.5, right: 0.5, bottom: 0.5, left: 0.5 } }
            };
            const content = this.$refs.tables;
            html2pdf().set(options).from(content).save();
        }
    },
}
</script>

<style scoped>
.dr-inputField {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    color: #A6BFF7;
}
</style>