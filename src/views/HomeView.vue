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
    <router-view />
  </main>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>


<style scoped lang="scss">

@media screen and (max-width: 1920px) {
  .main {
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
        width: 30vw;
        position: absolute;
        top: 18%;
        left: 12%;
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .main {
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
        width: 30vw;
        position: absolute;
        top: 18%;
        left: 12%;
      }
    }
  }
}

@media screen and (max-width: 720px) {
  .main {
    display: flex;
    padding: var(--0, 0px) var(--160, 40px);
    justify-content: space-between;
    align-items: center;
    flex: 1;
    align-self: stretch;
    flex-wrap: wrap;

    &__left-side {
      margin-left: 5rem;
      display: flex;
      flex-direction: column;
      gap: var(--40px, 40px);
      padding: var(--0, 0px);
      align-items: flex-start;
      width: auto;
      max-width: 33%;
      flex-shrink: 0;

      & > h1 {
        text-align: center;
      }

      & > h3 {
        margin-left: 2rem;
        text-align: center;
        width: 720px;
      }
    }

    &__right-side {
      position: relative;

      &-exp-image-overlapping {
        margin-left: 8rem;
        width: 55vw;
      }

      &-objects-image-overlapping {
        margin-left: 8rem;
        width: 40vw;
        position: absolute;
        top: 18%;
        left: 12%;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .main {
    display: flex;
    padding: var(--0, 0px) var(--160, 20px);
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
      margin-left: -1rem;

      & > h1 {
        width: 450px;
        text-align: center;
      }

      & > h3 {
        text-align: center;
        width: 720px;
      }
    }

    &__right-side {
      position: relative;

      &-exp-image-overlapping {
        margin-left: 1rem;
        width: 110vw;
      }

      &-objects-image-overlapping {
        margin-left: 1rem;
        width: 290px;
        height: 275px;
        position: absolute;
        top: 18%;
        left: 12%;
      }
    }
  }
}



</style>