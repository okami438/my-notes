<template>
  <div class="textarea-text-form">
    <label class="text-small" :for="item.id"> {{ item.label }} </label>
    <div class="textarea-text-form__container">
      <textarea
          :id="item.id"
          v-model="item.value"
          :placeholder="item.placeholder"
          :maxlength="maxLength"
      />
    </div>
    <span class="text-small">{{ item.value.length }} / {{ maxLength }}</span>
  </div>
</template>

<script>

export default {
  name: 'TextareaComponent',
  props: {
    item: Object
  },
  data() {
    return {
      maxLength: 500
    }
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/styles";

.test {
}

.textarea-text-form {

  & > label {
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

    & > textarea {
      @extend %text-normal;
      width: 100%;
      height: 100%;
      resize: none;
    }
  }

  & > span {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 1rem;
    color: var(--gray);
  }

}

</style>