<template>
  <main class="main">
    <section class="main__left-side">
      <h1 :style="{color: 'var(--white)'}">Мои заметки</h1>
      <h3 :style="{color: 'var(--gray)'}">Не забывай о важном, храни его в облаке.</h3>
    </section>
  </main>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>


<style scoped lang="scss">

.main {
  display: flex;
  padding: var(--0, 0px) var(--80, 80px);
  border-radius: var(--0, 0px);
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;


  &__left-side {
    display: flex;
    height: 392px;
    max-width: 642px;
    width: auto;
    padding: var(--0, 0px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--40, 40px);
    flex: 1 0 0;
  }
}


</style>