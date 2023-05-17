<template>
    <section class="container mx-auto w-full mt-16 px-4 lg:px-6">
        <article class="flex flex-col w-full py-4 gap-y-5 lg:gap-y-7">
            <div class="flex items-center justify-center w-full">
                <RouterLink :to="{ name: 'applyjob'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                <p class="capitalize text-black font-bold text-xl w-full text-center lg:text-2xl xl:text-3xl">UI/UX Designer</p>
            </div>

            <div class="w-full">
                <div class="job-wrapper flex items-start justify-between p-4 lg:py-6 lg:px-5 lg:gap-x-12 xl:px-7">
                    <aside class="scrollbar-hide h-screen overflow-auto flex flex-col items-start gap-y-4 lg:gap-y-5">
                        <div class="flex flex-col items-start gap-y-3">
                            <p class="font-semibold text-lg">Job Description</p>
                            <p class="text-base paragraph-color">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                        </div>
                        <div class="flex flex-col items-start gap-y-3">
                            <p class="font-semibold text-lg">Responsibilities</p>
                            <ul class="paragraph-color flex flex-col gap-y-0.5 px-2 list-inside list-disc">
                                <li>Mauris ac erat in turpis semper varius.</li>
                                <li>Donec ultricies arcu eu mollis rhoncus.</li>
                                <li>Praesent eu lectus vel tellus feugiat viverra.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Duis nec mauris posuere, venenatis enim a, iaculis ex.</li>
                                <li>Praesent at purus sit amet nisi eleifend rutrum vel sed elit.</li>
                            </ul>
                        </div>
                        <div class="flex flex-col items-start gap-y-3">
                            <p class="font-semibold text-lg">Qualifications</p>
                            <ul class="paragraph-color flex flex-col gap-y-0.5 px-2 list-inside list-disc">
                                <li>Mauris ac erat in turpis semper varius.</li>
                                <li>Donec ultricies arcu eu mollis rhoncus.</li>
                                <li>Praesent eu lectus vel tellus feugiat viverra.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Duis nec mauris posuere, venenatis enim a, iaculis ex.</li>
                                <li>Praesent at purus sit amet nisi eleifend rutrum vel sed elit.</li>
                            </ul>
                        </div>
                    </aside>

                    <div class="flex flex-col gap-y-4 lg:gap-y-5">
                        <div class="company-wrapper w-full p-4 flex flex-col gap-y-3 lg:px-6 lg:py-5 md:w-72 xl:w-80">
                            <div class="h-40 lg:h-52 xl:h-60">
                                <img src="/img/photo2.jpg" alt="company-img" class="h-full w-full">
                            </div>
                            <div class="flex flex-col lg:gap-y-1 xl:gap-y-2">
                                <span class="flex items-start gap-x-2">
                                    <p class="color-left text-base font-semibold">Employment type:</p>
                                    <p class="text-base italic">Fulltime</p>
                                </span>
                                <span class="flex items-start gap-x-2">
                                    <p class="color-left text-base font-semibold">Address:</p>
                                    <p class="text-base italic">103 Bagumba St. Caloocan City</p>
                                </span>
                                <span class="flex items-start gap-x-2">
                                    <p class="color-left text-base font-semibold">Company:</p>
                                    <p class="text-base italic">Radtek</p>
                                </span>
                                <span class="flex items-start gap-x-2">
                                    <p class="color-left text-base font-semibold">Posted:</p>
                                    <p class="text-base italic">March 12</p>
                                </span>
                            </div>
                        </div>

                        <RouterLink :to="{ name: 'applicationform' }"><SecondaryButton buttonText="Apply" class="rounded-md w-full font-bold py-1.5" /></RouterLink>
                    </div>
                </div>
            </div>

        </article>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import SecondaryButton from '../components/SecondaryButton.vue'
</script>

<style>
    .back-btn-background {
        background-color: #2563EB;
    }

    .job-wrapper {
        background: #FBFCFF;
        border: 3px solid #A6BFF7;
        box-shadow: 1px 4px 26px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;  
    }

    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }

    .company-wrapper {
        background: #F3F7FE;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        color: #A6BFF7;
    }

    .color-left {
        color: #173C8F;
    }
    .paragraph-color {
        color: #7A7B7D;
    }
</style>