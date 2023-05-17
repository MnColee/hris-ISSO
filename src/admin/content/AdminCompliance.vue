<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Compliance</p>
                </div>
                <ComplianceTable/>
            </article>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import ComplianceTable from '../components/ComplianceTable.vue';
</script>

<style>

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
</style>