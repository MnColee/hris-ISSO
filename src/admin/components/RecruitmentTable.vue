<template>
    <section class="w-full">

        <div class="flex flex-col items-end justify-between w-full py-6 gap-y-4 md:flex-row md:gap-x-4 lg:gap-x-10">
            <div class="flex flex-col gap-y-1 w-full">
                <p class="text-base font-bold hidden">What are you looking for?</p>
                <div class="searchField w-full px-2 py-1.5 border border-blue-500 rounded-lg flex items-center gap-x-2 bg-blue-50">
                    <input type="search" class="w-full bg-transparent border-none outline-none" placeholder="Search name">
                    <i class="fa-solid fa-magnifying-glass text-blue-500"></i>
                </div>
            </div>
            <div class="flex flex-col items-start gap-x-3 w-full md:flex-row md:items-center lg:ml-8">
                <p class="text-base font-medium md:w-24">Filter By:</p>
                <select class="w-full p-2 border border-blue-500 rounded-lg flex items-center gap-x-2 text-blue-600 outline-none bg-blue-50 lg:w-9/12">
                    <option value="">All</option>
                    <option value="">Interview</option>
                    <option value="">Skill Test</option>
                    <option value="">Final Interview</option>
                    <option value="">On Board</option>
                </select>
            </div>
            <div class="w-full flex items-center gap-x-5 mt-3 md:w-8/12 lg:mt-0 lg:w-1/2">
                <button @click="downloadPdf" class="w-full bg-blue-600 text-base text-white py-2 px-2 rounded-md flex items-center justify-center gap-x-2 md:hidden"><i class="fa-solid fa-print"></i><p class="flex items-center gap-x-1.5"><span class="xs-size">Generate</span>Report</p></button>
                <RouterLink :to="{ name: 'adminaddapplicant'}"  class="btnAdd px-2 flex items-center justify-center gap-x-2 rounded-lg py-2 w-full text-center bg-blue-600 text-white lg:px-0">
                    <i class="fa-regular fa-square-plus"></i>
                    <p class="flex items-center gap-x-1.5">Add<span class="xs-size">Applicant</span></p>
                </RouterLink>
            </div>
        </div>

        <div class="overflow-hidden border-b border-t border-blue-600  sm:rounded-t-lg sm:rounded-b-lg">
            <div class="attendance overflow-x-auto">
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
                                Status
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Application Date
                            </th>
                            <th scope="col" class="px-6 py-1.5">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody class="">
                        <tr class="border border-blue-600">
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">1</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">Juan Dela Cruz</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">UI/UX Design</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">Interview</p>
                            </td>
                            <td class="bg-tbody px-6 py-2">
                                <p class="text-base">02-20-22</p>
                            </td>
                            <td class="bg-tbody relative px-6 py-2">
                                <button @click="isAction = !isAction">
                                    <i class="fa-solid fa-ellipsis text-blue-600 text-2xl"></i>
                                </button>
                                <div v-if="isAction" class="actionMenu absolute top-auto right-14 w-40 shadow-md rounded-md z-50">
                                    <div class="flex flex-col">
                                        <!--1-->
                                        <RouterLink :to="{name: 'adminviewapplicant'}" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                                            <p class="text-sm">View</p>
                                        </RouterLink>
                                        <button @click="toggleSendInvitation" type="button" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                                            <p class="text-sm">Send Invitation</p>
                                        </button>
                                        <button @click="toggleSkillTest" type="button" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                                            <p class="text-sm">Send Skill Test</p>
                                        </button>
                                        <button @click="toggleFinalInterview" type="button" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2 border-b border-blue-600">
                                            <p class="text-sm">Send Final Interview</p>
                                        </button>
                                        <button @click="toggleOnBoard" type="button" class="profile-setLink hover:bg-blue-100 cursor-pointer flex items-center justify-center gap-x-2 p-2">
                                            <p class="text-sm">On Board</p>
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
    <div class="w-full flex items-center justify-center gap-x-4 py-4 md:items-end md:justify-end">
        <button @click="downloadPdf" class="bg-blue-600 text-base text-white py-1 px-2 rounded-md hidden md:block">Generate Report</button>
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


    <!---FOR INTERVIEW-->
    <AdminModal @close="toggleSendInvitation" :modalAdmin="modalSendInvitation">
        <div class="modal-content">
            <div class="modal-header lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-xl">For Interview</h1>
            </div>
            <form action="" class="lg:px-5 px-3 pt-5 gap-y-4">
                <div class="flex flex-col gap-y-4">
                    <div class="flex flex-col items-start gap-y-2 lg:items-center lg:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Applicant Name:</p>
                        <AdminInput v-model="name" type="text" class="w-full" placeholder="Name"/>
                    </div>
                    <div class="flex flex-col items-start gap-y-2 lg:items-center md:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Apply Position: </p>
                        <AdminInput v-model="applyPosition" type="text" class="w-full" placeholder="Position"/>
                    </div>
                    <div class="flex flex-col items-start gap-y-2 lg:items-center md:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Application Date: </p>
                        <AdminInput v-model="applicationDate" type="date" class="w-full" />
                    </div>
                    <div class="flex flex-col items-start gap-y-2">
                        <p class="text-base font-semibold w-full">Contact Information</p>
                        <span class="w-full flex flex-col items-start gap-y-4 md:gap-x-4 lg:items-center lg:gap-y-0 lg:flex-row">
                            <AdminInput v-model="email" type="email" class="w-full" placeholder="Email"/>
                            <AdminInput v-model="mobileNumber" type="text" class="w-full" placeholder="Mobile Number"/>
                        </span>
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <p class="infoTitle text-lg font-semibold lg:text-xl">Interview Details</p>
                        <textarea name="" id="" rows="3" class="w-full resize-none bg-transparent outline-none border-none text-base p-2 rounded-md"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </AdminModal>

    <!---FOR SKILL TEST-->
    <AdminModal @close="toggleSkillTest" :modalAdmin="modalSkillTest">
        <div class="modal-content">
            <div class="modal-header lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-xl">Skill Test</h1>
            </div>
            <form action="" class="lg:px-5 px-3 pt-5 gap-y-4">
                <div class="flex flex-col gap-y-4">
                    <div class="flex flex-col items-start gap-y-2 lg:items-center lg:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Applicant Name:</p>
                        <AdminInput v-model="name" type="text" class="w-full" placeholder="Name"/>
                    </div>
                    <div class="flex flex-col items-start gap-y-2 lg:items-center md:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Apply Position: </p>
                        <AdminInput v-model="applyPosition" type="text" class="w-full" placeholder="Position"/>
                    </div>
                    <div class="flex flex-col items-start gap-y-2 lg:items-center md:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Application Date: </p>
                        <AdminInput v-model="applicationDate" type="date" class="w-full" />
                    </div>
                    <div class="flex flex-col items-start gap-y-2">
                        <p class="text-base font-semibold w-full">Contact Information</p>
                        <span class="w-full flex flex-col items-start gap-y-4 md:gap-x-4 lg:items-center lg:gap-y-0 lg:flex-row">
                            <AdminInput v-model="email" type="email" class="w-full" placeholder="Email"/>
                            <AdminInput v-model="mobileNumber" type="text" class="w-full" placeholder="Mobile Number"/>
                        </span>
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <p class="infoTitle text-lg font-semibold lg:text-xl">Skill Test Details</p>
                        <textarea name="" id="" rows="3" class="w-full resize-none bg-transparent outline-none border-none text-base p-2 rounded-md"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </AdminModal>

    <!---FOR FINAL INTERVIEW-->
    <AdminModal @close="toggleFinalInterview" :modalAdmin="modalFinalInterview">
        <div class="modal-content">
            <div class="modal-header lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-xl">Final Interview</h1>
            </div>
            <form action="" class="lg:px-5 px-3 pt-5 gap-y-4">
                <div class="flex flex-col gap-y-4">
                    <div class="flex flex-col items-start gap-y-2 lg:items-center lg:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Applicant Name:</p>
                        <AdminInput v-model="name" type="text" class="w-full" placeholder="Name"/>
                    </div>
                    <div class="flex flex-col items-start gap-y-2 lg:items-center md:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Apply Position: </p>
                        <AdminInput v-model="applyPosition" type="text" class="w-full" placeholder="Position"/>
                    </div>
                    <div class="flex flex-col items-start gap-y-2 lg:items-center md:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Application Date: </p>
                        <AdminInput v-model="applicationDate" type="date" class="w-full" />
                    </div>
                    <div class="flex flex-col items-start gap-y-2">
                        <p class="text-base font-semibold w-full">Contact Information</p>
                        <span class="w-full flex flex-col items-start gap-y-4 md:gap-x-4 lg:items-center lg:gap-y-0 lg:flex-row">
                            <AdminInput v-model="email" type="email" class="w-full" placeholder="Email"/>
                            <AdminInput v-model="mobileNumber" type="text" class="w-full" placeholder="Mobile Number"/>
                        </span>
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <p class="infoTitle text-lg font-semibold lg:text-xl">Final Interview Details</p>
                        <textarea name="" id="" rows="3" class="w-full resize-none bg-transparent outline-none border-none text-base p-2 rounded-md"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </AdminModal>

    <!---FOR ONBOARD-->
    <AdminModal @close="toggleOnBoard" :modalAdmin="modalOnBoard">
        <div class="modal-content">
            <div class="modal-header lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-xl">On Board</h1>
            </div>
            <form action="" class="lg:px-5 px-3 pt-5 gap-y-4">
                <div class="flex flex-col gap-y-4">
                    <div class="flex flex-col items-start gap-y-2 lg:items-center lg:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Applicant Name:</p>
                        <AdminInput v-model="name" type="text" class="w-full" placeholder="Name"/>
                    </div>
                    <div class="flex flex-col items-start gap-y-2 lg:items-center md:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Apply Position: </p>
                        <AdminInput v-model="applyPosition" type="text" class="w-full" placeholder="Position"/>
                    </div>
                    <div class="flex flex-col items-start gap-y-2 lg:items-center md:gap-x-2 lg:flex-row">
                        <p class="text-base font-semibold w-full md:w-1/2">Application Date: </p>
                        <AdminInput v-model="applicationDate" type="date" class="w-full" />
                    </div>
                    <div class="flex flex-col items-start gap-y-2">
                        <p class="text-base font-semibold w-full">Contact Information</p>
                        <span class="w-full flex flex-col items-start gap-y-4 md:gap-x-4 lg:items-center lg:gap-y-0 lg:flex-row">
                            <AdminInput v-model="email" type="email" class="w-full" placeholder="Email"/>
                            <AdminInput v-model="mobileNumber" type="text" class="w-full" placeholder="Mobile Number"/>
                        </span>
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <p class="infoTitle text-lg font-semibold lg:text-xl">On Board Details</p>
                        <textarea name="" id="" rows="3" class="w-full resize-none bg-transparent outline-none border-none text-base p-2 rounded-md"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </AdminModal>
