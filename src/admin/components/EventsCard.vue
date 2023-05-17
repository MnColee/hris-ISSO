<template>
    <div class="flex flex-col gap-y-2 w-full">
        <div class="bg-eventsCard relative p-2 flex flex-col gap-y-2">
            <div class="flex flex-col">
                <p class="capitalize text-base font-semibold lg:text-lg">Title of Events</p>
                <small class="text-base clampText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo ratione accusantium quasi illum officiis nihil numquam, nobis asperiores quo magni, dolorem temporibus aut deleniti hic? Reprehenderit veritatis voluptatum adipisci?</small>
            </div>
            <div class="relative h-40 rounded-md overflow-hidden lg:h-28">
                <img src="/img/photo2.jpg" alt="job-image" class="h-full w-full">
            </div>

            <div class="absolute right-3 bottom-3 flex items-center">
                <ToggleSwitch v-model="isOn"></ToggleSwitch>
                <RouterLink :to="{ name: 'adminediteventsandupdates'}" class="editBtn py-0.5 px-3 text-sm">Edit</RouterLink>
            </div>
        </div>
    </div>
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

<style scoped>
.bg-eventsCard {
    background: #E9EFFD;
    border: 2px solid #D63030;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.editBtn {
    background: #E9EFFD;
    border: 0.5px solid #2563EB;
    border-radius: 5px;
    color: #2563EB;
}

.clampText {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}
</style>