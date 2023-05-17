<template>
    <section>
        <article class="flex flex-col items-start gap-y-8 w-full">

            <div class="flex flex-col items-start gap-y-4 w-full">
                <p class="infoTitle text-lg font-semibold lg:text-xl">Employee Contact</p>
                <div class="w-full grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-y-5 xl:gap-x-6">
                    <div class="w-full flex flex-col gap-y-2">
                        <p class="text-base font-semibold">Email</p>
                        <div class="bg-emplo w-full rounded-md px-2 py-1">
                            <p>juandelacruz@gmail.com</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-y-2">
                        <p class="text-base font-semibold">Mobile Number</p>
                        <div class="bg-emplo w-full rounded-md px-2 py-1">
                            <p>09123456789</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-start gap-y-4 w-full">
                <p class="infoTitle text-lg font-semibold lg:text-xl">Emergency Contact Information</p>
                <div class="w-full grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-y-5 xl:gap-x-6">
                    <div class="w-full flex flex-col gap-y-2">
                        <p class="text-base font-semibold">Name</p>
                        <div class="bg-emplo w-full rounded-md px-2 py-1">
                            <p>Lucio Dela Cruz</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-y-2">
                        <p class="text-base font-semibold">Contact Number</p>
                        <div class="bg-emplo w-full rounded-md px-2 py-1">
                            <p>09876543212</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-y-2">
                        <p class="text-base font-semibold">Relationship</p>
                        <div class="bg-emplo w-full rounded-md px-2 py-1">
                            <p>Father</p>
                        </div>
                    </div>
                </div>
            </div>

        </article>
    </section>
</template>

<style scoped>
.bg-emplo {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
    color: #A6BFF7;
}

.infoTitle {
    color: #173C8F;
}
</style>