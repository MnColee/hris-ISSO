<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center gap-y-4 lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex flex-col items-center justify-center gap-y-3 w-full mb-5">
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Add Events & Updates</p>
                </div>

                <form action="" class="w-full flex flex-col gap-y-5">

                    <div class="w-full flex items-start lg:gap-x-8">
                        <div class="w-full flex flex-col gap-y-4">
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Post Type</p>
                                <select class="w-full p-2 rounded-lg flex items-center gap-x-2 outline-none btn-tertiary">
                                    <option value="">Select</option>
                                    <option value="">Part Time</option>
                                    <option value="">On-Call</option>
                                    <option value="">Project-Based</option>
                                    <option value="">FullTime</option>
                                </select>
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Title</p>
                                <div class="eventsUpdatesInput w-full rounded-md px-2 py-1">
                                    <input type="text" class="bg-transparent border-none outline-none text-base w-full">
                                </div>
                            </div>
                            <div class="w-full flex flex-col gap-y-2">
                                <p class="text-base font-semibold">Caption</p>
                                <div class="eventsUpdatesInput w-full rounded-md px-2 py-1">
                                    <textarea class="resize-none bg-transparent border-none outline-none text-base w-full lg:h-32 xl:h-40"></textarea>
                                </div>
                            </div>
                        </div>

                        <!--UPLOAD IMAGE-->
                        <div class="w-96 flex flex-col gap-y-3.5 lg:w-80 xl:w-80">
                            <div class="h-40 lg:h-52 xl:h-60 w-full overflow-hidden rounded-md">
                                <img src="/img/profile.jpg" alt="upload-img" class="h-full w-full">
                            </div>
                            <div>
                                <label for="imgInput" type="button" class="bg-blue-600 text-white rounded-md py-1.5 w-full cursor-pointer text-center px-2">				
						            Upload Job Image
					            </label>
					            <input name="img" id="imgInput" class="hidden cursor-pointer" type="file" accept="image/*"/>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex items-center justify-center gap-x-6 mt-6">
                        <RouterLink :to="{name: 'admineventsandupdates'}" class="btn-tertiary text-center py-2 text-base rounded-md lg:w-1/4">
                            Cancel
                        </RouterLink>
                        <button type="submit" class="py-2 w-full bg-blue-600 text-white text-base rounded-md lg:w-1/4">Save</button>
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
.eventsUpdatesInput {
    background: #E9EFFD;
    border: 1px solid #A6BFF7;
    color: #A6BFF7;
}

.btn-tertiary {
    background: #E9EFFD;
    border: 1px solid #A6BFF7;
    color: #A6BFF7;
}
</style>