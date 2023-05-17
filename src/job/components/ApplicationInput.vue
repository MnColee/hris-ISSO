<template>
    <div class="bg-appInput rounded-md py-1.5 px-2">
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
    .bg-appInput {
        background: #F8FAFE;
        border: 1.5px solid #A6BFF7;
        border-radius: 10px;
    }
    .bg-appInput input::placeholder { 
        color: #A6BFF7;
        opacity: 1;
        font-style: italic;
    }

    .bg-appInput input:-ms-input-placeholder {
        color: #A6BFF7;
    }

    .bg-appInput input::-ms-input-placeholder {
        color: #A6BFF7;
    }
</style>