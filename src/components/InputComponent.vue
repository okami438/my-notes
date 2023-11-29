<template>
<div class="input-text-form">
  <label class="input-text-form__label text-small" :for="item.id"> {{ item.label }} </label>
  <div class="input-text-form__container">
    <input class="input-text-form__input" :type="item.type" :id="item.id" :value="item.value"
           :placeholder="item.placeholder">
  </div>

</div>
</template>

<script>

export default {
  name: 'InputComponent',
  props: {
    item: Object
  }
}

</script>

<style scoped lang="scss">
@import "src/assets/styles/layouts.scss";

.input-text-form {

  &__label {
    display: block;
    margin-bottom: 8px;
    color: var(--gray);
    padding-left: 1rem;
  }

  & .input-text-form__container {
    @extend %input-shared;
    display: flex;
    padding: 0 1.5rem;
  }

  &__input {
    @extend %text-normal;
    width: 100%;
    height: auto;
  }

}


</style>