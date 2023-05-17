<template>
    <section class="calendar overflow-hidden lg:w-11/12">
        <div class="header flex items-center justify-center">
            <div class="yearBox flex items-center justify-center gap-x-3 py-2.5 lg:w-1/4 xl:w-1/5">
                <span class="yearColor text-xl font-bold lg:text-4xl xl:text-5xl">{{ selectedYear }}</span>
                <div class="flex flex-col items-center justify-center">
                    <button class="next-year-btn" @click="incrementYear">
                        <i class="fa-solid fa-chevron-up"></i>
                    </button>
                    <button class="prev-year-btn" @click="decrementYear">
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
            </div>
            
            <div class="monthBox w-full flex items-center justify-evenly">
                <button class="prev-month-btn cursor-pointer rounded-md py-1 px-3" @click="decrementMonth">Previous</button>
                    <span class="flex items-center gap-x-4">
                        <p>{{ previousMonth }}</p>
                        <p class="text-xl font-bold lg:text-xl xl:text-2xl">{{ selectedMonth }}</p>
                        <p>{{ nextMonth }}</p>
                    </span>
                <button class="next-month-btn cursor-pointer rounded-md py-1 px-3" @click="incrementMonth">Next</button>
            </div>
        </div>

        <table class="w-full flex flex-col">
            <thead class="w-full">
                <tr class="w-full border-l-2 border-blue-500 grid grid-cols-7 py-1 uppercase">
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>

            <tbody class="w-full ">
                <RouterLink :to="{ name: 'adminattendance'}">
                    <tr v-for="(week, index) in weeks" :key="index" class="w-full grid grid-cols-7">
                        <td class="text-center font-medium lg:text-4xl lg:py-6 xl:py-6 xl:text-5xl" 
                            v-for="(day, i) in week" 
                            :key="i" 
                            :class="{ today: isToday(day), selected: isSelected(day) }" @click="selectDay(day)">
                            <div class="w-full">{{ day }}</div>
                        </td>
                    </tr>
                </RouterLink>
            </tbody>
        </table>
    </section>
    
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<script>
export default {
    data() {
        return {
            selectedYear: new Date().getFullYear(),
            selectedMonth: new Date().toLocaleString('default', { month: 'long' }),
            selectedDay: null,
        };
    },
    computed: {
        weeks() {
            const weeks = [];
            const firstDay = new Date(Date.UTC(this.selectedYear, this.getMonthIndex(), 1)).getDay();
            let week = Array.from({ length: firstDay }, (_, i) => null);
        
            for (let day = 1; day <= this.getDaysInMonth(); day++) {
                week.push(day);
                if (week.length === 7) {
                    weeks.push(week);
                    week = [];
                }
            }
                if (week.length > 0) {
                    week = week.concat(Array.from({ length: 7 - week.length }, (_, i) => null));
                    weeks.push(week);
            }
            return weeks;
        },
    },
    methods: {
        getMonthIndex() {
            return new Date(Date.parse('01 ' + this.selectedMonth + ' 2000')).getMonth();
        },
        getDaysInMonth() {
            return new Date(this.selectedYear, this.getMonthIndex() + 1, 0).getDate();
        },
        isToday(day) {
            const today = new Date();
            return this.selectedYear === today.getFullYear() && this.getMonthIndex() === today.getMonth() && day === today.getDate();
        },
        isSelected(day) {
            return this.selectedDay === day;
        },
        selectDay(day) {
            if (day !== null) {
                this.selectedDay = day;
                this.$emit('selected', new Date(this.selectedYear, this.getMonthIndex(), day));
            }
        },
        incrementMonth() {
            if (this.selectedMonth === 'December') {
                this.selectedMonth = 'January';
                this.selectedYear++;
            } else {
                this.selectedMonth = new Date(Date.UTC(2000, this.getMonthIndex() + 1, 1)).toLocaleString('default', { month: 'long' });
            }
                this.selectedDay = null;
        },
        decrementMonth() {
            if (this.selectedMonth === 'January') {
                this.selectedMonth = 'December';
                this.selectedYear--;
            } else {
                this.selectedMonth = new Date(Date.UTC(2000, this.getMonthIndex() - 1, 1)).toLocaleString('default', { month: 'long' });
            }
                this.selectedDay = null;
        },
        incrementYear() {
            this.selectedYear++;
            this.selectedDay = null;
        },
        decrementYear() {
            this.selectedYear--;
            this.selectedDay = null;
        },
    },
};

</script>

<style scoped>
.calendar {
    background: #FBFCFF;
    border-top: 2px solid #4A7EEE;
    border-right: 2px solid #4A7EEE;
    border-radius: 20px;
}

.header {
    border-bottom: 2px solid #4A7EEE;
    background: #E9EFFD;
}

thead {
    background: #E9EFFD;
}

.yearColor {
    color: #173C8F;
}

i {
    color: #2563EB;
}

.yearBox {
    background: #CAD9FA;
    border-left: 2px solid #4A7EEE;
}

.prev-month-btn, .next-month-btn {
    border: 1px solid #2563EB;
}

tbody {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom: 2px solid #4A7EEE;
}

tr td {
    border-left: 2px solid #4A7EEE;
    border-top: 2px solid #4A7EEE;
}

tr td:hover {
    background-color: #A6BFF7;
    color: #E9EFFD;
}
</style>