<template>
<div class="input-text-form">
  <label :for="item.id"> {{ item.label }} </label>
  <div class="input-text-form__container">
    <input
        type="text"
        :id="item.id"
        v-model="item.value"
        :maxlength="maxLength"
        :placeholder="item.placeholder"
    >
  </div>
  <span v-if="item.isShowLength" class="text-small">{{ item.value.length }} / {{ maxLength }}</span>
</div>
</template>

<script>

export default {
  name: 'InputComponent',
  props: {
    item: Object
  },
  data() {
    return {
      maxLength: 100
    }
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/styles";

.input-text-form {

  & > label {
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

    & > input {
      @extend %text-normal;
      width: 100%;
      height: auto;
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