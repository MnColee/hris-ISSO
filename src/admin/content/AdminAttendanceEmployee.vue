<template>
    <main class="w-full flex items-start">
        <Sidebar />
        <section class="w-full">
            <Navbar />

            <article class="w-full relative left-20 flex flex-col items-center justify-center lg:py-6 lg:px-8 xl:p-8" style="width: calc(100% - 80px)">
                <div class="flex items-center justify-center w-full mb-5">
                    <RouterLink :to="{ name: 'adminattendance'}" class="back-btn-background text-white rounded-sm py-0.5 px-3"><i class="fa-solid fa-arrow-left"></i></RouterLink>
                    <p class="uppercase text-black font-bold w-full text-center text-2xl lg:text-3xl">Employee</p>
                </div>
                <div class="w-full flex items-start justify-between gap-x-4 py-6">
                    <!--LEFT-->
                    <div class="w-96 flex flex-col gap-y-4">
                        <div class="bg-profile-wrapper rounded-md overflow-hidden px-4 pt-4 pb-2 w-full flex flex-col items-start justify-center">
                            <img src="/img/1.jpg" alt="employee-photo" class="h-52 w-full rounded-md xl:h-60">
                            <div class="flex flex-col gap-y-1 py-2">
                                <span class="flex items-center gap-x-2 text-base">
                                    <p>Name:</p>
                                    <p>Mikaela Delos Santos</p>
                                </span>
                                <span class="flex items-center gap-x-2 text-base">
                                    <p>Position:</p>
                                    <p>UX/UI Designer</p>
                                </span>
                                <span class="flex items-center gap-x-2 text-base">
                                    <p>Date Hired:</p>
                                    <p>July 12, 2020</p>
                                </span>
                                <span class="flex items-center gap-x-2 text-base">
                                    <p>Status:</p>
                                    <p>Regular</p>
                                </span>
                            </div>
                        </div>

                        <div class="bg-profile-wrapper rounded-md overflow-hidden px-4 py-3 text-center flex flex-col gap-y-2">
                            <p class="font-bold text-base text-black">Available Leave</p>
                            <div class="w-full flex items-start justify-between gap-x-4">
                                <div class="bg-profile-box w-full rounded-md py-1">
                                    <p class="text-lg text-white font-bold lg:text-xl">2</p>
                                    <p class="uppercase text-white">OFFSET</p>
                                </div>
                                <div class="bg-profile-box w-full rounded-md py-1">
                                    <p class="text-lg text-white font-bold lg:text-xl">2</p>
                                    <p class="uppercase text-white">SIL</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--RIGHT-->
                    <div class="w-full">
                        <div class="w-full">

                          <div class="w-full flex items-center justify-evenly">
                            <button @click="previousMonth" class="text-xl text-blue-600 font-bold"><i class="fa-solid fa-chevron-left"></i></button>
                              <p class="text-gray-400 text-base lg:text-lg">{{ previousMonthName }}</p>
                              <div class="flex items-center gap-x-2">
                                <!-- {{ previousYear }} -->
                                  <span class="flex items-center gap-x-2 text-black text-base font-bold lg:text-lg">
                                    {{ currentMonth }} {{ currentYear }}
                                  </span>
                                <!-- {{ nextYear }} -->
                              </div>
                              <p class="text-gray-400 text-base lg:text-lg">{{ nextMonthName }}</p>
                            <button @click="nextMonth" class="text-xl text-blue-600 font-bold"><i class="fa-solid fa-chevron-right"></i></button>
                          </div>
                        
                          <div class="w-full">
                            <table class="w-full overflow-x-auto mt-4 flex flex-col">
                              <thead class="w-full">
                                <tr class="w-full grid grid-cols-7 py-1">
                                  <th v-for="day in daysOfWeek">{{ day }}</th>
                                </tr>
                              </thead>

                              <tbody class="w-full">
                                <tr v-for="week in weeks" class="w-full">
                                  <td v-for="day in week" :class="{ 'current-day': day.isCurrentDay, 'different-month': !day.isCurrentMonth }"
                                    class="w-40 text-center font-medium lg:text-4xl lg:py-6 xl:w-40 xl:py-6 xl:text-5xl">
                                    {{ day.date }}
                                    <div v-if="day.text" class="day-text">{{ day.text }}</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>

                        <div class="w-full flex flex-col items-center gap-y-2">
                            <p class="uppercase font-bold">CUT - OFF: 1 - 15</p>
                            <div class="w-full grid grid-cols-2 gap-4 lg:grid-cols-4">
                                <div class="bg-green-300 flex items-center justify-center gap-x-1 text-white rounded-lg py-3">
                                    <p>Present:</p>
                                    <p>10</p>
                                </div>
                                <div class="bg-blue-500 flex items-center justify-center gap-x-1 text-white rounded-lg py-3">
                                    <p>Offset:</p>
                                    <p>1</p>
                                </div>
                                <div class="bg-orange-300 flex items-center justify-center gap-x-1 text-white rounded-lg py-3">
                                    <p>SIL:</p>
                                    <p>1</p>
                                </div>
                                <div class="bg-red-400 flex items-center justify-center gap-x-1 text-white rounded-lg py-3">
                                    <p>Absent:</p>
                                    <p>2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
</script>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      
    };
  },
  methods: {
    previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    },
    getWeeksInMonth(year, month) {
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const numDaysInMonth = lastDayOfMonth.getDate();
      const firstDayOfWeek = firstDayOfMonth.getDay();
      const lastDayOfWeek = lastDayOfMonth.getDay();
      // const daysInPrevMonth = new Date(year, month, 0).getDate();
      // const daysInNextMonth = new Date(year, month + 1, 1).getDate();
      const numDaysPrevMonthShown = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
      const numDaysNextMonthShown = lastDayOfWeek === 6 ? 0 : 6 - lastDayOfWeek;
      const numDaysShown = numDaysPrevMonthShown + numDaysInMonth + numDaysNextMonthShown;
      const weeks = [];
      let week = [];
      for (let i = 1 - numDaysPrevMonthShown; i <= numDaysShown; i++) {
        const date = new Date(year, month, i);
        week.push({
          date: date.getDate(),
          isCurrentMonth: i >= 1 && i <= numDaysInMonth,
          isCurrentDay: this.isCurrentDay(date),
        });
        if (week.length === 7) {
          weeks.push(week);
          week = [];
        }
      }
      return weeks;
    },
    isCurrentDay(date) {
      const today = new Date();
      return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    },
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonth() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[this.currentDate.getMonth()];
    },
    previousYear() {
      return this.currentDate.getMonth() === 0 ? this.currentDate.getFullYear() - 1 : this.currentDate.getFullYear();
    },
    previousMonthName() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[this.currentDate.getMonth() === 0 ? 11 : this.currentDate.getMonth() - 1];
  },
  nextYear() {
    return this.currentDate.getMonth() === 11 ? this.currentDate.getFullYear() + 1 : this.currentDate.getFullYear();
  },
  nextMonthName() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[this.currentDate.getMonth() === 11 ? 0 : this.currentDate.getMonth() + 1];
  },
  daysOfWeek() {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  },
  weeks() {
    return this.getWeeksInMonth(this.currentYear, this.currentDate.getMonth());
  },
},
};
</script>

<style scoped>
    .bg-profile-wrapper {
        background: #FBFCFF;
        border: 1px solid #A6BFF7;
    }

    .bg-profile-box{
        background-color: #A6BFF7;
    }
</style>