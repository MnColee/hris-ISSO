<template>
    <section class="w-full overflow-hidden">

        <div class="flex items-end justify-between w-full py-6 gap-x-10">
            <div class="flex flex-col gap-y-1 w-full">
                <div class="searchField w-full px-2 py-1.5 border border-blue-500 rounded-lg flex items-center gap-x-2 bg-blue-50">
                    <input type="search" class="w-full bg-transparent border-none outline-none" placeholder="search">
                    <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
                </div>
            </div>
            <div class="flex items-center gap-x-2 w-full ">
                <p class="text-base font-medium lg:w-1/5">Filter By:</p>
                <select class="w-full p-2 border border-blue-500 rounded-lg flex items-center gap-x-2 text-blue-600 outline-none bg-blue-50">
                    <option value="">All</option>
                </select>
            </div>
            <div class="lg:w-1/2"></div>
        </div>

        <div class="overflow-hidden border-b border-t border-blue-600  sm:rounded-t-lg sm:rounded-b-lg">
            <div class="attendance relative overflow-x-auto ">
                <table ref="tables" class="w-full text-sm text-center">
                    <thead class="text-base font-bold border-b border-l border-r border-blue-600">
                        <tr>
                            <th scope="col" class="px-6 py-1.5">
                                No.
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Position
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody class="">
                        <tr class="border-t border-l border-r border-blue-600">
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">1</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">Dela Cruz</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">Web Designer</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">02-20-23</p>
                            </td>
                            <td class="bg-tbody relative px-6 py-2">
                                <button @click="isAction = !isAction" class=" bg-blue-600 rounded-full px-2 py-0">
                                    <i class="fa-solid fa-ellipsis text-gray-100 "></i>
                                </button>
                                <div v-if="isAction" class="actionMenu absolute top-auto right-20 w-32 shadow-md rounded-md z-50">
                                    <div class="flex flex-col">
                                        <RouterLink :to="{ name: 'viewdailyreport'}" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                                            <p class="text-sm">View</p>
                                        </RouterLink>
                                        <button  class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                                            <p class="text-sm">Download Report</p>
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
</template>

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
                filename: "accomplishment_report_data.pdf",
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

.reasonField {
    background: #F8FAFE;
    border: 1.5px solid #A6BFF7;
    border-radius: 10px;
    color: #A6BFF7;
}

.reasonField textarea::placeholder { 
    color: #A6BFF7;
    opacity: 1;
    font-style: italic;
}

.reasonField textarea:-ms-textarea-placeholder {
    color: #A6BFF7;
}

.reasonField textarea::-ms-textarea-placeholder {
    color: #A6BFF7;
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