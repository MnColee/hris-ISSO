<template>
    <section class="w-full overflow-hidden">

        <div class="flex items-end justify-between w-full py-6 gap-x-10">
            <div class="flex flex-col gap-y-1 w-full">
                <p class="text-base font-bold">What are you looking for?</p>
                <div class="searchField w-full px-2 py-1.5 border border-blue-500 rounded-lg flex items-center gap-x-2 bg-blue-50">
                    <input type="search" class="w-full bg-transparent border-none outline-none" placeholder="search">
                    <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
                </div>
            </div>
            <div class="flex flex-col gap-y-1 w-full ">
                <p class="text-base font-medium">Filter By:</p>
                <select class="w-full p-2 border border-blue-500 rounded-lg flex items-center gap-x-2 text-blue-600 outline-none bg-blue-50">
                    <option value="">All</option>
                    <option value="">BIR</option>
                    <option value="">SSS</option>
                    <option value="">Pag-ibig</option>
                    <option value="">TIN</option>
                </select>
            </div>
            <div class="w-1/2">
                <button @click="toggleCompliance" type="button" class="flex items-center justify-center gap-x-2 rounded-lg py-2 w-full text-center bg-blue-600 text-white">
                    <i class="fa-regular fa-square-plus"></i>
                    <p>Add Compliance</p>
                </button>
            </div>
        </div>

        <div class="overflow-hidden border-b border-t border-blue-600  sm:rounded-t-lg sm:rounded-b-lg">
            <div class="attendance relative overflow-x-auto ">
                <table ref="tables" class="w-full text-sm text-center">
                    <thead class="text-base font-bold border-b border-l border-r border-blue-600">
                        <tr>
                            <th scope="col" class="px-6 py-1.5 border-b border-l border-r border-blue-600">
                                Filename
                            </th>
                            <th scope="col" class="px-6 py-1.5 border-b border-l border-r border-blue-600">
                                Company
                            </th>
                            <th scope="col" class="px-6 py-1.5 border-b border-l border-r border-blue-600">
                                Compliance
                            </th>
                            <th scope="col" class="px-6 py-1.5 border-b border-l border-r border-blue-600">
                                Effective Date
                            </th>
                            <th scope="col" class="px-6 py-1.5 border-b border-l border-r border-blue-600">
                                Expiration Date
                            </th>
                            <th scope="col" class="px-6 py-1.5 border-b border-l border-r border-blue-600">
                                Download
                            </th>
                        </tr>
                    </thead>

                    <tbody class="">
                        <tr class="">
                            <td class="bg-tbody px-6 py-2 border-t border-l border-r border-blue-600">
                                <p class="text-base">Files</p>
                            </td>
                            <td class="bg-tbody px-6 py-2 border-t border-l border-r border-blue-600">
                                <p class="text-base">ISSO</p>
                            </td>
                            <td class="bg-tbody px-6 py-2 border-t border-l border-r border-blue-600">
                                <p class="text-base">BIR</p>
                            </td>
                            <td class="bg-tbody px-6 py-2 border-t border-l border-r border-blue-600">
                                <p class="text-base">02-20-22</p>
                            </td>
                            <td class="bg-tbody px-6 py-2 border-t border-l border-r border-blue-600">
                                <p class="text-base">02-20-22</p>
                            </td>
                            <td class="bg-tbody px-6 py-2 border-t border-l border-r border-blue-600">
                                <button>
                                    <i class="fa-solid fa-file-arrow-down text-blue-600 text-base lg:text-xl"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!--PAGINATION & GENERATE BUTTON-->
    <div class="w-full flex items-center justify-end gap-x-4 py-4">
        <button @click="downloadPdf" class="bg-blue-600 text-base text-white py-1 px-2 rounded-md">Generate Report</button>
        <div class="flex flex-col lg:flex-row justify-between">
            <nav class="flex justify-center items-center text-gray-600 mt-8 text-sm lg:mt-0">
                <button class="p-2 rounded hover:bg-blue-300 hover:text-white text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <a href="#" class="px-2.5 py-1 rounded bg-blue-600 text-white font-medium hover:bg-blue-300 hover:text-white"> 1 </a>
                <a href="#" class="px-2.5 py-1 rounded hover:bg-blue-300 hover:text-white text-blue-600"> 2 </a>
                <a href="#" class="px-2.5 py-1 rounded hover:bg-blue-300 hover:text-white text-blue-600"> 3 </a>
                <a href="#" class="px-2.5 py-1 rounded hover:bg-blue-300 hover:text-white text-blue-600"> ... </a>
                <a href="#" class="px-2.5 py-1 rounded hover:bg-blue-300 hover:text-white text-blue-600"> 9 </a>
                <button class="p-2 rounded hover:bg-blue-300 hover:text-white text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </nav>  
        </div>
    </div>


    <!---MODAL-->
    <AdminModal @close="toggleCompliance" :modalAdmin="modalCompliance">
        <div class="modal-content">
            <div class="modal-header lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-xl">Add Document</h1>
            </div>
            <div class="lg:px-5 px-3 pt-5 gap-y-4">
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
                    <div class="flex flex-col gap-y-1.5">
                        <p class="text-base font-semibold">Upload Files</p>
                        <label for="fileInput" type="button" class="adminInput rounded-md py-1 w-full cursor-pointer text-center italic px-2">				
                            <span class="w-full flex items-center justify-between">
                                File Input
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </span>
                        </label>
                        <input name="file" id="fileInput" class="hidden cursor-pointer" type="file"/>
                    </div>
                    <div class="flex flex-col gap-y-1.5">
                        <p class="text-base font-semibold">File Name</p>
                        <AdminInput v-model="fileName" type="text" placeholder=""/>
                    </div>
                    <div class="flex flex-col gap-y-1.5">
                        <p class="text-base font-semibold">Effective Date</p>
                        <AdminInput v-model="effectiveDate" type="date"/>
                    </div>
                    <div class="flex flex-col gap-y-1.5">
                        <p class="text-base font-semibold">Expiration Date</p>
                        <AdminInput v-model="expirationDate" type="date"/>
                    </div>
                    <div class="flex flex-col gap-y-1.5">
                        <p class="text-base font-semibold">Company Name</p>
                        <AdminInput v-model="companyName" placeholder=""/>
                    </div>
                    <div class="flex flex-col gap-y-1.5">
                        <p class="text-base font-semibold">Compliance Type</p>
                        <select class="adminInput py-1.5 px-2 outline-none">
                            <option value="BIR">BIR</option>
                        </select>
                    </div>
                </div>
                <div class="flex items-center gap-x-2 w-full pt-3 pb-1">
                    <input type="checkbox">
                    <p class="text-sm text-sky-400 italic">Notify 20 days before expiration date</p>
                </div>
            </div>
        </div>
    </AdminModal>
</template>

<script setup>
import AdminModal from './AdminModal.vue';
import AdminInput from './AdminInput.vue'
import { ref } from 'vue'

const fileName = ref('');
const effectiveDate = ref('');
const expirationDate = ref('');
const companyName = ref('');

const modalCompliance = ref(null);

const toggleCompliance = ()=>{
    modalCompliance.value = !modalCompliance.value
}
</script>

<script>
import html2pdf from 'html2pdf.js';

export default {
    methods: {
        downloadPdf() {
            const options = {
                filename: "compliance.pdf",
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

tbody:before {
    content:"@";
    display: block;
    line-height: 10px;
    text-indent: -99999px;
}

.searchField {
    background: #F8FAFE;
    border: 1.5px solid #A6BFF7;
    color: #A6BFF7;
}

.searchField input::placeholder { 
    color: #A6BFF7;
    opacity: 1;
    font-style: italic;
}

.searchField input:-ms-input-placeholder {
    color: #A6BFF7;
}

.searchField input::-ms-input-placeholder {
    color: #A6BFF7;
}

</style>