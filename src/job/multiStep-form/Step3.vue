<script setup>
import ApplicationInput from '../components/ApplicationInput.vue';
import JobModal from '../components/JobModal.vue';
import { ref } from "vue"

const school = ref('')
const schoolYear = ref('')
const course = ref('')
const trainingTitle = ref('')
const years = ref('')

const modalActive = ref(null);
const toggleModal = ()=>{
  modalActive.value = !modalActive.value
}
</script>

<template>
    <section class="w-full flex items-center">
        <article class="container mx-auto flex items-start justify-between lg:gap-x-4 xl:gap-x-14 w-full">
            <div class="w-full flex flex-col gap-y-4 lg:gap-y-5 mb-4">
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <p class="text-base font-semibold lg:text-lg">Elementary</p>
                    <div class="flex items-center gap-4 w-full">
                        <ApplicationInput v-model="school" type="text" placeholder="Name of School" class="italic w-full" />
                        <ApplicationInput v-model="schoolYear" type="text" placeholder="School Years" class="italic w-1/2" />
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <p class="text-base font-semibold lg:text-lg">High School</p>
                    <div class="flex items-center gap-4 w-full">
                        <ApplicationInput v-model="school" type="text" placeholder="Name of School" class="italic w-full" />
                        <ApplicationInput v-model="schoolYear" type="text" placeholder="School Years" class="italic w-1/2" />
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <p class="text-base font-semibold lg:text-lg">College</p>
                    <div class="flex flex-col w-full gap-y-4">
                        <div class="flex items-center gap-4 w-full">
                            <ApplicationInput v-model="school" type="text" placeholder="Name of School" class="italic w-full" />
                            <ApplicationInput v-model="schoolYear" type="text" placeholder="School Years" class="italic w-1/2" />
                        </div>
                        <ApplicationInput v-model="course" type="text" placeholder="Course" class="italic w-full" />
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <span class="flex items-center gap-x-2.5">
                        <p class="text-base font-semibold lg:text-lg">Seminars and Training Attended</p>
                        <button type="button" @click="toggleModal">
                            <i class="fa-regular fa-square-plus upload-icon text-base lg:text-lg xl:text-xl"></i>
                        </button>
                    </span>
                    <div class="flex flex-col w-full gap-y-4">
                        <div class="semTrai px-4 py-2 rounded-md">
                            <ul class="flex items-center list-inside list-disc italic gap-x-10">
                                <li>Effective Communication Trainers - 2020</li>
                                <li>Effective Communication Trainers - 2020</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <JobModal @close="toggleModal" :modalActive="modalActive">
            <div class="modal-content">
                <div class="modal-header px-3 lg:px-5 py-2">
                    <h1 class="text-lg capitalize font-bold lg:text-xl">Add Seminars</h1>
                </div>
                <div class="px-3 lg:px-5 pt-5 flex flex-col gap-y-4">
                    <ApplicationInput v-model="trainingTitle" placeholder="Training Title" />
                    <ApplicationInput v-model="years" placeholder="Years"/>
                </div>
            </div>
        </JobModal>
    </section>
</template>

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