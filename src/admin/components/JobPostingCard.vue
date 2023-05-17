<template>
    <article class="flex flex-col gap-y-2 w-full">
        <div class="jobPostTitle w-full py-1">
            <p class="text-base lg:text-lg">Job Title</p>
        </div>
        <div class="bg-img-jobPost relative">
            <div class="relative h-40 rounded-md overflow-hidden lg:h-72">
                <img src="/img/photo2.jpg" alt="job-image" class="h-full w-full">
            </div>

            <div class="absolute right-2 bottom-2 flex items-center">
                <ToggleSwitch v-model="isOn"></ToggleSwitch>
                <RouterLink :to="{ name: 'adminupdatejobposting'}" class="editBtn py-0.5 px-5">Edit</RouterLink>
            </div>
        </div>
    </article>
</template>

<script>
import ToggleSwitch from './ToggleSwitch.vue';

export default {
    data() {
        return {
            isOn: false
        };
    },
    components: { ToggleSwitch }
};
</script>

<style>
.jobPostTitle{
    background: #FBFCFF;
    border: 2px solid #70E75C;
    backdrop-filter: blur(21.5px);
    border-radius: 5px;
    color: #2563EB;
    text-align: center;
}

.bg-img-jobPost {
    background: linear-gradient(0deg, rgba(233, 239, 253, 0.2), rgba(233, 239, 253, 0.2)), url(.jpg), #D9D9D9;
    border: 2px solid #70E75C;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.editBtn {
    background: #E9EFFD;
    border: 0.5px solid #2563EB;
    border-radius: 5px;
    color: #2563EB;
}
</style>