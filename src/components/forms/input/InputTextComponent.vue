<template>
<div class="input-text-form">
  <label class="input-text-form__label text-small" :for="item.id"> {{ item.label }} </label>
  <div class="input-text-form__container">
    <input
        class="input-text-form__container-input"
        type="text"
        :id="item.id"
        v-model="item.value"
        :placeholder="item.placeholder"
    >
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
@import "@/assets/styles/styles";

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

    &:hover {
      border: 2px solid var(--green-light);
    }

    &:active {
      border: 2px solid var(--green-light);
    }

    &-input {
      @extend %text-normal;
      width: 100%;
      height: auto;
    }
  }

}


</style>