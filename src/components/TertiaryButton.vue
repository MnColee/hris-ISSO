<template>
    <button class="btn-tertiary text-base">{{ buttonText }}</button>
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
    .btn-tertiary {
        background: #F8FAFE;
        color: #2563EB;
        border: 1px solid #2563EB;
    }
</style>