<template>
    <button @click="$emit('click')" :class="{'button-round': rounded, 'button-enter': !rounded}">
      <img v-if="isCloseButton" src="/src/assets/images/Close.svg" alt="Vector">
      <slot name="icon"/>
      <span class="text-normal" :style="{color: 'var(--white)'}" v-if="label">{{ label }}</span>
    </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  emits: ['click'],
  props: {
    rounded: {
      type: Boolean,
      required: false
    },
    label: String,
    isCloseButton: Boolean
  }
}
</script>

<style scoped lang="scss">

%button-round-shared {
  cursor: pointer;
  display: flex;
  width: var(--56, 56px);
  height: var(--56, 56px);
  padding: var(--0, 0px) var(--24, 24px);
  justify-content: center;
  align-items: center;
  gap: var(--12, 12px);
  flex-shrink: 0;
  border-radius: 32px;
}

%button-enter-shared {
  cursor: pointer;
  display: inline-flex;
  width: 144px;
  height: var(--56, 56px);
  padding: var(--0, 0px) var(--24, 24px);
  border-radius: 32px;
  align-items: center;
  gap: var(--12, 12px);
  flex-shrink: 0;
  justify-content: center;
}

.button-enter{
  @extend %button-enter-shared;
  background: var(--green-light);

  &:disabled {
    @extend %button-enter-shared;
    background: var(--gray);
  }

  &:hover {
    @extend %button-enter-shared;
    background: var(--green-middle);
  }

  &:active {
    @extend %button-enter-shared;
    background: var(--green-dark);
  }
}

.button-round {
  @extend %button-round-shared;
  background: var(--green-light);

  &:disabled {
    @extend %button-round-shared;
    background: var(--gray);
  }

  &:hover {
    @extend %button-round-shared;
    background: var(--green-middle);
  }

  &:active {
    @extend %button-round-shared;
    background: var(--green-dark);
  }
}

</style>