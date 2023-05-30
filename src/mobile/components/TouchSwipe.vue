<template>
  <div class="swipeable-page mobile-welcom-page h-screen py-4 lg:hidden" ref="swipeablePage" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <svg width="180" height="113" class="absolute top-0 right-0" viewBox="0 0 180 113" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="23" r="90" fill="#E3EBFD"/>
    </svg>
    <svg width="111" height="141" class="absolute top-0 right-0" viewBox="0 0 111 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="51" r="90" fill="#D4E0FB"/>
    </svg>

    <article class="w-full px-2 relative">
      <div class="sm-flexbox w-full flex flex-col items-start justify-between gap-y-4">
                    
        <div class="w-full flex flex-col items-center justify-center gap-y-2.5">
          <div class="profile-img-bg relative rounded-full pt-3 px-2">
            <div class="overflow-hidden rounded-full h-32 w-32">
              <img src="/img/3.jpg" alt="profile-img" class="h-full w-full">
            </div>
          </div>
          <figcaption class="w-full flex flex-col items-center">
            <p class="font-bold text-lg">Juan Dela Cruz</p>
            <small class="italic text-base">UX/UI Designer</small>
          </figcaption>
        </div>

        <div class="profile-status-box w-full flex items-center gap-x-4 py-1">
          <div class="w-full flex flex-col items-center gap-y-1">
            <span class="w-full gap-x-2 flex items-center justify-center">
              <i class="fa-solid fa-syringe"></i>
              <p class="uppercase font-bold text-lg">SIL</p>
            </span>
            <p class="capitalize font-bold text-xl text-indigo-800">1</p>
          </div>
          <div class="vertical h-16 w-3 rounded-full bg-blue-400"></div>
          <div class="w-full flex flex-col items-center gap-y-1">
            <span class="w-full gap-x-2 flex items-center justify-center">
              <i class="fa-solid fa-square-check"></i>
              <p class="uppercase font-bold text-lg">OFFSET</p>
            </span>
            <p class="uppercase font-bold text-xl text-indigo-800">1</p>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col mt-4">
        <p class="text-blue-600 font-bold">Attendance Summary</p>
        <p class="text-center text-indigo-800 font-bold text-base py-1 mb-1">February 2023</p>

        <div class="w-full grid grid-cols-3 gap-x-4">
          <div class="GreenSumBox w-full rounded-lg flex flex-col items-center gap-y-1.5 pb-3 pt-0.5">
            <small>Present</small>
            <p class="text-indigo-800 text-2xl font-bold">3</p>
          </div>
          <div class="RedSumBox w-full rounded-lg flex flex-col items-center gap-y-1.5 pb-3 pt-0.5">
            <small>Present</small>
            <p class="text-indigo-800 text-2xl font-bold">2</p>
          </div>
          <div class="BlueSumBox w-full rounded-lg flex flex-col items-center gap-y-1.5 pb-3 pt-0.5">
            <small>Present</small>
            <p class="text-indigo-800 text-2xl font-bold">4</p>
          </div>
        </div>
      </div>
    </article>


    <!--DATE TODAY-->
    <div class="swipeable-page-content mobile-welcom-page h-screen w-full" ref="swipeablePageContent">
      <svg width="180" height="113" class="absolute top-0 right-0" viewBox="0 0 180 113" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="23" r="90" fill="#E3EBFD"/>
      </svg>
      <svg width="111" height="141" class="absolute top-0 right-0" viewBox="0 0 111 141" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="51" r="90" fill="#D4E0FB"/>
      </svg>

      <div class="absolute inset-0 h-full flex flex-col justify-between w-full py-4 gap-y-3">
        <div class="w-full flex flex-col gap-y-2.5 px-4">

          <div class="w-full flex items-start justify-between">
            <div class="w-1/2 flex flex-col gap-y-0.5">
              <p class="text-base font-bold">Welcome back</p>
              <small class="italic">Juan Dela Cruz</small>
              <small class="italic">UI/UX Designer</small>
            </div>
            <div class="w-1/2 flex justify-end p-1 relative">
              <RouterLink :to="{ name: 'mnotification'}" class=" bg-blue-600 rounded-full px-2 py-0.5">
                <i class="fa-solid fa-bell text-white text-xl "></i>
                <div class="notifFont absolute right-1 top-1 rounded-full px-1.5 py-0.5 bg-red-600 text-white">1</div>
              </RouterLink>
            </div>
          </div>

          <div class="w-full flex flex-col items-center gap-y-2">
            <p class="text-sm font-bold uppercase">Available Leave</p>
            <div class="w-full flex items-center gap-x-4">
              <div class="leaveBox w-full flex flex-col items-center gap-y-1 py-2">
                <p class="uppercase font-extrabold text-base">SIL</p>
                <p class="uppercase font-extrabold text-base">1</p>
              </div>
              <div class="leaveBox w-full flex flex-col items-center gap-y-1 py-2">
                <p class="uppercase font-extrabold text-base">OFFSET</p>
                <p class="uppercase font-extrabold text-base">1</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!--INDICATOR-->
    <div class="swipeable-page-indicator p-4" :class="{ show: showIndicator }">
      <div class="w-24 mx-auto h-1.5 rounded-full bg-gray-300"></div>
      <p class="text-center font-bold pb-3 pt-1.5">Date Today</p>

      <div class="w-full flex flex-col gap-y-4 items-center justify-center pb-16">
        <div class="land-flexbox w-full flex flex-col gap-y-3.5 sm:w-2/4">
          <div class="timeBox py-2 px-4 flex items-center gap-x-4">
            <div class="h-24 w-full overflow-hidden rounded-md">
              <img src="/img/1.jpg" alt="" class="w-full h-full">
            </div>
            <div class="flex flex-col w-10/12">
              <p class="text-base font-bold">Time-In</p>
              <p class="text-lg font-bold">08 : 20 am</p>
              <p></p>
            </div>
          </div>

          <div class="timeBox py-2 px-4 flex items-center gap-x-4">
            <div class="h-24 w-full overflow-hidden rounded-md">
              <img src="/img/1.jpg" alt="" class="w-full h-full">
            </div>
            <div class="flex flex-col w-10/12">
              <p class="text-base font-bold">Time-In</p>
              <p class="text-lg font-bold">08 : 20 am</p>
              <p></p>
            </div>
          </div>
        </div>
        
        <RouterLink :to="{ name: 'msendaccomplishmentreport'}" class=" text-white text-center text-sm bg-blue-600 px-12 rounded-md py-2.5 w-full sm:w-2/4">
          Send Accomplishment Report
        </RouterLink>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      startY: null,
      currentY: null,
      deltaY: null,
      threshold: 100,
      showIndicator: true,
      isOpen: false,
    };
  },
  methods: {
    onTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.currentY = this.startY;
      this.deltaY = 0;
    },
    onTouchMove(event) {
      this.currentY = event.touches[0].clientY;
      this.deltaY = this.currentY - this.startY;

      if (this.deltaY > 0) {
        const translationY = Math.min(this.deltaY, this.threshold);
        if (this.$refs.swipeablePageContent) {
          this.$refs.swipeablePageContent.style.transform = `translateY(${translationY}px)`;
          if (translationY >= this.threshold) {
            this.showIndicator = false;
            this.$refs.swipeablePageContent.style.display = 'none';
          }
        }

        if (this.$refs.swipeablePageIndicator) {
          this.$refs.swipeablePageIndicator.style.transform = `translateY(${translationY / 2}px)`;
        }
      } else {
        if (this.$refs.swipeablePageContent) {
          this.$refs.swipeablePageContent.style.transform = '';
          this.showIndicator = true;
          this.$refs.swipeablePageContent.style.display = '';
        }
        if (this.$refs.swipeablePageIndicator) {
          this.$refs.swipeablePageIndicator.style.transform = '';
        }
      }
    },
    onTouchEnd() {
      if (this.isOpen && this.deltaY < this.threshold) {
        this.showIndicator = true;
        this.$refs.swipeablePageContent.style.transform = '';
        this.isOpen = false;
      } else if (this.isOpen && this.deltaY >= this.threshold) {
        this.$emit('swipe-down');
      }
    },
  },
};
</script>

