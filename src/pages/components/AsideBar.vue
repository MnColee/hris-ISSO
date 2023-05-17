<template>
    <aside class="asideBar sticky left-0 top-0 transition-all duration-300 ease-out h-auto w-11/12 lg:w-80 xl:w-96">
        <div class="asideBarHeight flex flex-col items-start w-full h-screen gap-y-4 pt-3 pb-1 px-2">

            <div class="profileBox w-full p-5 flex flex-col items-center gap-y-2 lg:py-2.5 lg:px-4 xl:px-6">
                <div class="relative h-40 w-full overflow-hidden rounded-lg lg:h-44 xl:h-48">
                    <img src="/img/1.jpg" alt="employee-img" class="h-full w-full">
                    <button type="button" class="absolute bottom-2 right-2 bg-blue-600 text-white text-sm rounded">
                        <label for="img" class="bg-blue-600 text-white font-semibold rounded-md py-1 w-full cursor-pointer text-center px-2">				
                            <i class="fa-solid fa-pencil text-xs"></i>
                        </label>
                        <input name="file" id="img" accept="image/*" class="hidden cursor-pointer" type="file"/>
                    </button>
                </div>
                <figcaption class="w-full flex flex-col items-center lg:gap-y-1">
                    <p class="text-base font-bold lg:text-sm xl:text-base">Mikaela San Diego</p>
                    <p class="text-base font-medium lg:text-sm xl:text-base">UX/UI Designer</p>
                    <span class="flex items-center gap-x-2">
                        <p class="text-base font-semibold lg:text-sm xl:text-base">Dated Hired :</p>
                        <p class="text-base lg:text-sm xl:text-base">July 12, 2020</p>
                    </span>
                    <span class="flex items-center gap-x-2">
                        <p class="text-base font-semibold lg:text-sm xl:text-base">Status :</p>
                        <p class="text-base lg:text-sm xl:text-base">Regular</p>
                    </span>
                </figcaption>
            </div>

            <div class="w-full flex flex-col gap-y-2">
                <p class="text-base font-bold lg:text-sm xl:text-base">Available Leave</p>
                <div class="w-full flex flex-col gap-y-2">
                    <span class="leaveBox w-full flex items-center justify-center text-center gap-x-1 py-1.5">
                        <p class="text-base uppercase font-medium lg:text-sm xl:text-base">Offset :</p>
                        <p class="italic text-base lg:text-sm xl:text-base">1</p>
                    </span>
                    <span class="leaveBox w-full flex items-center justify-center text-center gap-x-1 py-1.5">
                        <p class="text-base uppercase font-medium lg:text-sm xl:text-base">SIL :</p>
                        <p class="italic text-base lg:text-sm xl:text-base">5</p>
                    </span>
                </div>
            </div>

            <div class="w-full flex flex-col gap-y-2 pt-2">
                <SecondaryButton @click="toggleEmployeeFileLeave" buttonText="File Leave" class="rounded-md py-1.5 text-base" />
                <RouterLink :to="{ name: 'employeeaccomplishmentreport'}" class="bg-blue-600 text-white rounded-md text-center text-base py-1.5">Accomplishment Report</RouterLink>
            </div>

        </div>
    </aside>


    <EmployeeModal @close="toggleEmployeeFileLeave" :modalEmployee="modalEmployeeFileLeave">
        <div class="modal-content">
            <div class="modal-header w-full flex items-center justify-between lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-lg">File Leave</h1>
            </div>
            <div class="w-full flex flex-col lg:px-5 px-3 py-5 gap-y-4">
                <div class="w-full flex items-center gap-x-2">
                    <p class="text-base font-bold xl:text-xl">Available Leave</p>
                    <div class="w-full flex items-center gap-x-4">
                        <div class="fileLeaveBox rounded-md w-full flex items-center justify-center gap-x-2 py-2 xl:py-3">
                            <p class="text-base font-bold uppercase">SIL:</p>
                            <p class="text-base italic">10</p>
                        </div>
                        <div class="fileLeaveBox rounded-md w-full flex items-center justify-center gap-x-2 py-2 xl:py-3">
                            <p class="text-base font-bold uppercase">Offset:</p>
                            <p class="text-base italic">10</p>
                        </div> 
                    </div>
                </div>

                <div class="flex flex-col items-start gap-y-1">
                    <p class="text-base font-bold">Select Leave</p>
                    <select class="w-full p-2 border border-blue-300 rounded-lg flex items-center gap-x-2 text-blue-300 outline-none bg-transparent">
                        <option value="">Offset</option>
                    </select>
                </div>

                <div class="flex flex-col items-start gap-y-1">
                    <p class="text-base font-bold">Reason</p>
                    <textarea name="" id="" rows="3" class="w-full resize-none text-base py-1 px-2 rounded-md outline-none" placeholder="reason"></textarea>
                </div>

                <div class="w-full flex flex-col items-start gap-y-1">
                    <p class="text-base font-bold">Select Date</p>
                    <EmployeeInput v-model="date" type="date" class="w-full" />
                </div>
            </div>
        </div>
    </EmployeeModal>
</template>

<script setup>
import SecondaryButton from '../../components/SecondaryButton.vue'
import EmployeeModal from '../components/EmployeeModal.vue'
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import EmployeeInput from './EmployeeInput.vue';

const date = ref('')
const modalEmployeeFileLeave = ref(null)

const toggleEmployeeFileLeave = ()=> {
    modalEmployeeFileLeave.value = !modalEmployeeFileLeave.value
}
</script>

<style scoped>
    .asideBar {
        background: #FBFCFF;
    }

    .asideBarHeight {
        border-right: 4px solid rgba(166, 191, 247, 0.5);
    }
    .text-smaller {
        font-size: 0.64rem;
    }
    .asideBar-hover:hover {
        background: #E9EFFD;
        border-radius: 5px;
    }

    .asideBar {
        height: 85vh;
    }

    .asideBar::-webkit-scrollbar {
        display: none;
    }

    .asideBar {
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
    .profileBox {
        background: linear-gradient(205.47deg, #A6BFF7 14.22%, rgba(207, 220, 251, 0.2) 85.49%);
        border-radius: 10px;
    }
    .leaveBox {
        background: linear-gradient(91.66deg, #CAD9FA 0%, rgba(202, 217, 250, 0.5) 110.54%);
        border-radius: 5px;
    }

    .modal-header {
        border-bottom: 3px solid #173C8F;
    }

    .fileLeaveBox {
        background: linear-gradient(205.98deg, #A6BFF7 -61.63%, rgba(166, 191, 247, 0.5) 73.95%);
    }

    textarea {
        background: #F8FAFE;
        border: 1px solid #A6BFF7;
        color: #A6BFF7;
    }

    textarea::placeholder { 
        color: #A6BFF7;
        opacity: 1;
        font-style: italic;
    }

    textarea:-ms-textarea-placeholder {
        color: #A6BFF7;
        font-style: italic;
    }

    textarea::-ms-textarea-placeholder {
        color: #A6BFF7;
        font-style: italic;
    }
</style>