<template>
  <main class="main">
    <article class="main__left-side">
      <h1 :style="{color: 'var(--white)', fontWeight: 'bold'}">Мои заметки</h1>
      <h3 :style="{color: 'var(--gray)', maxWidth: '394px'}">Не забывай о важном, храни его в облаке.</h3>
    </article>
    <section class="main__right-side">
      <img src="/src/assets/images/MainBackground.svg" alt="SVG" class="main__right-side-exp-image-overlapping">
      <img src="/src/assets/images/MainObjects.svg" alt="SVG" class="main__right-side-objects-image-overlapping">
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
  box-sizing: border-box;
  display: flex;
  padding: var(--0, 0px) var(--160, 160px);
  justify-content: space-between;
  align-items: center;
  flex: 1;
  align-self: stretch;
  flex-wrap: wrap;

  &__left-side {
    display: flex;
    flex-direction: column;
    gap: var(--40px, 40px);
    padding: var(--0, 0px);
    align-items: flex-start;
    width: auto;
    max-width: 33%;
    flex-shrink: 0;
  }

  &__right-side {
    position: relative;

    &-exp-image-overlapping {
      width: 40vw;
    }

    &-objects-image-overlapping {
      position: absolute;
      width: 30vw;
      top: 18%;
      left: 12%;

    }
  }
}


</style>