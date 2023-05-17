<template>
    <section class="w-full flex items-start lg:h-96">
        <article class="container mx-auto flex items-start lg:gap-x-4 xl:gap-x-14 w-full">
            <div class="w-full flex flex-col gap-y-4 lg:gap-y-5 mb-4">
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <span class="flex items-center gap-x-2.5">
                        <p class="text-base font-semibold lg:text-lg">Work History</p>
                        <button type="button" @click="toggleWorkHistory">
                            <i class="fa-regular fa-square-plus upload-icon text-base lg:text-lg xl:text-xl"></i>
                        </button>
                    </span>
                    <div class="flex flex-col w-full gap-y-4">
                        <div class="semTrai px-4 py-2 rounded-md">
                            <ul class="flex items-center list-inside list-disc italic gap-x-10">
                                <li>2020 - 2021 / Effective Communication Trainers / Web Designer</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <span class="flex items-center gap-x-2.5">
                        <p class="text-base font-semibold lg:text-lg">References</p>
                        <button type="button" @click="toggleReferrence">
                            <i class="fa-regular fa-square-plus upload-icon text-base lg:text-lg xl:text-xl"></i>
                        </button>
                    </span>
                    <div class="flex flex-col w-full gap-y-4">
                        <div class="semTrai px-4 py-2 rounded-md">
                            <ul class="flex items-center list-inside list-disc italic gap-x-10">
                                <li>Edward Calisi / 0123456789 / IT Technician</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <!--MODALS-->

        <JobModal @close="toggleWorkHistory" :modalActive="modalWorkHistory">
            <div class="modal-content">
                <div class="modal-header lg:px-5 px-3 py-2">
                    <h1 class="text-lg capitalize font-bold lg:text-xl">Add Work History</h1>
                </div>
                <div class="lg:px-5 px-3 pt-5 flex flex-col gap-y-4">
                    <ApplicationInput v-model="year" placeholder="Year" />
                    <ApplicationInput v-model="company" placeholder="Company"/>
                    <ApplicationInput v-model="position" placeholder="Position"/>
                </div>
            </div>
        </JobModal>

        <JobModal @close="toggleReferrence" :modalActive="modalReferrence">
            <div class="modal-content">
                <div class="modal-header lg:px-5 px-3 py-2">
                    <h1 class="text-lg capitalize font-bold lg:text-xl">Add References</h1>
                </div>
                <div class="lg:px-5 px-3 pt-5 flex flex-col gap-y-4">
                    <ApplicationInput v-model="name" placeholder="Name" />
                    <ApplicationInput v-model="contact" placeholder="Contact"/>
                    <ApplicationInput v-model="job" placeholder="Job"/>
                </div>
            </div>
        </JobModal>
    </section>
</template>

<script setup>
import JobModal from '../components/JobModal.vue';
import ApplicationInput from '../components/ApplicationInput.vue';
import { ref } from "vue"

const year = ref('')
const company = ref('')
const position = ref('')
const name = ref('')
const contact = ref('')
const job = ref('')

const modalReferrence = ref(null);
const modalWorkHistory = ref(null);

const toggleReferrence = ()=>{
    modalReferrence.value = !modalReferrence.value
}

const toggleWorkHistory = ()=>{
    modalWorkHistory.value = !modalWorkHistory.value
}
</script>


<style scoped>
.upload-icon {
    color: #2563EB;
}

.semTrai {
    background: #F8FAFE;
    color: black;
    border: 1.5px solid #A6BFF7;
}
.modal-header {
    border-bottom: 3px solid #173C8F;
}
</style>