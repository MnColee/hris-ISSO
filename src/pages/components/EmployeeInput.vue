<template>
    <div class="employeeInput rounded py-1 px-2">
        <input
            type=""
            :value="modelValue"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            class="bg-transparent border-none outline-none text-base w-full">
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        default: "",
    },
})
</script>

<style scoped>
    .employeeInput {
        background: #F8FAFE;
        border: 1px solid #A6BFF7;
        border-radius: 7px;
        color: #A6BFF7;
    }
    .employeeInput input::placeholder { 
        color: #A6BFF7;
        opacity: 1;
        font-style: italic;
    }

    .employeeInput input:-ms-input-placeholder {
        color: #A6BFF7;
    }

    .employeeInput input::-ms-input-placeholder {
        color: #A6BFF7;
    }
</style>