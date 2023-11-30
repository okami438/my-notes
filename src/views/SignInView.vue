<template>
  <dialog-component @close="$emit('close')">
    <template #content>
      <SignInComponent @registration="$emit('registration')"/>
    </template>
  </dialog-component>
</template>

<script>
import DialogComponent from "@/components/dialog/DialogComponent.vue";
import SignInComponent from '@/components/dialog/type/SingInComponent.vue';

export default {
  name: "SignInView",
  components: {DialogComponent, SignInComponent},
  emits: ['close', 'registration'],
}
</script>

<style scoped lang="scss">

</style>