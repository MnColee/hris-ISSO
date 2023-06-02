<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="dashboardBody w-full relative flex flex-col items-center justify-center px-4 py-6 lg:left-20 lg:py-6 lg:px-8 xl:p-8 2xl:left-10 2xl:container 2xl:mx-auto">
                <div class="flex items-center justify-center w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Employee</p>
                </div>

                <div class="w-full grid grid-cols-2 gap-4 sm:grid-cols-4 lg:w-3/4 lg:gap-x-4 lg:grid-cols-4 xl:gap-x-10">
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <span class="flex items-center gap-x-3">
                            <i class="fa-solid fa-user text-lg lg:text-xl xl:text-2xl"></i>
                            <p class="font-bold text-xl xl:text-4xl">5</p>
                        </span>
                        <p class="text-base">Trainee</p>
                    </div>
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <span class="flex items-center gap-x-3">
                            <i class="fa-solid fa-user text-lg lg:text-xl xl:text-2xl"></i>
                            <p class="font-bold text-xl xl:text-4xl">5</p>
                        </span>
                        <p class="text-base">Project-Based</p>
                    </div>
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <span class="flex items-center gap-x-3">
                            <i class="fa-solid fa-user text-lg lg:text-xl xl:text-2xl"></i>
                            <p class="font-bold text-xl xl:text-4xl">5</p>
                        </span>
                        <p class="text-base">On Call</p>
                    </div>
                    <div class="estimateBox w-full flex flex-col items-center gap-y-3 py-4 rounded-lg lg:py-4">
                        <span class="flex items-center gap-x-3">
                            <i class="fa-solid fa-user text-lg lg:text-xl xl:text-2xl"></i>
                            <p class="font-bold text-xl xl:text-4xl">5</p>
                        </span>
                        <p class="text-base">Regular</p>
                    </div>
                </div>

                <EmployeeTable />
            </article>
        </section>
    </main>
</template>

<script setup>
import EmployeeTable from '../components/EmployeeTable.vue';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<style scoped>

.header{
    background-color: #2563EB;
}
.bg-form {
    background-color: #E3EBFD;
}

.bg-form-input{
    background: #FBFCFF;
    border: 1px solid #A6BFF7;
    border-radius: 5px;
}
.rotate {
    transform: rotate(180deg);
}

.bg-form-input input::placeholder { 
    color: #2563EB;
    opacity: 1;
}

.bg-form-input input:-ms-input-placeholder {
    color: #2563EB;
}

.bg-form-input input::-ms-input-placeholder {
    color: #2563EB;
}
.estimateBox {
    background: linear-gradient(180deg, #FCFF2B 0%, rgba(253, 255, 150, 0) 100%);
}

.dashboardBody {
    width: calc(100% - 80px);
}

@media only screen 
    and (min-device-width: 280px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
    .dashboardBody {
        width: 100%;
    }
    .xs-size {
        display: none;
    }

    .btnAdd {
        width: 80%;
        padding: 0.5rem 1rem;
    }
}

@media only screen 
    and (min-device-width: 640px) 
    and (max-device-width: 1023px) 
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1) {
    .dashboardBody {
        width: 100%;
    }
}

@media only screen 
    and (min-device-width: 712px) 
    and (max-device-width: 1023px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1) {
    .dashboardBody {
        width: 100%;
        overflow-x: auto;
    }
}
</style>