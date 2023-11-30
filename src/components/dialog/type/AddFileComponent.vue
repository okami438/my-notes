<template>
  <ButtonComponent rounded @click="$emit('click')">
    <template #icon>
      <img src="@/assets/images/Add.svg" alt="add">
    </template>
  </ButtonComponent>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
  name: "AddFileComponent",
  components: {
    ButtonComponent
  },
  emits: ['click']
}
</script>

<style scoped lang="scss">

</style>