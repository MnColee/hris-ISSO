<template>
    <teleport to='body'>
        <transition name="modal-animation">
            <section v-show="modalAdmin" class="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center sm:px-0">
                <transition name="modal-animaton-inner">
                    <form v-show="modalAdmin" class="modal-inner h-screen overflow-auto w-full sm:rounded-xl lg:h-auto sm:w-3/4 md:w-6/12 lg:w-5/12 xl:w-2/5">
                        <!--modal content -->
                        <slot />
                        <div class="w-full flex items-center justify-center py-4 gap-x-4">
                            <TertiaryButton type="button" @click="close" buttonText="Cancel" class="py-1 px-7 rounded-md"/>
                            <SecondaryButton buttonText="Add" class="py-1 px-10 rounded-md"/>
                        </div>
                    </form>
                </transition>
            </section>
        </transition>
    </teleport>
</template>

<script>
import SecondaryButton from '../../components/SecondaryButton.vue';
import TertiaryButton from '../../components/TertiaryButton.vue';

export default {
    props: ["modalAdmin"],
    emits: ["close"],
    setup(props, { emit }) {
        const close = () => {
            emit("close");
        };
        return { close };
    },
    components: { SecondaryButton, TertiaryButton }
}
</script>

<style scoped>
    .modal-inner {
        background: #FBFCFF;
    }
</style>