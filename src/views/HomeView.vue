<template>
  <section style="background: linear-gradient(205.98deg, #A6BFF7 -61.63%, rgba(166, 191, 247, 0.5) 73.95%);" class="mt-16 lg:mt-14">
    <article class="container mx-auto w-full flex items-center justify-between gap-x-10 p-4 lg:p-8">
      <div class="w-full">
        <div class="h-96 w-full overflow-hidden rounded-2xl">
          <img src="/img/photo2.jpg" alt="home-img" class="h-full w-full">
        </div>
      </div>

      <div class="w-full flex flex-col items-start lg:gap-y-5 lg:w-8/12 xl:w-3/4">
        <h1 class="text-lg font-bold lg:text-5xl">Sed ut perspiciatis unde</h1>
        <RouterLink :to="{ name: 'applyjob'}" class="heroApplyBtn rounded-full text-white font-bold text-lg py-3 w-1/2 text-center lg:w-2/3 lg:text-2xl xl:w-1/2 xl:text-3xl">
          Apply Now !
        </RouterLink>
      </div>
    </article>
  </section>

  <section class="w-full flex items-center justify-center pt-4 lg:pt-8">
    <article class="container mx-auto w-full">
      <div class="homeTitle w-full py-2">
        <h2 class="font-bold uppercase text-center text-lg lg:text-xl xl:text-2xl">Updates</h2>
      </div>

      <div class="w-full overflow-hidden relative py-4 lg:py-8">
        <svg width="680"  class="relative lg:-left-20 xl:-left-10" viewBox="0 0 680 982" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M680 484.77C680 626.152 302.223 500.633 153.269 500.633C-156.776 536.188 -63.9928 322.569 -63.9928 181.187C-63.9928 39.8055 257.002 -68.2428 257.002 51.5491C257.002 171.341 680 343.388 680 484.77Z" fill="#FAE6E6"/>
          <path d="M506.039 236.657C641.514 277.096 413.185 603.189 370.58 745.919C315.969 1053.18 137.813 903.173 2.33784 862.734C-133.137 822.295 -144.858 483.807 -30.0712 518.071C84.7161 552.334 370.564 196.218 506.039 236.657Z" fill="#EEFCEB"/>
        </svg>

        <div class="absolute inset-0 z-20 p-4 w-full h-full flex flex-col gap-y-10 lg:p-8 xl:gap-y-12">
          <div class="w-full flex items-start justify-between gap-x-10">
            <div class="flex flex-col gap-y-4 items-center justify-center h-full w-full">
              <p class="text-lg font-bold lg:text-2xl xl:text-3xl">At vero eos et accusamus</p>
              <p class="text-gray-600 text-base text-center xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div class="w-full">
              <div class="overflow-hidden rounded-2xl lg:h-80 xl:h-96">
                <img src="/img/photo2.jpg" alt="" class="h-full w-full">
              </div>
            </div>
          </div>

          <div class="w-full flex items-start justify-between gap-x-10">
            <div class="w-full">
              <div class="overflow-hidden rounded-2xl lg:h-80 xl:h-96">
                <img src="/img/photo2.jpg" alt="" class="h-full w-full">
              </div>
            </div>
            <div class="flex flex-col gap-y-4 items-center justify-center h-full w-full">
              <p class="text-lg font-bold lg:text-2xl xl:text-3xl">Nam libero tempore</p>
              <p class="text-gray-600 text-base text-center xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </div>
      </div>

    </article>
  </section>

  <section class="w-full flex items-center justify-center pt-4 lg:pt-8">
    <article class="container mx-auto w-full">
      <div class="homeTitle w-full py-2">
        <h2 class="font-bold uppercase text-center text-lg lg:text-xl xl:text-2xl">Events</h2>
      </div>

      <div class="w-full overflow-hidden relative py-4 lg:py-8">
        <svg width="760"  class="relative -right-80 -top-32 lg:-right-1/3 xl:-top-24 xl:-right-2/4 2xl:-right-2/3" viewBox="0 0 760 982" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.96904e-05 496.491C6.73304e-05 355.109 377.777 480.628 526.731 480.628C836.776 445.073 743.993 658.692 743.993 800.073C743.993 941.455 422.999 1049.5 422.998 929.711C422.998 809.919 9.20504e-05 637.872 7.96904e-05 496.491Z" fill="#FAE6E6"/>
          <path d="M173.961 744.603C38.486 704.165 266.815 378.072 309.42 235.341C364.031 -71.9201 542.187 78.0873 677.662 118.526C813.137 158.965 824.859 497.454 710.071 463.19C595.284 428.926 309.436 785.042 173.961 744.603Z" fill="#EEFCEB"/>
        </svg>

        <div class="absolute inset-0 z-20 p-4 w-full h-full flex flex-col gap-y-10 lg:p-8 xl:gap-y-12">
          <div class="w-full flex items-start justify-between gap-x-10">
            <div class="flex flex-col gap-y-4 items-center justify-center h-full w-full">
              <p class="text-lg font-bold lg:text-2xl xl:text-3xl">At vero eos et accusamus</p>
              <p class="text-gray-600 text-base text-center xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div class="w-full">
              <div class="overflow-hidden rounded-2xl lg:h-80 xl:h-96">
                <img src="/img/photo2.jpg" alt="" class="h-full w-full">
              </div>
            </div>
          </div>

          <div class="w-full flex items-start justify-between gap-x-10">
            <div class="w-full">
              <div class="overflow-hidden rounded-2xl lg:h-80 xl:h-96">
                <img src="/img/photo2.jpg" alt="" class="h-full w-full">
              </div>
            </div>
            <div class="flex flex-col gap-y-4 items-center justify-center h-full w-full">
              <p class="text-lg font-bold lg:text-2xl xl:text-3xl">Nam libero tempore</p>
              <p class="text-gray-600 text-base text-center xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </div>
      </div>

    </article>
  </section>
</template>

<style scoped>
h1 {
  color: #173C8F;
}

.heroApplyBtn {
  background: #2563EB;
}

.homeTitle {
  background: #E3EBFD;
}

@media screen 
  and (min-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    svg {
      max-height: 660px;
    } 
}

@media screen 
  and (min-device-width: 1200px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    svg {
      max-height: 890px;
    } 
}
</style>