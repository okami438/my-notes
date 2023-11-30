<template>
  <div>
    <div v-for="item in form" :key="item.id">
      <InputTextComponent     :item="item"  v-if="item.type === 'text'"/>
      <InputPasswordComponent :item="item"  v-if="item.type === 'password'"/>
    </div>
  </div>
</template>

<script>
import InputTextComponent from "@/components/forms/input/InputTextComponent.vue";
import InputPasswordComponent from "@/components/forms/input/InputPasswordComponent.vue";

export default {
  name: "FormRenderComponent",
  components: {InputPasswordComponent, InputTextComponent},
  props: {
    form: Array
  }
}
</script>

<style scoped lang="scss">

</style>