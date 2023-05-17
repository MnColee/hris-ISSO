<template>
    <button class="btn-primary text-base uppercase rounded-md lg:px-4 lg:py-1">{{ buttonText }}</button>
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
    .btn-primary {
        background-color: #F6BE35;
        color: #FEF9EB;
    }
</style>