<style scoped>
.swipeable-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  touch-action: pan-y;
  transition: transform 0.2s ease-in-out;
}

.swipeable-page-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.swipeable-page-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 15vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  transition: opacity 0.2s ease-in-out;

  background: #F8FAFE;
  box-shadow: 0 -5px 5px -5px #333;
  border-radius: 30px 30px 0px 0px;
  cursor: pointer;
}

.swipeable-page-indicator.show {
  opacity: 1;
  height: auto;
}

.mobile-welcom-page {
    background: linear-gradient(174.37deg, #D4E0FB -2.39%, #F3F7FE 95.51%);
}

.leaveBox {
    background: #CAD9FA;
    border-radius: 10px;
}

.btnBox {
    background: #F8FAFE;
}
.notifFont {
    font-size: 0.5rem;
}

.timeBox {
  background: linear-gradient(174.37deg, #D4E0FB -2.39%, #F3F7FE 95.51%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.profile-status-box {
  background: linear-gradient(174.37deg, #D4E0FB -2.39%, #F3F7FE 95.51%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
    color: #4A7EEE;
}

.profile-img-bg {
    background: linear-gradient(340.59deg, #D4E0FB 9.37%, #F3F7FE 103.47%);
}
.vertical {
    background: #A6BFF7;
}

.GreenSumBox {
  background: linear-gradient(174.37deg, #9BEE8D -2.39%, #F3F7FE 95.51%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.RedSumBox {
  background: linear-gradient(174.37deg, #E36E6E -2.39%, #F3F7FE 95.51%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.BlueSumBox {
  background: linear-gradient(174.37deg, #4A7EEE -2.39%, #F3F7FE 95.51%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media only screen 
  and (min-device-width: 640px) 
  and (max-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {
    .sm-flexbox {
      flex-direction: row;
      align-items: center;
      padding: 0 1rem;
    }
    .land-flexbox {
      display: flex;
      flex-direction: row;
      width: 100%;
      column-gap: 1.5rem;
    }

    .timeBox {
      width: 100%;
    }
    .swipeable-page-indicator{
      height: 23.5vh;
    }
}
</style>
