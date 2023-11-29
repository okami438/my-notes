<template>
  <div class="input-password-form">
    <label class="input-password-form__label text-small" :for="item.id"> {{ item.label }} </label>
    <div class="input-password-form__container">
      <input
          class="input-password-form__container-input"
          :type="item.type"
          :id="item.id"
          :value="item.value"
          v-model="item.value"
          :placeholder="item.placeholder"
      >
      <img
          class="input-password-form__container-image"
           :src="showPassword ? '/src/assets/images/Eye.svg' : '/src/assets/images/EyeBlocked.svg'"
           alt="eye"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputPasswordComponent",
  props: {
    item: Object
  },
  data() {
    return {
      showPassword: false
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/layouts.scss";

.input-password-form {

  &__label {
    display: block;
    margin-bottom: 8px;
    color: var(--gray);
    padding-left: 1rem;
  }

  &__container {
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

    &-image {
      cursor: pointer;
      width: 1.5rem;
    }
  }
}

</style>