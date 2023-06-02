<template>
    <section class="w-full mt-4 lg:mt-5">

        <div class="overflow-hidden border-b border-t border-blue-600  sm:rounded-t-lg sm:rounded-b-lg">
            <div class="attendance overflow-x-auto">
                <table ref="tables" class="w-full text-sm text-center">
                    <thead class="text-base font-bold border-b border-l border-r border-blue-600">
                        <tr>
                            <th scope="col" class="px-6 py-1.5">
                                Employee
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Present
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Absent
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Deduction
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Rate
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Salary
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody class="border-b border-l border-r border-blue-600">
                        <tr class="">
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">Juan Dela Cruz</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">11</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">0</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">1000</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">1000</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">1000</p>
                            </td>
                            <td class="bg-tbody relative px-6 py-2">
                                <button @click="isAction = !isAction" class=" bg-blue-600 rounded-full px-2 py-0">
                                    <i class="fa-solid fa-ellipsis text-gray-100 "></i>
                                </button>
                                <div v-if="isAction" class="actionMenu absolute top-auto right-10 w-36 shadow-md rounded-md z-50">
                                    <div class="flex flex-col">
                                        <!--1-->
                                        <RouterLink :to="{name: 'adminpayrollpayslip'}" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                                            <p class="text-sm">View</p>
                                        </RouterLink>
                                        <button type="button" class="profile-setLink hover:bg-blue-100 cursor-pointer outline-none flex items-center justify-center gap-x-2 p-2">
                                            <p class="text-sm">Download Payslip</p>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!--PAGINATION & GENERATE BUTTON-->
    <div class="w-full flex flex-col-reverse items-center justify-center gap-y-6 py-4 sm:flex-row sm:items-end sm:justify-end sm:gap-y-0 sm:gap-x-4">
        <button @click="downloadPdf" class="bg-blue-600 text-base text-white py-2 px-4 rounded-md sm:px-2 sm:py-1">Generate Report</button>
        <div class="flex flex-col justify-between lg:flex-row lg:justify-end">
            <nav class="flex justify-center items-center text-gray-600 mt-8 text-lg lg:text-sm lg:mt-0">
                <button class="p-2 rounded hover:bg-blue-300 hover:text-white text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <a href="#" class="px-4 py-1 lg:px-2.5 rounded bg-blue-600 text-white font-medium hover:bg-blue-300 hover:text-white"> 1 </a>
                <a href="#" class="px-4 py-1 lg:px-2.5 rounded hover:bg-blue-300 hover:text-white text-blue-600"> 2 </a>
                <a href="#" class="px-4 py-1 lg:px-2.5 rounded hover:bg-blue-300 hover:text-white text-blue-600"> 3 </a>
                <a href="#" class="px-4 py-1 lg:px-2.5 rounded hover:bg-blue-300 hover:text-white text-blue-600"> ... </a>
                <a href="#" class="px-4 py-1 lg:px-2.5 rounded hover:bg-blue-300 hover:text-white text-blue-600"> 9 </a>
                <button class="p-2 rounded hover:bg-blue-300 hover:text-white text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </nav>
        </div>
    </div>
</template>

<script setup>
import AdminModal from './AdminModal.vue';
import { ref } from 'vue'

const modalEmployee = ref(null);

const toggleEmployee = ()=>{
    modalEmployee.value = !modalEmployee.value
}
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
                filename: "payroll.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait", margin: { top: 0.5, right: 0.5, bottom: 0.5, left: 0.5 } }
            };
            const content = this.$refs.tables;
            html2pdf().set(options).from(content).save();
        }
    },
    components: { AdminModal }
}
</script>

<style scoped>
.modal-header {
    border-bottom: 3px solid #173C8F;
}

.adminInput {
    background: #F8FAFE;
    border: 1.5px solid #A6BFF7;
    border-radius: 10px;
    color: #A6BFF7;
}

thead {
    background: #E9EFFD;
}
.bg-tbody {
    background: #FBFCFF;
}

/* tbody:before {
    content:"@";
    display: block;
    line-height: 10px;
    text-indent: -99999px;
} */

.actionMenu{
    background: #F8FAFE;
}


</style>