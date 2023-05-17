<template>
    <button class="btn-secondary text-base">{{ buttonText }}</button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: ()=> 'Label',
        },
    },
}
</script>
<style>
    .btn-secondary {
        background-color: #2563EB;
        color: white;
    }
</style>