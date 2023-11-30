<template>
  <dialog-component @close="$emit('close')">
    <template #content>
      <SignUpComponent @enter="$emit('enter')"/>
    </template>
  </dialog-component>
</template>

<script>
import DialogComponent from "@/components/dialog/DialogComponent.vue";
import SignUpComponent from "@/components/dialog/type/SingUpComponent.vue";

export default {
  name: "SignUpView",
  components: {SignUpComponent, DialogComponent},
  emits: ['close', 'enter'],
}
</script>

<style scoped lang="scss">

</style>