<template>
    <main class="w-full flex flex-col items-start">
        <Navigation />

        <section class="w-full mt-16">
            <article class="w-full flex items-start">
                <AsideBar />

                <div class="w-full lg:py-4 lg:px-8 xl:p-8">
                    <div class="flex items-center justify-center w-full mb-5">
                        <button @click="previousMonth" class="hidden text-xl text-blue-600 font-bold"><i class="fa-solid fa-chevron-left"></i></button>
                        <p class="uppercase text-black font-bold w-full text-center text-2xl xl:text-3xl">{{ currentMonth }} {{ currentYear }}</p>
                        <button @click="nextMonth" class="hidden text-xl text-blue-600 font-bold"><i class="fa-solid fa-chevron-right"></i></button>
                    </div>

                    <div class="w-full flex flex-col gap-y-10">
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
                                            class="w-40 text-center  lg:text-4xl lg:py-6 xl:w-40 xl:py-6 xl:text-5xl">
                                            {{ day.date }}
                                            <div v-if="day.text" class="day-text">{{ day.text }}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="w-full flex flex-col gap-y-4">
                            <p class="capitalize font-bold text-base lg:text-lg">Legend:</p>
                            <div class="w-full grid grid-cols-2 gap-4 lg:grid-cols-5">
                                <div class="bg-green-300 flex items-center justify-center gap-x-1 text-white rounded-lg py-3 shadow-md italic lg:py-4">
                                    <p>Present:</p>
                                    <p>10</p>
                                </div>
                                <div class="bg-blue-500 flex items-center justify-center gap-x-1 text-white rounded-lg py-3 shadow-md italic lg:py-4">
                                    <p>Offset:</p>
                                    <p>1</p>
                                </div>
                                <div class="bg-orange-300 flex items-center justify-center gap-x-1 text-white rounded-lg py-3 shadow-md italic lg:py-4">
                                    <p>SIL:</p>
                                    <p>1</p>
                                </div>
                                <div class="bg-red-400 flex items-center justify-center gap-x-1 text-white rounded-lg py-3 shadow-md italic lg:py-4">
                                    <p>Absent:</p>
                                    <p>2</p>
                                </div>
                                <div class="presentBox flex items-center justify-center gap-x-1 text-white rounded-lg py-3 shadow-md italic lg:py-4">
                                    <p>Present:</p>
                                    <p>2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>

    <!---PASSWORD PROMPT-->
    <section class="hidden fixed inset-0 z-50 bg-black bg-opacity-70">
        <article class="flex items-center justify-center h-full sm:px-0 w-full">
            <form class="modal-inner w-full flex flex-col sm:rounded-xl lg:h-auto sm:w-3/4 md:w-6/12 lg:w-5/12 xl:w-2/5">
                <div class="modal-header w-full flex items-center justify-between lg:px-5 px-3 py-2">
                    <h1 class="text-lg capitalize font-bold lg:text-lg">Change Password</h1>
                </div>
                <div class="w-full p-4 flex flex-col gap-y-4">
                    <p class="text-sm">Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).</p>
                    <EmployeeInput v-model="currentPassword" type="password" class="w-full" placeholder="Current Password" />
                    <EmployeeInput v-model="newPassword" type="password" class="w-full" placeholder="New Password" />
                    <EmployeeInput v-model="reEnterPassword" type="password" class="w-full" placeholder="Re-type New Password" />
                    <button class="w-full text-center py-1.5 shadow-md text-base text-white bg-blue-600 rounded-md my-1">Change Password</button>
                </div>
            </form>
        </article>
    </section>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import AsideBar from '../components/AsideBar.vue'
import EmployeeInput from '../components/EmployeeInput.vue';
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
.modal-inner {
    background: #FBFCFF;
}
.modal-header {
    border-bottom: 3px solid #173C8F;
}

.presentBox {
    background: #DFE8FC;
    color: #2563EB;
}
</style>
