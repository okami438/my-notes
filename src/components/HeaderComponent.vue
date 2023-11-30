<template>
  <header>
    <img src="/src/assets/images/MyNotes.svg" alt="SVG">
    <ButtonComponent @click="toLogin" label="Вход">
      <template #icon>
        <img src="/src/assets/images/Vector.svg" alt="SVG">
      </template>
    </ButtonComponent>
  </header>
</template>

<script>
import DialogComponent from "@/components/dialog/DialogComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import SignUpView from "@/views/SignUpView.vue";
import SignInView from "@/views/SignInView.vue"

export default {
  name: 'HeaderComponent',
  components: {SignUpView, SignInView, ButtonComponent, DialogComponent},


  methods: {
    toLogin() {
      this.$router.replace("/login");
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
