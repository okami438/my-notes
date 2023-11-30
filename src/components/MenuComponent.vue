<template>
<div class="menu">
  <span class="text-small-bold" @click="$emit('logout')">Выйти</span>
</div>
</template>

<script>
export default {
  name: "MenuComponent",
  emits: ['logout']
}
</script>


<style scoped lang="scss">

div {

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--dark-middle);
  border-radius: 12px;
  padding: 40px;
  position: absolute;
  top: 7rem;
  right: 11rem;
  z-index: 3;
  box-shadow: 0 6px 14px 3px #0A1621;

  & > span {
    cursor: pointer;
    color: var(--green-light);

    &:hover {
      color: var(--white);
    }
  }
}

</style>