<template>
  <header>
    <img src="/src/assets/images/MyNotes.svg" alt="SVG">
    <ButtonComponent @click="showSignInView = !showSignInView" label="Вход">
      <template #icon>
        <img src="/src/assets/images/Vector.svg" alt="SVG">
      </template>
    </ButtonComponent>
    <SignInView v-if="showSignInView" @close="showSignInView = false" @registration="closeDialogFn('registration')"/>
    <SignUpView v-if="showSignUpView" @close="showSignUpView = false" @enter="closeDialogFn('enter')"/>
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
  data() {
    return {
      showSignUpView: false,
      showSignInView: false,
    }
  },

  methods: {
    closeDialogFn(type) {
      this.showSignInView = type === 'enter';
      this.showSignUpView = type === 'registration';
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
