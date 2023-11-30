<template>
  <dialog-component @close="onClose">
    <template #content>
      <SignInComponent/>
    </template>
  </dialog-component>
</template>

<script>
import DialogComponent from "@/components/dialog/DialogComponent.vue";
import SignInComponent from '@/components/dialog/type/SingInComponent.vue';

export default {
  name: "SignInView",
  components: {DialogComponent, SignInComponent},

  methods: {
    onClose() {
      this.$router.replace("/");
    }
  }
}
</script>

<style scoped lang="scss">

</style>