</template>

<script setup>
import AdminModal from './AdminModal.vue';
import AdminInput from './AdminInput.vue'
import { ref } from 'vue'

const name = ref('');
const applyPosition = ref('');
const applicationDate = ref('');
const email = ref('');
const mobileNumber = ref('');

const modalSendInvitation = ref(null);
const modalSkillTest = ref(null);
const modalFinalInterview = ref(null);
const modalOnBoard = ref(null);

const toggleSendInvitation = ()=>{
    modalSendInvitation.value = !modalSendInvitation.value
}

const toggleSkillTest = ()=>{
    modalSkillTest.value = !modalSkillTest.value
}

const toggleFinalInterview = ()=>{
    modalFinalInterview.value = !modalFinalInterview.value
}

const toggleOnBoard = ()=>{
    modalOnBoard.value = !modalOnBoard.value
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
                filename: "recruitment.pdf",
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

.actionMenu{
    background: #F8FAFE;
}

.infoTitle {
    color: #173C8F;
}

textarea {
    background: #F8FAFE;
    color: #A6BFF7;
    border: 1.5px solid #A6BFF7;
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

.dashboardBody {
    width: calc(100% - 80px);
}

@media only screen 
    and (min-device-width: 280px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
    .dashboardBody {
        width: 100%;
    }
    .xs-size {
        display: none;
    }

    .btnAdd {
        width: 80%;
        padding: 0.5rem 1rem;
    }
}

@media only screen 
    and (min-device-width: 640px) 
    and (max-device-width: 1023px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1) {
    .dashboardBody {
        width: 100%;
    }
}

@media only screen 
    and (min-device-width: 712px) 
    and (max-device-width: 1023px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1) {
    .dashboardBody {
        width: 100%;
        overflow-x: auto;
    }
}
</style>