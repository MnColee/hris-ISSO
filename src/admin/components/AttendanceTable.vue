<template>
    <section class="w-full overflow-hidden">
        <div class="attendance relative overflow-x-auto shadow-md sm:rounded-lg border border-blue-600">
            <table ref="tables" class="w-full text-sm text-center ">
                <thead class="text-base font-bold">
                    <tr>
                        <th scope="col" class="px-6 py-1.5 border border-blue-600">
                            Employee Name
                        </th>
                        <th scope="col" class="px-6 py-1.5 border border-blue-600">
                            Time - In
                        </th>
                        <th scope="col" class="px-6 py-1.5 border border-blue-600">
                            Time - Out
                        </th>
                        <th scope="col" class="px-6 py-1.5 border border-blue-600">
                            Date
                        </th>
                    </tr>
                </thead>

                <tbody class="border">
                    <tr class="border border-blue-600">
                        <td class="bg-tbody hover:bg-blue-100 cursor-pointer px-6 py-2 border border-blue-600">
                            <RouterLink :to="{ name: 'adminattendanceemployee'}" class="w-full">
                                <p class="text-base">Juan Dela Cruz</p>
                                <small class="text-sm">UI/ UX Designer</small>
                            </RouterLink>
                        </td>
                        <td scope="row" class="bg-tbody px-6 py-2 text-gray-900 whitespace-nowrap border border-blue-600">
                            <div class="flex items-center justify-center gap-x-4">
                                <div class="h-16 overflow-hidden rounded-md">
                                    <img src="/img/1.jpg" alt="employee-photo" class="h-28 w-full">
                                </div>
                                <span class="text-base font-medium lg:text-lg">9:00am</span>
                            </div>
                        </td>
                        <td class="bg-tbody px-6 py-2 border border-blue-600">
                            <div class="flex items-center justify-center gap-x-4">
                                <div class="h-16 overflow-hidden rounded-md">
                                    <img src="/img/1.jpg" alt="employee-photo" class="h-28 w-full">
                                </div>
                                <span class="text-base font-medium lg:text-lg">9:00pm</span>
                            </div>
                        </td>
                        <td class="bg-tbody px-6 py-2 border border-blue-600">
                            <p class="text-base">02-20-22</p>
                        </td>
                    </tr>
                </tbody>
            </table>
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
    methods: {
        downloadPdf() {
            const options = {
                filename: 'attendance.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait', margin: { top: 0.5, right: 0.5, bottom: 0.5, left: 0.5 }}
                
            };
            const content = this.$refs.tables;
            html2pdf().set(options).from(content).save();
        }
    }
}
</script>

<style scoped>
thead {
    background: #E9EFFD;
}
.bg-tbody {
    background: #FBFCFF;
}

</style>