<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-start justify-center w-full mb-5">
                    <RouterLink :to="{ name: 'adminpayroll'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Payslip</p>
                    <div class="w-1/6 flex justify-end lg:w-1/5 xl:w-1/6">
                        <button @click="downloadPdf" class="bg-blue-600 text-base text-white py-1 px-2 rounded-md">Generate Report</button>
                    </div>
                </div>

                <div ref="tables" class="w-full flex items-start justify-center lg:gap-x-8 xl:gap-x-10">
                    <div class="w-full flex flex-col gap-y-3 lg:w-5/12 xl:w-2/5">
                        <div class="bg-payslip flex flex-col gap-y-1.5 w-full p-2 lg:pt-2 lg:pb-4 lg:px-4">
                            <span class="w-full flex items-start gap-x-2">
                                <p class="text-base font-medium">Employee:</p>
                                <p class="text-base">Juan Dela Cruz</p>
                            </span>
                            <span class="w-full flex items-start gap-x-2">
                                <p class="text-base font-medium">Position:</p>
                                <p class="text-base">UX/UI Designer</p>
                            </span>
                            <span class="w-full flex items-start gap-x-2">
                                <p class="text-base font-medium">Period:</p>
                                <p class="text-base">Dec 16 - 31, 2023</p>
                            </span>
                            <span class="w-full flex items-start gap-x-2">
                                <p class="text-base font-medium">Basic Salary:</p>
                                <p class="text-base"> P 15,000/mo</p>
                            </span>
                        </div>

                        <div class="bg-payslip w-full p-2 flex flex-col gap-y-2 lg:pt-3 lg:pb-4 lg:px-4">
                            <span class="w-full flex items-start justify-between gap-x-2">
                                <p class="text-base font-medium">Basic Salary:</p>
                                <p class="text-base"> P 10,000/mo</p>
                            </span>

                            <div class="flex items-center justify-center w-full">
                                <div class="lg:w-7/12 py-3">
                                    <span class="w-full flex items-center justify-between gap-x-2">
                                        <p class="text-sm italic">Allowance:</p>
                                        <p class="text-sm italic"> P 10,000/mo</p>
                                    </span>
                                    <span class="w-full flex items-center justify-between gap-x-2">
                                        <p class="text-sm italic">Adj:</p>
                                        <p class="text-sm italic"> P 10,000/mo</p>
                                    </span>
                                    <span class="w-full flex items-center justify-between gap-x-2">
                                        <p class="text-sm italic">Subtotal:</p>
                                        <p class="text-sm italic"> P 10,000/mo</p>
                                    </span>
                                </div>
                            </div>

                            <span class="w-full flex items-start justify-between gap-x-2">
                                <p class="text-base font-medium">Gross Salary:</p>
                                <p class="text-base"> P 15,000/mo</p>
                            </span>

                            <div>
                                <span class="w-full flex items-start justify-between gap-x-2">
                                    <p class="text-base font-medium">Deductions</p>
                                </span>
                                <div class="flex items-center justify-center w-full">
                                    <div class="lg:w-7/12 py-3">
                                        <span class="w-full flex items-center justify-between gap-x-2">
                                            <p class="text-sm italic">SSS:</p>
                                            <p class="text-sm italic"> P 10,000/mo</p>
                                        </span>
                                        <span class="w-full flex items-center justify-between gap-x-2">
                                            <p class="text-sm italic">PHIC:</p>
                                            <p class="text-sm italic"> P 10,000/mo</p>
                                        </span>
                                        <span class="w-full flex items-center justify-between gap-x-2">
                                            <p class="text-sm italic">HDMF:</p>
                                            <p class="text-sm italic"> P 10,000/mo</p>
                                        </span>
                                        <span class="w-full flex items-center justify-between gap-x-2">
                                            <p class="text-sm italic">W-Tax:</p>
                                            <p class="text-sm italic"> P 10,000/mo</p>
                                        </span>
                                        <span class="w-full flex items-center justify-between gap-x-2">
                                            <p class="text-sm italic">Subtotal:</p>
                                            <p class="text-sm italic"> P 10,000/mo</p>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <span class="w-full flex items-start justify-between gap-x-2">
                                <p class="text-base font-medium">Total Deductions:</p>
                                <p class="text-base"> P 15,000/mo</p>
                            </span>

                            <span class="w-full flex items-start justify-between gap-x-2">
                                <p class="text-base font-medium">Net Pay:</p>
                                <p class="text-base"> P 15,000/mo</p>
                            </span>

                        </div>
                    </div>



                    <div class="w-full flex flex-col items-center justify-center gap-y-4 lg:w-6/12 xl:w-2/5">
                        <div class="bg-payslip p-2 w-full flex items-start justify-center lg:pt-2 lg:pb-4">
                            <div class="flex flex-col lg:gap-y-2 lg:w-10/12">
                                <span class="w-full flex items-start justify-between gap-x-2">
                                    <p class="text-base font-medium">Total Working Days</p>
                                    <p class="text-base italic"> P15.00</p>
                                </span>
                                <span class="w-full flex items-start justify-between gap-x-2">
                                    <p class="text-base font-medium">Total Attendance</p>
                                    <p class="text-base italic"> P15.00</p>
                                </span>
                                <span class="w-full flex items-start justify-between gap-x-2">
                                    <p class="text-base font-medium">Total Absent/Leave</p>
                                    <p class="text-base italic"> P0.00</p>
                                </span>
                                <span class="w-full flex items-start justify-between gap-x-2">
                                    <p class="text-base">Allowed Leave</p>
                                    <p class="text-base italic"> P0.00</p>
                                </span>
                                <span class="w-full flex items-start justify-between gap-x-2">
                                    <p class="text-base">Loss of Pay Days</p>
                                    <p class="text-base italic"> P0.00</p>
                                </span>
                                <span class="w-full flex items-start justify-between gap-x-2">
                                    <p class="text-base font-medium">Total Salary Days</p>
                                    <p class="text-base italic"> P15.00</p>
                                </span>
                                <p class="text-base font-semibold italic text-center mt-4">Sixteen Thousand Five Hundred Thirty-Three Pesos and Fifty-Five Centavos</p>
                            </div>
                        </div>
                    </div>
                
                </div>
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
                filename: "payslip.pdf",
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

<style>
.bg-payslip{
    background: #F8FAFE;
    border: 1.5px solid #A6BFF7;
    border-radius: 10px;
    color: black;
}
</style>