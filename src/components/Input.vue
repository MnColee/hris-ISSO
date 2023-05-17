<template>
    <div class="w-full">
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

<style>
    .bg-input {
        background: #F3F7FE;
    }
    .bg-input input::placeholder { 
        color: #A6BFF7;
        opacity: 1;
    }

    .bg-input input:-ms-input-placeholder {
        color: #A6BFF7;
    }

    .bg-input input::-ms-input-placeholder {
        color: #A6BFF7;
    }
</style>