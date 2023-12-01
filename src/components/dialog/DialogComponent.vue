<template>
  <div class="dialog-mask">
    <div class="dialog-mask__container">
      <header class="dialog-mask__container-header">
        <ButtonComponent rounded is-close-button @click="$emit('close')"/>
      </header>
      <slot name="content"></slot>
    </div>
  </div>

</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "DialogComponent",
  emits: ['close'],
  components: {
    ButtonComponent,
  },
}
</script>

<style scoped lang="scss">

.dialog-mask {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 3;

  &:before {
    content: "";
    display: block;
    background: var(--dark);
    opacity: 0.7;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    width: 780px;
    min-height: 672px;
    z-index: 4;
    border-radius: var(--40, 40px);
    background: var(--dark-middle);

    &-header {
      display: flex;
      justify-content: flex-end;
      padding: 1.25rem;
    }
  }
}



</style>