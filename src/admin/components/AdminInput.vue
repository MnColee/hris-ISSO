<template>
    <div class="adminInput rounded py-1 px-2">
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
    .adminInput {
        background: #F8FAFE;
        border: 1.5px solid #A6BFF7;
        border-radius: 10px;
        color: #A6BFF7;
    }
    .adminInput input::placeholder { 
        color: #A6BFF7;
        opacity: 1;
        font-style: italic;
    }

    .adminInput input:-ms-input-placeholder {
        color: #A6BFF7;
    }

    .adminInput input::-ms-input-placeholder {
        color: #A6BFF7;
    }
</style>