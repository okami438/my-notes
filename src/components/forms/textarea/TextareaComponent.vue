<template>
  <div class="textarea-text-form">
    <label class="textarea-text-form__label text-small" :for="item.id"> {{ item.label }} </label>
    <div class="textarea-text-form__container">
      <textarea
          class="textarea-text-form__container-textarea"
          :id="item.id"
          v-model="item.value"
          :placeholder="item.placeholder"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'TextareaComponent',
  props: {
    item: Object
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/styles";


.textarea-text-form {

  &__label {
    display: block;
    margin-bottom: 8px;
    color: var(--gray);
    padding-left: 1rem;
  }

  & .textarea-text-form__container {
    @extend %textarea-shared;
    display: flex;
    padding: 1rem 1.5rem;

    &:hover {
      border: 2px solid var(--green-light);
    }

    &:active {
      border: 2px solid var(--green-light);
    }

    &-textarea {
      @extend %text-normal;
      width: 100%;
      height: auto;
    }
  }

}

</style>