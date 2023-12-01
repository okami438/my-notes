<template>
<div class="menu">
  <img src="@/assets/images/ArrowTop.svg" alt="arrow">
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
  right: 10.5rem;
  z-index: 3;
  box-shadow: 0 6px 14px 3px #0A1621;

  & > img {
    position: absolute;
    top: -9px;
    right: 10px;
  }

  & > span {
    cursor: pointer;
    color: var(--green-light);

    &:hover {
      color: var(--white);
    }
  }
}

</style>