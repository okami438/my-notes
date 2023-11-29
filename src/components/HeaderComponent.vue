<template>
  <header>
    <img src="/src/assets/images/logo.svg" alt="SVG">
    <ButtonsComponent @click="showDialogComponent = !showDialogComponent" label="Вход">
      <template #icon>
        <img src="/src/assets/images/Vector.svg" alt="SVG">
      </template>
    </ButtonsComponent>
    <dialog-component v-if="showDialogComponent"/>
  </header>
</template>

<script>
import DialogComponent from "@/components/DialogComponent.vue";
import ButtonsComponent from "@/components/ButtonsComponent.vue";

export default {
  name: 'HeaderComponent',
  components: {
    ButtonsComponent,
    DialogComponent
  },
  data() {
    return {
      showDialogComponent: false
    }
  }
}
</script>

<style scoped lang="scss">

header {
  display: flex;
  padding: var(--40, 40px) var(--160, 10rem);
  justify-content: space-between;
  align-items: center;
}

</style>
