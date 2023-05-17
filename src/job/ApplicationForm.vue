<script setup>
import { RouterLink } from 'vue-router';
import SecondaryButton from '../components/SecondaryButton.vue'
import TertiaryButton from '../components/TertiaryButton.vue'
import Step1 from './multiStep-form/Step1.vue';
import Step2 from './multiStep-form/Step2.vue';
import Step3 from './multiStep-form/Step3.vue';
import Step4 from './multiStep-form/Step4.vue';
</script>

<template>
    <section class="container mx-auto w-full mt-16 px-4 lg:px-6 xl:px-6 2xl:px-0">
        <article class="flex flex-col w-full py-4 gap-y-5 lg:gap-y-7">
            <div class="flex items-center justify-center w-full">
                <RouterLink :to="{ name: 'jobdescription'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                <p class="capitalize text-black font-bold text-xl w-full text-center lg:text-2xl xl:text-3xl">Application Form</p>
            </div>

            <!-- @click="step = i" -->
            <div class="w-full flex flex-col gap-y-6 lg:gap-y-10">
              <div class="progress-stepper flex justify-between">
                <div
                  v-for="i in 4"
                  :key="i"
                  :class="[{ active: i === step }, getPrevClass(i)]"
                  class="coin-step rounded-full px-3.5 py-1.5 text-base font-bold sm:text-xl lg:text-2xl lg:px-4 lg:py-1.5">
                  <div class="step-number">{{ i }}</div>
                  <div class="step-text absolute -top-0 -left-32 -z-50 text-xs text-black font-normal italic lg:text-sm md:-left-36 lg:-top-0 lg:-left-48 xl:-top-0.5 xl:-left-60 2xl:-left-72" :class="{ 'visible': i === step }">{{ getStepText(i) }}</div>
                </div>
              </div>

              <form @submit.prevent>
                <div v-if="step === 1" class="stepWrapper p-4 flex flex-col lg:px-5">
                  <Step1 />
                  <div class="w-full py-2 flex items-center justify-end gap-x-4">
                    <SecondaryButton @click.prevent="nextStep" buttonText="Next" class="rounded-md px-6 py-1" />
                  </div>
                </div>

                <div v-if="step === 2" class="stepWrapper p-4 flex flex-col lg:px-5">
                  <Step2 />
                  <div class="w-full py-2 flex items-center justify-end gap-x-4">
                    <TertiaryButton @click.prevent="prevStep" buttonText="Back" class="rounded-md px-6 py-1" />
                    <SecondaryButton @click.prevent="nextStep" buttonText="Next" class="rounded-md px-6 py-1" />
                  </div>
                </div>

                <div v-if="step === 3" class="stepWrapper p-4 flex flex-col lg:px-5">
                  <Step3 />
                  <div class="w-full py-2 flex items-center justify-end gap-x-4">
                    <TertiaryButton @click.prevent="prevStep" buttonText="Back" class="rounded-md px-6 py-1" />
                    <SecondaryButton @click.prevent="nextStep" buttonText="Next" class="rounded-md px-6 py-1" />
                  </div>
                </div>

                <div v-if="step === 4" class="stepWrapper p-4 flex flex-col lg:px-5">
                  <Step4 />
                  <div class="w-full py-2 flex items-center justify-end gap-x-4">
                    <TertiaryButton @click.prevent="prevStep" buttonText="Back" class="rounded-md px-6 py-1" />
                    <SecondaryButton @click.prevent="submitForm" buttonText="Submit" class="rounded-md px-6 py-1" />
                  </div>
                </div>
              </form>
            </div>

        </article>
    </section>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    }
  },
  computed: {
      getPrevStep() {
        if (this.step > 1) {
          return this.step - 1;
        } else {
          return null;
        }
      }
    },
    methods: {
      nextStep() {
        this.step++;
      },
      prevStep() {
        this.step--;
      },
      submitForm() {
        // Submit form data to server
        console.log(this.formData);
      },
      getPrevClass(i) {
        if (i < this.step) {
          return 'active';
        } else {
          return '';
        }
      },
      getStepText(i) {
        if (i === 1) {
          return '';
        } else if (i === 2 ) {
          return 'General Information';
        } else if (i === 3) {
          return 'Educational Background';
        } else if (i === 4) {
          return 'Work History';
        } else{
          return '';
        }
      }
    }
}
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
  color: #A6BFF7;
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

.coin-step {
  background: #E9EFFD;
  border: 4px solid #A6BFF7;
  color: black;
  position: relative;
}
.progress-stepper div::before {
  content: '';
  position: absolute;
  top: 1rem;
  left: -21.5rem;
  right: 3rem;
  height: 0.3rem;
  background-color: #A6BFF7;
  z-index: -100;
}
.progress-stepper div:first-child::before {
  display: none;
}
.progress-stepper .active {
  border: 4px solid #2563EB;
  z-index: 10;
}
.progress-stepper .active::before {
  border: 3px solid #2563EB;
  left: -21.3rem;
}

.progress-stepper .visible {
    display: block;
}

.step-text {
    display: none;
}

.step-text::before{
  display: none;
}

.stepWrapper {
  background: #FBFCFF;
  box-shadow: 0px 6px 13px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

@media only screen 
  and (min-device-width: 640px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {
  .progress-stepper div::before {
    left: -9rem;
    right: 2.6rem;
  }
  .progress-stepper .active::before {
    left: -9rem;
  }
}

@media only screen 
  and (min-device-width: 768px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {
  .progress-stepper div::before {
    left: -11.7rem;
    right: 2.6rem;
  }
  .progress-stepper .active::before {
    left: -11.7rem;
  }
}

@media only screen 
  and (min-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {
  .progress-stepper div::before {
    left: -16.2rem;
    right: 3rem;
  }
  .progress-stepper .active::before {
    left: -16.2rem;
  }
}

@media only screen 
  and (min-device-width: 1280px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {
  .progress-stepper div::before {
    left: -21.5rem;
    right: 3rem;
  }
  .progress-stepper .active::before {
    left: -21.3rem;
  }
}

@media only screen 
  and (min-device-width: 1600px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {
  .progress-stepper div::before {
    left: -28rem;
    right: 3rem;
  }
  .progress-stepper .active::before {
    left: -28rem;
  }
}
</style>