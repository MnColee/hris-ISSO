<template>
    <section class="w-full flex items-center">
        <article class="container mx-auto flex items-start justify-between lg:gap-x-4 xl:gap-x-14 w-full">
            <div class="flex flex-col gap-y-2 w-full h-full lg:w-64">
                <p class="text-base font-semibold lg:text-lg">Upload 2x2 Picture</p>
                <div class="w-full flex flex-col gap-y-2">
					<div>
						<img id="image" src="/img/profile.jpg" alt="applicant-profile-photo" class="h-40 lg:h-52 w-full" />
					</div>	
					<label for="photoInput" type="button" class="btn-secondary rounded-md py-1.5 w-full cursor-pointer text-center">				
						Upload
					</label>
					<input name="photo" id="photoInput" accept="image/*" class="hidden cursor-pointer" type="file"/>
				</div>
            </div>

            <div class="w-full flex flex-col gap-y-4 lg:gap-y-5 mb-4">
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <p class="text-base font-semibold lg:text-lg">Applicant Information</p>
                    <div class="grid grid-cols-1 gap-4 w-full lg:grid-cols-2">
                        <ApplicationInput v-model="firstName" type="text" placeholder="First Name" class="w-full" />
                        <ApplicationInput v-model="lastName" type="text" placeholder="Last Name" class="w-full" />
                        <ApplicationInput v-model="middleName" type="text" placeholder="Middle Name" class="w-full" />
                    </div>
                </div>
                <div class="flex flex-col items-start justify-start gap-y-2 w-full">
                    <p class="text-base font-semibold lg:text-lg">Contact Information</p>
                    <div class="grid grid-cols-1 gap-4 w-full lg:grid-cols-2">
                        <ApplicationInput v-model="email" type="email" placeholder="Email" class="w-full" />
                        <ApplicationInput v-model="mobileNum" type="text" placeholder="Mobile Number" class="w-full" />
                    </div>
                </div>
                <div class="w-full flex items-center justify-between gap-x-4">
                    <div class="w-full flex flex-col gap-y-2">
                        <p class="text-base font-semibold lg:text-lg">Upload Resume</p>
                        <div>
                            <label for="fileInput" type="button" class="btn-tertiary rounded-md py-1.5 w-full cursor-pointer text-center italic px-2">				
						        <span class="w-full flex items-center justify-between">
                                    Upload Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="upload-icon font-bold w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                    </svg>
                                </span>
					        </label>
					        <input name="file" id="fileInput" class="hidden cursor-pointer" type="file"/>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-y-2">
                        <p class="text-base font-semibold lg:text-lg">Applied Position</p>
                        <ApplicationInput v-model="position" type="text" placeholder="Position" class="w-full" />
                    </div>
                </div>
            </div>

        </article>
    </section>
</template>

<script setup>
import ApplicationInput from '../components/ApplicationInput.vue';
import { ref } from "vue"

const firstName = ref('')
const lastName = ref('')
const middleName = ref('')
const email = ref('')
const mobileNum = ref('')
const position = ref('')
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
</style>