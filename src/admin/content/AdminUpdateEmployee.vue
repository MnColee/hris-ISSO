<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <RouterLink :to="{ name: 'adminemployee'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Update Employee</p>
                </div>

                <form action="" class="flex flex-col items-start w-full gap-y-6">

                    <div class="flex items-start justify-between w-full gap-x-6 border-b-2 border-indigo-900">
                        <div class="w-full flex flex-col gap-y-4 pb-6">
                            <p class="infoTitle text-lg font-semibold lg:text-xl">General Info</p>
                            <div class="w-full grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">First Name</p>
                                    <AdminInput v-model="firstName" type="text" placeholder="First Name" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">Last Name</p>
                                    <AdminInput v-model="lastName" type="text" placeholder="Last Name" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">Middle Name</p>
                                    <AdminInput v-model="middleName" type="text" placeholder="Middle Name" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">Birthday</p>
                                    <AdminInput v-model="birthDay" type="date" placeholder="Birthday" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">Birth Place</p>
                                    <AdminInput v-model="birthPlace" type="text" placeholder="Birth Place" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">Religion</p>
                                    <AdminInput v-model="religion" type="text" placeholder="Religion" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">Civil Status</p>
                                    <AdminInput v-model="civilStatus" type="text" placeholder="Civil Status" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">Pag-ibig No.</p>
                                    <AdminInput v-model="pagIbig" type="text" placeholder="Pag-ibig No." />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">PhilHEALTH</p>
                                    <AdminInput v-model="philHealth" type="text" placeholder="PhilHealth" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">TIN</p>
                                    <AdminInput v-model="tinNum" type="text" placeholder="TIN" />
                                </div>
                                <div class="w-full flex flex-col gap-y-2">
                                    <p class="text-base font-semibold">SSS</p>
                                    <AdminInput v-model="sssNum" type="text" placeholder="SSS" />
                                </div>
                            </div>
                        </div>

                        <!---UPLOAD PHOTO--->
                        <div class="w-full p-4 flex flex-col gap-y-4 lg:w-72 ">
                            <div class="h-48 w-full rounded-lg overflow-hidden">
                                <img src="/img/3.jpg" alt="upload" class="h-full w-full">
                            </div>
                            <div>
                                <label for="fileInput" type="button" class="bg-blue-600 text-white font-semibold rounded-md py-1.5 w-full cursor-pointer text-center px-2">				
						            Upload
					            </label>
					            <input name="file" id="fileInput" class="hidden cursor-pointer" type="file"/>
                            </div>
                        </div>
                    </div>

                    <!---CONTACT INFORMATION--->
                    <div class="w-full flex flex-col gap-y-4 border-b-2 border-indigo-900 pb-6">
                        <p class="infoTitle text-lg font-semibold lg:text-xl">Contact Information</p>
                        <div class="w-full grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Contact Number</p>
                                <AdminInput v-model="contact" type="text" placeholder="Contact Number" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Email</p>
                                <AdminInput v-model="email" type="email" placeholder="Email" />
                            </div>
                        </div>
                        <p class="infoTitle text-lg font-semibold lg:text-xl">In Case of Emergency Contact</p>
                        <div class="w-full flex items-start justify-between gap-x-6">
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Full Name</p>
                                <AdminInput v-model="fullName" type="text" placeholder="Full Name" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Contact Number</p>
                                <AdminInput v-model="contact" type="text" placeholder="Contact Number" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Relationship</p>
                                <AdminInput v-model="relationship" type="text" placeholder="Relationship" />
                            </div>
                        </div>
                    </div>

                    <!---ADDRESS--->
                    <div class="w-full flex flex-col gap-y-4 border-b-2 border-indigo-900 pb-6">
                        <p class="infoTitle text-lg font-semibold lg:text-xl">Address</p>
                        <div class="w-full grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">City</p>
                                <AdminInput v-model="city" type="text" placeholder="City" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Province</p>
                                <AdminInput v-model="province" type="text" placeholder="Province" />
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-y-2">
                            <p class="text-base font-semibold">Street</p>
                            <textarea rows="2" class="resize-none w-full rounded-md px-2 py-1 outline-none" placeholder="Street"></textarea>
                        </div>
                    </div>

                    <!---JOB INFORMATION--->
                    <div class="w-full flex flex-col gap-y-4 border-b-2 border-indigo-900 pb-6">
                        <p class="infoTitle text-lg font-semibold lg:text-xl">Job Information</p>
                        <div class="w-full grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Position</p>
                                <AdminInput v-model="position" type="text" placeholder="Position" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Employment Status</p>
                                <select class="p-1.5 rounded-md">
                                    <option value="">Regular</option>
                                    <option value="">Trainee</option>
                                    <option value="">Project Based</option>
                                    <option value="">On Call</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Date Hired</p>
                                <AdminInput v-model="dateHired" type="text" placeholder="Date Hired" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Deployment</p>
                                <AdminInput v-model="deployment" type="text" placeholder="Deployment" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Company</p>
                                <AdminInput v-model="company" type="text" placeholder="Company" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Appraisal</p>
                                <AdminInput v-model="appraisal" type="text" placeholder="Appraisal" />
                            </div>
                        </div>
                    </div>

                    <!---EDUCATIONAL BACKGROUND--->
                    <div class="w-full flex flex-col gap-y-4 pb-6">
                        <p class="infoTitle text-lg font-semibold lg:text-xl">Educational Background</p>
                        <div class="w-full flex items-center gap-x-6">
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Elementary</p>
                                <AdminInput v-model="elementary" type="text" placeholder="Elementary" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2 lg:w-1/2">
                                <p class="text-base font-semibold">School Years</p>
                                <AdminInput v-model="schoolYear" type="text" placeholder="School Year" />
                            </div>
                        </div>
                        <div class="w-full flex items-center gap-x-6">
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">High School</p>
                                <AdminInput v-model="highSchool" type="text" placeholder="Elementary" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2 lg:w-1/2">
                                <p class="text-base font-semibold">School Years</p>
                                <AdminInput v-model="schoolYear" type="text" placeholder="School Year" />
                            </div>
                        </div>
                        <div class="w-full flex items-center gap-x-6">
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">College</p>
                                <AdminInput v-model="college" type="text" placeholder="Elementary" />
                            </div>
                            <div class="w-full flex flex-col gap-y-2 lg:w-1/2">
                                <p class="text-base font-semibold">School Years</p>
                                <AdminInput v-model="schoolYear" type="text" placeholder="School Year" />
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-y-2">
                            <AdminInput v-model="course" type="text" placeholder="Course" />
                        </div>
                    </div>

                    <div class="w-full flex items-center justify-center">
                        <button type="submit" class="py-2 w-full bg-blue-600 text-white text-base rounded-md lg:w-1/4">Update</button>
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

const firstName = ref('')
const lastName = ref('')
const middleName = ref('')
const birthDay = ref('')
const birthPlace = ref('')
const religion = ref('')
const civilStatus = ref('')
const pagIbig = ref('')
const philHealth = ref('')
const tinNum = ref('')
const sssNum = ref('')

const contact = ref('')
const email = ref('')
const fullName = ref('')
const relationship = ref('')

const city = ref('')
const province = ref('')

const position = ref('')
const dateHired = ref('')
const deployment = ref('')
const company = ref('')
const appraisal = ref('')
</script>

<style scoped>
.infoTitle {
    color: #173C8F;
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

select {
    background: #F8FAFE;
    border: 1.4px solid #A6BFF7;
    color: #A6BFF7;
}
</style>