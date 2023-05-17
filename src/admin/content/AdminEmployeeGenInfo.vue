<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex flex-col items-start justify-center w-full mb-5">
                    <RouterLink :to="{ name: 'adminemployee'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                    <p class="capitalize text-black font-bold w-full text-center text-2xl lg:text-3xl">Employee Information</p>
                </div>
                
                <div class="GenInfoForm w-full overflow-hidden">
                    <div class="w-full flex items-center justify-evenly">
                        <button @click="activeTabOne" class="tab w-full py-2 text-base text-blue-600 font-semibold outline-none" v-bind:class="{ 'tab-active': tab === 1 }">
                            <p>General Information</p>
                        </button>
                        <button @click="activeTabTwo" class="tab w-full py-2 text-base text-blue-600 font-semibold outline-none" v-bind:class="{ 'tab-active': tab === 2 }">
                            <p>Contact Information</p>
                        </button>
                        <button @click="activeTabThree" class="tab w-full py-2 text-base text-blue-600 font-semibold outline-none" v-bind:class="{ 'tab-active': tab === 3 }">
                            <p>Job Information</p>
                        </button>
                        <button @click="activeTabFour" class="tab w-full py-2 text-base text-blue-600 font-semibold outline-none" v-bind:class="{ 'tab-active': tab === 4 }">
                            <p>Education</p>
                        </button>
                    </div>

                    <div class="">
                        <div v-show="tab === 1" class="p-4 lg:p-6">
                            <GeneralInfo />
                        </div>
                        <div v-show="tab === 2" class="p-4 lg:p-6">
                            <ContactInfo />
                        </div>
                        <div v-show="tab === 3" class="p-4 lg:p-6">
                            <JobInfo />
                        </div>
                        <div v-show="tab === 4" class="p-4 lg:p-6">
                            <EducationInfo />
                        </div>
                    </div>

                </div>
            </article>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import ContactInfo from '../employee-info/ContactInfo.vue';
import GeneralInfo from '../employee-info/GeneralInfo.vue'
import JobInfo from '../employee-info/JobInfo.vue'
import EducationInfo from '../employee-info/EducationInfo.vue'
</script>

<script>
export default {
    data() {
        return {
            tab: 1,
        };
    },
    methods: {
        activeTabOne() {
            this.tab = 1;
        },
        activeTabTwo() {
            this.tab = 2;
        },
        activeTabThree() {
            this.tab = 3;
        },
        activeTabFour() {
            this.tab = 4;
        },
    },
    components: { ContactInfo }
};
</script>

<style scoped>
.GenInfoForm {
  background: #FBFCFF;
  box-shadow: 0px 6px 13px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.tab{
    background: #E9EFFD;
    border: 1px solid #A6BFF7;
}
.tab-active {
    color: white;
    background: #2563EB;
    border: 1px solid #A6BFF7;
}
</style>