<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <RouterLink :to="{ name: 'adminrecruitment'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Add Applicant</p>
                </div>

                <form action="" class="flex items-start justify-between gap-x-4 w-full">

                    <!--LEFT-->
                    <div class="w-96 h-auto flex flex-col gap-y-3">
                        <div class="bg-applicantForm w-full p-4 flex flex-col lg:gap-y-2.5 xl:gap-y-2">
                            <div class="relative h-40 w-full rounded-md overflow-hidden lg:h-44 xl:h-48">
                                <img src="/img/3.jpg" alt="img" class="h-52 w-full">
                                <button type="button" class="absolute bottom-1.5 right-1.5 bg-blue-600 rounded-md">
                                    <label for="img" class="bg-blue-600 text-white font-semibold rounded-md py-1 w-full cursor-pointer text-center px-2">				
                                        <i class="fa-solid fa-pen text-white text-xs"></i>
					                </label>
					                <input name="file" id="img" accept="image/*" class="hidden cursor-pointer" type="file"/>
                                </button>
                            </div>

                            <div class="w-full flex flex-col lg:gap-y-2.5 xl:gap-y-2">
                                <span class="flex flex-col gap-y-1">
                                    <p class="formTitle font-semibold">Applicant Name</p>
                                    <AdminInput v-model="fullName" type="text" placeholder="Full Name" />
                                </span>
                                <span class="flex flex-col gap-y-1">
                                    <p class="formTitle font-semibold">Apply Position</p>
                                    <AdminInput v-model="applyPosition" type="text" placeholder="Apply Position" />
                                </span>
                                <span class="flex flex-col gap-y-1">
                                    <p class="formTitle font-semibold">Application Date</p>
                                    <AdminInput v-model="applicationDate" type="date"/>
                                </span>
                                <span class="flex flex-col gap-y-1">
                                    <p class="formTitle font-semibold">Resume</p>
                                    <div>
                                        <label for="fileInput" type="button" class="btn-resume rounded-md py-1.5 w-full cursor-pointer text-center italic px-2">				
						                    <span class="w-full flex items-center justify-between">
                                                Resume
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="upload-icon font-bold w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                                </svg>
                                            </span>
					                    </label>
					                    <input name="file" id="fileInput" class="hidden cursor-pointer" type="file"/>
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div class="bg-applicantForm w-full p-4 flex flex-col gap-y-2 xl:py-3.5">
                            <div class="w-full flex flex-col lg:gap-y-1.5 xl:gap-y-1.5">
                                <p class="formTitle font-semibold text-base lg:text-lg">Recruitment Status</p>
                                <span class="flex items-center gap-x-2">
                                    <input type="checkbox">
                                    <p class="text-blue-600 text-base">For Interview</p>
                                </span>
                                <span class="flex items-center gap-x-2">
                                    <input type="checkbox">
                                    <p class="text-blue-600 text-base">Skill Test</p>
                                </span>
                                <span class="flex items-center gap-x-2">
                                    <input type="checkbox">
                                    <p class="text-blue-600 text-base">Final Interview</p>
                                </span>
                                <span class="flex items-center gap-x-2">
                                    <input type="checkbox">
                                    <p class="text-blue-600 text-base">On Board</p>
                                </span>
                                <div class="w-full flex items-center justify-center lg:mt-1 xl:mt-0.5">
                                    <button type="submit" class="py-1 w-full bg-blue-600 text-white text-base rounded-md lg:w-11/12">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!--RIGHT-->
                    <div class="w-full flex flex-col items-start gap-y-5">
                        <div class="bg-applicantForm w-full p-2 flex flex-col gap-y-3">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-base font-semibold lg:text-lg">Contact Information</p>
                                <span class="flex items-center gap-x-4 w-full">
                                    <AdminInput v-model="contact" type="text" class="w-full" placeholder="Contact Number"/>
                                    <AdminInput v-model="email" type="email" class="w-full" placeholder="Email"/>
                                </span>
                            </div>

                            <div class="flex flex-col gap-y-2">
                                <p class="text-base font-semibold lg:text-lg">In Case of Emergency</p>
                                <span class="flex items-center gap-x-4 w-full">
                                    <AdminInput v-model="name" type="text" class="w-full" placeholder="Name"/>
                                    <AdminInput v-model="contact" type="text" class="w-full" placeholder="Contact Number"/>
                                    <AdminInput v-model="relationship" type="text" class="w-full" placeholder="Relationship"/>
                                </span>
                            </div>
                        </div>

                        <div class="bg-applicantForm w-full p-2 flex flex-col gap-y-3">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-base font-semibold lg:text-lg">Address</p>
                                <textarea name="" id="" rows="3" class="resize-none p-1 rounded-md" placeholder="Address"></textarea>
                            </div>

                            <div class="flex items-start gap-x-4 w-full">
                                <div class="flex flex-col gap-y-2 w-full">
                                    <p class="text-base font-semibold lg:text-lg">City</p>
                                    <AdminInput v-model="city" type="text" class="w-full" placeholder="City"/>
                                </div>

                                <div class="flex flex-col gap-y-2 w-full">
                                    <p class="text-base font-semibold lg:text-lg">Province</p>
                                    <AdminInput v-model="province" type="text" class="w-full" placeholder="Province"/>
                                </div>
                            </div>
                        </div>

                        <div class="bg-applicantForm w-full p-2 flex flex-col gap-y-3">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-base font-semibold lg:text-lg">Educational Background</p>
                                <span class="flex items-center gap-x-4 w-full">
                                    <div class="w-full">
                                        <p class="text-base font-semibold">Elementary</p>
                                        <AdminInput v-model="elementary" type="text" class="w-full" placeholder="Elementary"/>
                                    </div>
                                    <div class="w-full lg:w-1/2">
                                        <p class="text-base font-semibold">School Years</p>
                                        <AdminInput v-model="schoolYears" type="text" class="w-full" placeholder="School Years"/>
                                    </div>
                                </span>

                                <span class="flex items-center gap-x-4 w-full">
                                    <div class="w-full">
                                        <p class="text-base font-semibold">High School</p>
                                        <AdminInput v-model="highSchool" type="text" class="w-full" placeholder="High School"/>
                                    </div>
                                    <div class="w-full lg:w-1/2">
                                        <p class="text-base font-semibold">School Years</p>
                                        <AdminInput v-model="schoolYears" type="text" class="w-full" placeholder="School Years"/>
                                    </div>
                                </span>

                                <span class="flex items-center gap-x-4 w-full">
                                    <div class="w-full">
                                        <p class="text-base font-semibold">College</p>
                                        <AdminInput v-model="college" type="text" class="w-full" placeholder="College"/>
                                    </div>
                                    <div class="w-full lg:w-1/2">
                                        <p class="text-base font-semibold">School Years</p>
                                        <AdminInput v-model="schoolYears" type="text" class="w-full" placeholder="School Years"/>
                                    </div>
                                </span>

                                <div class="w-full">
                                    <p class="text-base font-semibold">Course</p>
                                    <AdminInput v-model="course" type="text" class="w-full" placeholder="Course"/>
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex items-center justify-center">
                            <button type="submit" class="py-2 w-full bg-blue-600 text-white text-base rounded-md lg:w-1/4">Add Applicant</button>
                        </div>
                    </div>
                </form>
            </article>
        </section>
    </main>
</template>

<script setup>
import AdminInput from '../components/AdminInput.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import { ref } from 'vue'

const fullName = ref('')
const applyPosition = ref('')
const applicationDate = ref('')

const contact = ref('')
const email = ref('')
const name = ref('')
const relationship = ref('')

const city = ref('')
const province = ref('')

const elementary = ref('')
const highSchool = ref('')
const college = ref('')
const schoolYears = ref('')
const course = ref('')
</script>

<style scoped>

.bg-applicantForm {
    background: #E9EFFD;
    border: 1px solid #A6BFF7;
    border-radius: 10px;
}
.formTitle {
    color: #2563EB;
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

.btn-resume {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    color: #A6BFF7;
}
</style>