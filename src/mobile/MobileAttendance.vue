<template>
    <section class="mobile-welcom-page h-screen w-full lg:hidden">
        <svg width="180" height="113" class="absolute right-0" viewBox="0 0 180 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="23" r="90" fill="#E3EBFD"/>
        </svg>

        <svg width="111" height="141" class="absolute right-0" viewBox="0 0 111 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="51" r="90" fill="#D4E0FB"/>
        </svg>

        <article class="container mx-auto absolute inset-0 h-full flex flex-col w-full py-4 px-3 gap-y-4">
            <div class="w-full flex flex-col gap-y-2.5">
                <p class="text-base font-bold">Your Attendance</p>
            </div>

            <div class="monthYearBox flex items-center justify-center w-full px-2 py-1 rounded-md">
                <button @click="previousMonth" class="text-base text-blue-600 font-bold"><i class="fa-solid fa-arrow-left"></i></button>
                <p class="capitalize text-black font-medium w-full text-center text-base">{{ currentMonth }} {{ currentYear }}</p>
                <button @click="nextMonth" class="text-base text-blue-600 font-bold"><i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="w-full">
                <table class="w-full overflow-x-auto flex flex-col">
                    <thead class="w-full">
                        <tr class="w-full font-light grid grid-cols-7">
                            <th v-for="day in daysOfWeek">{{ day }}</th>
                        </tr>
                    </thead>

                    <tbody class="w-full">
                        <tr v-for="week in weeks" class="w-full">
                            <td v-for="day in week" :class="{ 'current-day': day.isCurrentDay, 'different-month': !day.isCurrentMonth }"
                                class="w-40 p-1.5 text-center lg:text-4xl lg:py-6 xl:w-40 xl:py-6 xl:text-5xl">
                                {{ day.date }}
                                <div v-if="day.text" class="day-text">{{ day.text }}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-full flex flex-col gap-y-4">
                <p class="capitalize font-bold text-base lg:text-lg">Legend:</p>
                <div class="w-full grid grid-cols-3 gap-4">
                    <div class="bg-green-300 flex items-center justify-center gap-x-1 text-white rounded py-3 italic text-sm lg:py-4">
                        <p>Present:</p>
                        <p>10</p>
                    </div>
                    <div class="bg-blue-500 flex items-center justify-center gap-x-1 text-white rounded py-3 italic text-sm lg:py-4">
                        <p>Offset:</p>
                        <p>1</p>
                    </div>
                    <div class="bg-red-400 flex items-center justify-center gap-x-1 text-white rounded py-3 italic text-sm lg:py-4">
                        <p>Absent:</p>
                        <p>2</p>
                    </div>
                    <div class="bg-orange-300 flex items-center justify-center gap-x-1 text-white rounded py-3 italic text-sm lg:py-4">
                        <p>SIL:</p>
                        <p>1</p>
                    </div>
                    <div class="presentBox flex items-center justify-center gap-x-1 text-blue-600 rounded py-3 shadow italic text-sm lg:py-4">
                        <p>Present:</p>
                        <p>2</p>
                    </div>
                </div>
            </div>

            <TouchSwipe v-if="!$route.meta.touchswipe" />
            <MobileNavBarBottom />
        </article>
    </section>
</template>

<script setup>
import MobileNavBarBottom from '../mobile/components/MobileNavBarBottom.vue'
import TouchSwipe from './components/TouchSwipe.vue';
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
            return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        },
        weeks() {
            return this.getWeeksInMonth(this.currentYear, this.currentDate.getMonth());
        },
    },
};
</script>

<style scoped>
.mobile-welcom-page {
    background: linear-gradient(174.37deg, #D4E0FB -2.39%, #F3F7FE 95.51%);
}

.monthYearBox {
    background: #F8FAFE;
    border: 1px solid #A6BFF7;
}
</style>