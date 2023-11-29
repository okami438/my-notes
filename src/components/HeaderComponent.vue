<template>
  <header>
    <img src="/src/assets/images/logo.svg" alt="SVG">
    <button class="button-enter">
      <img src="/src/assets/images/Vector.svg" alt="SVG">
      <span class="text-normal" :style="{color: 'var(--white)'}">Вход</span>
    </button>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped lang="scss">

header {
  display: flex;
  width: auto;
  padding: var(--40, 40px) var(--160, 160px);
  justify-content: space-between;
  align-items: center;
  border-radius: var(--0, 0px);
}

</style>
