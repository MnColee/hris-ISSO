<template>
    <section class="w-full flex items-center">
        <article class="container mx-auto flex items-start justify-between lg:gap-x-4 xl:gap-x-14 w-full">
            <div class="w-full flex flex-col gap-y-4 lg:gap-y-5 mb-4">
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <p class="text-base font-semibold lg:text-lg">Employee Information</p>
                    <div class="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 lg:grid-cols-3">
                        <ApplicationInput v-model="date" type="date" placeholder="Birthday" class="italic w-full" />
                        <ApplicationInput v-model="birthPlace" type="text" placeholder="Birth Place" class="italic w-full" />
                        <ApplicationInput v-model="religion" type="text" placeholder="Religion" class="italic w-full" />
                        <ApplicationInput v-model="civilStatus" type="text" placeholder="Civil Status" class="italic w-full" />
                        <ApplicationInput v-model="height" type="text" placeholder="Height" class="italic w-full" />
                        <ApplicationInput v-model="weight" type="text" placeholder="Weight" class="italic w-full" />
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <p class="text-base font-semibold lg:text-lg">Address</p>
                    <div class="grid grid-cols-1 gap-4 w-full lg:grid-cols-2">
                        <textarea name="" id="" class="w-full resize-none bg-transparent outline-none border-none text-base p-2 rounded-md"></textarea>
                        <div class="flex flex-col gap-y-4">
                            <ApplicationInput v-model="email" type="email" placeholder="Email" class="italic w-full" />
                            <ApplicationInput v-model="mobileNum" type="text" placeholder="Mobile Number" class="italic w-full" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <p class="text-base font-semibold lg:text-lg">Emergency Contact</p>
                    <div class="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 lg:grid-cols-3">
                        <ApplicationInput v-model="guardian" type="text" placeholder="Guardian Name" class="italic w-full" />
                        <ApplicationInput v-model="contact" type="text" placeholder="Contact Number" class="italic w-full" />
                        <ApplicationInput v-model="relationship" type="text" placeholder="Relationship" class="italic w-full" />
                    </div>
                </div>
            </div>

        </article>
    </section>
</template>

<script setup>
import ApplicationInput from '../components/ApplicationInput.vue';
import { ref } from "vue"

const date = ref('')
const birthPlace = ref('')
const religion = ref('')
const civilStatus = ref('')
const height = ref('')
const weight = ref('')
const guardian = ref('')
const contact = ref('')
const relationship = ref('')
</script>

<style scoped>
.btn-secondary {
    background-color: #2563EB;
    color: white;
}

.btn-tertiary {
    background: #F8FAFE;
    border: 1.5px solid #A6BFF7;
    color: #A6BFF7;
}
.upload-icon {
    color: #2563EB;
}

textarea {
    background: #F8FAFE;
    color: #A6BFF7;
    border: 1.5px solid #A6BFF7;
}
</style>