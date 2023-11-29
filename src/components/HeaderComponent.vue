<template>
  <header>
    <img src="/src/assets/images/MyNotes.svg" alt="SVG">
    <ButtonsComponent @click="showDialogComponent = !showDialogComponent" label="Вход">
      <template #icon>
        <img src="/src/assets/images/Vector.svg" alt="SVG">
      </template>
    </ButtonsComponent>
    <dialog-component v-if="showDialogComponent" @close="showDialogComponent = false"/>
  </header>
</template>

<script>
import DialogComponent from "@/components/DialogComponent.vue";
import ButtonsComponent from "@/components/ButtonComponent.vue";

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
