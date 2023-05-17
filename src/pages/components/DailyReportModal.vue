<template>
    <teleport to='body'>
        <transition name="modal-animation">
            <section v-show="modalDailyReport" class="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center sm:px-0">
                <transition name="modal-animaton-inner">
                    <form v-show="modalDailyReport" class="modal-inner relative h-screen overflow-auto w-full sm:rounded-xl lg:h-auto sm:w-3/4 md:w-6/12 lg:w-5/12 xl:w-2/5">
                        <!--modal content -->
                        <button type="button" @click="close" class="absolute top-2.5 right-4 text-blue-300 cursor-pointer font-bold">X</button>
                        <slot />
                    </form>
                </transition>
            </section>
        </transition>
    </teleport>
</template>

<script>
export default {
    props: ["modalDailyReport"],
    emits: ["close"],
    setup(props, { emit }) {
        const close = () => {
            emit("close");
        };
        return { close };
    },
}
</script>

<style scoped>
.modal-inner {
    background: #FBFCFF;
}
.modal-header {
    border-bottom: 3px solid #173C8F;
}
</style>