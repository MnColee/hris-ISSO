<template>
    <main class="w-full flex flex-col items-start">
        <Navigation />
        <section class="w-full mt-16">
            <article class="w-full flex items-start">
                <AsideBar />
                <article class="w-full lg:py-4 lg:px-8 xl:p-8">
                    <div class="flex items-center justify-center w-full mb-5">
                        <RouterLink :to="{ name: 'employeeaccomplishmentreport'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                        <p class="capitalize text-black font-bold w-full text-center text-2xl lg:text-3xl">Daily Accomplishment</p>
                    </div>

                    <div class="w-full flex flex-col gap-y-2 lg:gap-y-6">
                        <div class="w-full grid grid-cols-1 lg:gap-x-7 lg:gap-y-4 lg:grid-cols-2">
                            <EmployeeInput v-model="name" type="text" placeholder="Name" />
                            <EmployeeInput v-model="position" type="text" placeholder="Position" />
                            <EmployeeInput v-model="date" type="date" />
                        </div>

                        <div class="w-full flex flex-col gap-y-3">
                            <div class="w-full flex flex-col gap-y-2 mt-1.5">
                                <span class="w-full flex items-center gap-x-2">
                                    <p class="text-base font-semibold">Task Undertaken / Completed Today</p>
                                    <button @click="toggleCompletedTask">
                                        <i class="fa-regular fa-square-plus text-blue-500"></i>
                                    </button>
                                </span>
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
                                <span class="w-full flex items-center gap-x-2">
                                    <p class="text-base font-semibold">In - Process / For Completion</p>
                                    <button @click="toggleComplition">
                                        <i class="fa-regular fa-square-plus text-blue-500"></i>
                                    </button>
                                </span>
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
                                <span class="w-full flex items-center gap-x-2">
                                    <p class="text-base font-semibold">( Planned ) Task On The Next Day/s</p>
                                    <button @click="toggleNextDayTask">
                                        <i class="fa-regular fa-square-plus text-blue-500"></i>
                                    </button>
                                </span>
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

                        <div class="w-full text-center">
                            <button type="submit" class="bg-blue-600 text-base text-white py-2 px-20 rounded-md mt-8">Submit</button>
                        </div>
                    </div>
                </article>
            </article>
        </section>
    </main>

    <!---MODALS--->

    <DailyReportModal @close="toggleCompletedTask" :modalDailyReport="modalCompletedTask">
        <div class="modal-content">
            <div class="modal-header w-full flex items-center justify-between lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-lg">Task Undertaken / Completed Today</h1>
            </div>
            <div class="lg:px-5 px-3 pt-5 gap-y-4">
                <div class="w-full flex flex-col gap-y-5 sm:gap-y-8 lg:gap-y-2">
                    <div class="w-full flex items-center justify-between gap-x-4">
                        <EmployeeInput type="text" class="w-full"/>
                        <button class="text-base text-white bg-blue-600 py-1 rounded-md px-8 lg:w-1/5">Add</button>
                    </div>

                    <div class="scrollbarHide h-96 overflow-auto sm:h-80 lg:h-80">
                    
                    </div>
                </div>
                <div class="w-full flex items-center justify-center py-4 gap-x-4">
                    <SecondaryButton buttonText="Submit" class="py-1 w-3/4 rounded-md"/>
                </div>
            </div>
        </div>
    </DailyReportModal>

    <DailyReportModal @close="toggleComplition" :modalDailyReport="modalComplition">
        <div class="modal-content">
            <div class="modal-header w-full flex items-center justify-between lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-lg">In - Process / For Completion</h1>
            </div>
            <div class="lg:px-5 px-3 pt-5 gap-y-4">
                <div class="w-full flex flex-col gap-y-5 sm:gap-y-8 lg:gap-y-2">
                    <div class="w-full flex items-center justify-between gap-x-4">
                        <EmployeeInput type="text" class="w-full"/>
                        <button class="text-base text-white bg-blue-600 py-1 rounded-md px-8 lg:w-1/5">Add</button>
                    </div>

                    <div class="scrollbarHide h-96 overflow-auto sm:h-80 lg:h-80">
                    
                    </div>
                </div>
                <div class="w-full flex items-center justify-center py-4 gap-x-4">
                    <SecondaryButton buttonText="Submit" class="py-1 w-3/4 rounded-md"/>
                </div>
            </div>
        </div>
    </DailyReportModal>

    <DailyReportModal @close="toggleNextDayTask" :modalDailyReport="modalNextDayTask">
        <div class="modal-content">
            <div class="modal-header w-full flex items-center justify-between lg:px-5 px-3 py-2">
                <h1 class="text-lg capitalize font-bold lg:text-lg">( Planned ) Task On The Next Day/s</h1>
            </div>
            <div class="lg:px-5 px-3 pt-5 gap-y-4">
                <div class="w-full flex flex-col gap-y-5 sm:gap-y-8 lg:gap-y-2">
                    <div class="w-full flex items-center justify-between gap-x-4">
                        <EmployeeInput type="text" class="w-full"/>
                        <button class="text-base text-white bg-blue-600 py-1 rounded-md px-8 lg:w-1/5">Add</button>
                    </div>

                    <div class="scrollbarHide h-96 overflow-auto sm:h-80 lg:h-80">
                    
                    </div>
                </div>
                <div class="w-full flex items-center justify-center py-4 gap-x-4">
                    <SecondaryButton buttonText="Submit" class="py-1 w-3/4 rounded-md"/>
                </div>
            </div>
        </div>
    </DailyReportModal>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import AsideBar from '../components/AsideBar.vue'
import EmployeeInput from '../components/EmployeeInput.vue';
import DailyReportModal from '../components/DailyReportModal.vue';
import SecondaryButton from '../../components/SecondaryButton.vue';
import { ref } from 'vue'

const name = ref('')
const position = ref('')
const date = ref('')

const modalCompletedTask = ref(null);
const modalComplition = ref(null);
const modalNextDayTask = ref(null);

const toggleCompletedTask = ()=>{
    modalCompletedTask.value = !modalCompletedTask.value
}

const toggleComplition = ()=>{
    modalComplition.value = !modalComplition.value
}

const toggleNextDayTask = ()=>{
    modalNextDayTask.value = !modalNextDayTask.value
}
</script>

<style scoped>
.dr-inputField {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    color: #A6BFF7;
}

.modal-header {
    border-bottom: 3px solid #173C8F;
}

.scrollbarHide::-webkit-scrollbar {
    display: none;
}
</style>
