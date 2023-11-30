<template>
  <dialog-component @close="onClose">
    <template #content>
      <SignUpComponent/>
    </template>
  </dialog-component>
</template>

<script>
import DialogComponent from "@/components/dialog/DialogComponent.vue";
import SignUpComponent from "@/components/dialog/type/SingUpComponent.vue";

export default {
  name: "SignUpView",
  components: {SignUpComponent, DialogComponent},

  methods: {
    onClose() {
      this.$router.replace("/");
    }
  }
}
</script>

<style scoped lang="scss">

</style>