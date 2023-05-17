<template>
    <footer class="relative w-full h-auto flex flex-col p-4 lg:mt-10 lg:px-8 lg:pb-2 lg:pt-5">
        <div class="relative z-20 container mx-auto w-full flex items-start justify-center gap-3 lg:gap-x-5">
            <div class=" xl:w-1/4"></div>
            <div class="w-full flex flex-col gap-y-3 lg:w-2/4">
                <p class="quicklinksTitle font-bold text-lg lg:text-xl">Contacts</p>
                <div class="quicklinks flex flex-col gap-y-2">
                    <span class="w-full flex items-center gap-x-2">
                        <i class="fa-solid fa-phone"></i>
                        <p>(+632) 7934-7855</p>
                    </span>
                    <span class="w-full flex items-center gap-x-2">
                        <i class="fa-solid fa-phone"></i>
                        <p>(+63905) 339 8588</p>
                    </span>
                    <span class="w-full flex items-center gap-x-2">
                        <i class="fa-solid fa-envelope"></i>
                        <p>hr.isso2023@gmail.com</p>
                    </span>
                </div>
            </div>
            <div class="w-full flex flex-col gap-y-3 lg:w-1/3">
                <p class="quicklinksTitle font-bold text-lg lg:text-xl">Quicklinks</p>
                <div class="quicklinks flex flex-col gap-y-2">
                    <RouterLink :to="{ name: 'about'}" class="text-blue-600">
                        About Us
                    </RouterLink>
                    <RouterLink :to="{ name: 'applyjob'}" class="text-blue-600">
                        Apply Job
                    </RouterLink>
                </div>
            </div>
            <div class="w-full flex flex-col gap-y-3">
                <p class="quicklinksTitle font-bold text-lg lg:text-xl">Our Locations</p>
                <div class="quicklinks flex flex-col gap-y-2">
                    <p>Where to find us?</p>
                    <span class="w-full flex items-center gap-x-2">
                        <p>527 Melting Pot Building, B1 L2 Ph1 Cuidad Verde Executive Village Omega St., Brgy. Greater Fairview, Quezon City</p>
                    </span>
                </div>
            </div>
            <div class="w-full lg:w-1/4 xl:w-1/3"></div>
        </div>
        <div class="absolute inset-0 bg-blue-50 opacity-30 py-3">
            <div class="container mx-auto w-full flex items-center justify-end px-5">
                <div class="lg:h-32 lg:w-32 xl:h-36 xl:w-36">
                    <img src="/img/isso-trans-logo.png" alt="isso-logo" class="h-full w-full">
                </div>
            </div>
        </div>
    </footer>
    <div class="footnote w-full py-1.5 text-sm italic text-center">© 2023 ISSO. All rights reserved. Privacy Policy</div>
</template>

<style scoped>
footer{
    background: #DAE4FC;
}

.footnote {
    background: #CFDCFB;
}

.quicklinksTitle {
    color: #1A45A5;
}

.quicklinks {
    color: #81A5F3;
    font-style: italic;
}
</style>