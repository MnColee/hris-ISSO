<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <RouterLink :to="{ name: 'adminrecruitment'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">View Application</p>
                </div>

                <form action="" class="flex items-start justify-between gap-x-4 w-full">

                    <!--LEFT-->
                    <div class="w-96 h-auto flex flex-col lg:gap-y-3.5 xl:gap-y-3">
                        <div class="bg-applicantForm w-full p-4 flex flex-col lg:gap-y-2 xl:gap-y-2">
                            <div class="relative h-40 w-full rounded-md overflow-hidden lg:h-44 xl:h-48">
                                <img src="/img/3.jpg" alt="img" class="h-52 w-full">
                            </div>

                            <div class="w-full flex flex-col lg:gap-y-2.5 xl:gap-y-2">
                                <span class="flex flex-col gap-y-1">
                                    <p class="formTitle font-semibold">Applicant Name</p>
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>Juan Dela Cruz</p>
                                    </div>      
                                </span>
                                <span class="flex flex-col gap-y-1">
                                    <p class="formTitle font-semibold">Apply Position</p>
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>Web Designer</p>
                                    </div> 
                                </span>
                                <span class="flex flex-col gap-y-1">
                                    <p class="formTitle font-semibold">Application Date</p>
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>02/22/23</p>
                                    </div> 
                                </span>
                                <span class="flex flex-col gap-y-1">
                                    <p class="formTitle font-semibold">Resume</p>
                                    <div>
                                        <label for="fileInput" type="button" class="btn-resume rounded-md py-1.5 w-full cursor-pointer text-center italic px-2">				
						                    <span class="w-full flex items-center justify-between">
                                                Resume
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="upload-icon font-bold w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                                </svg>
                                            </span>
					                    </label>
					                    <input name="file" id="fileInput" class="hidden cursor-pointer" type="file"/>
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div class="bg-applicantForm w-full p-4 flex flex-col lg:gap-y-2 lg:py-2.5 xl:py-3">
                            <div class="w-full flex flex-col lg:gap-y-1.5 xl:gap-y-1">
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
                            </div>
                        </div>
                    </div>



                    <!--RIGHT-->
                    <div class="w-full flex flex-col items-start gap-y-5">
                        <div class="bg-applicantForm w-full p-2 flex flex-col gap-y-3">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-base font-semibold lg:text-lg">Contact Information</p>
                                <span class="flex items-center gap-x-4 w-full">
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>09123456789</p>
                                    </div>
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>juan_delacruz@gmail.com</p>
                                    </div> 
                                </span>
                            </div>

                            <div class="flex flex-col gap-y-2">
                                <p class="text-base font-semibold lg:text-lg">In Case of Emergency</p>
                                <span class="flex items-center gap-x-4 w-full">
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>Lucio Dela Cruz</p>
                                    </div> 
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>09876543212</p>
                                    </div> 
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>Father</p>
                                    </div> 
                                </span>
                            </div>
                        </div>

                        <div class="bg-applicantForm w-full p-2 flex flex-col gap-y-3">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-base font-semibold lg:text-lg">Address</p>
                                <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                    <p>Block 2 Lot 7, Villa Esperanza, 2 Molino Rd, Bacoor, 4102 Cavite</p>
                                </div> 
                            </div>

                            <div class="flex items-start gap-x-4 w-full">
                                <div class="flex flex-col gap-y-2 w-full">
                                    <p class="text-base font-semibold lg:text-lg">City</p>
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>Cavite City</p>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-y-2 w-full">
                                    <p class="text-base font-semibold lg:text-lg">Province</p>
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>Bicol, Albay</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-applicantForm w-full p-2 flex flex-col gap-y-3">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-base font-semibold lg:text-lg">Educational Background</p>
                                <span class="flex items-center gap-x-4 w-full">
                                    <div class="w-full">
                                        <p class="text-base font-semibold">Elementary</p>
                                        <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                            <p>Bacoor City Elementary School</p>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-1/2">
                                        <p class="text-base font-semibold">School Years</p>
                                        <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                            <p>2000-2007</p>
                                        </div>
                                    </div>
                                </span>

                                <span class="flex items-center gap-x-4 w-full">
                                    <div class="w-full">
                                        <p class="text-base font-semibold">High School</p>
                                        <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                            <p>Bacoor National High School</p>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-1/2">
                                        <p class="text-base font-semibold">School Years</p>
                                        <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                            <p>2007-2011</p>
                                        </div>
                                    </div>
                                </span>

                                <span class="flex items-center gap-x-4 w-full">
                                    <div class="w-full">
                                        <p class="text-base font-semibold">College</p>
                                        <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                            <p>St. Dominic College of Asia</p>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-1/2">
                                        <p class="text-base font-semibold">School Years</p>
                                        <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                            <p>2011-2015</p>
                                        </div>
                                    </div>
                                </span>

                                <div class="w-full">
                                    <p class="text-base font-semibold">Course</p>
                                    <div class="bg-applicantInput w-full rounded-md px-2 py-1">
                                        <p>Digital Illustration and Page Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </article>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
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

.bg-applicantInput {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    color: #2563EB;
}

.btn-resume {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    color: #2563EB;
}
</style>