<script>
export default {
  name: "PasswordComponent",
  props: {
    item: Object
  }
}
</script>

<template>
  <div class="input-password-form">
    <label class="input-password-form__label text-small" :for="item.id"> {{ item.label }} </label>
    <div class="input-password-form__container">
      <input class="input-password-form__input" :type="item.type" :id="item.id" :value="item.value"
             :placeholder="item.placeholder">
      <img class="input-password-form__image" src="/src/assets/images/Eye.svg"  alt="eye"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "src/assets/styles/layouts.scss";

.input-password-form {

  & .input-password-form__container {
    @extend %input-shared;
    display: flex;
    padding: 0 1.5rem;
  }

  &__label {
    display: block;
    margin-bottom: 8px;
    color: var(--gray);
    padding-left: 1rem;
  }

  &__input {
    @extend %text-normal;
    width: 100%;
    height: auto;
  }

  &__image {
    width: 1.5rem;
  }

}

</style>