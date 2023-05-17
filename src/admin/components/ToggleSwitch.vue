<template>
    <div class="flex items-center">
    <label class="flex items-center cursor-pointer">
        <div class="relative">
            <input type="checkbox" class="sr-only" :checked="value" @change="$emit('input', !value)">
            <div class="toggle__line w-14 h-6 bg-blue-500 rounded-full shadow-inner text-white lg:px-2.5">✓</div>
            <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
        </div>
        <div class="ml-3 text-gray-700 font-medium">
            <slot></slot>
        </div>
    </label>
  </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.toggle__line {
    transition: background-color 0.2s ease;
}

.toggle__dot {
    transition: transform 0.2s ease;
}

input:checked + .toggle__line {
    width: 3.5rem;
}

input:checked + .toggle__line + .toggle__dot {
    transform: translateX(130%);
}
</style>
