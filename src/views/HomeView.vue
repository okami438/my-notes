<template>
  <div class="home">
    <HelloWorld/>
    <main class="main">
      <section class="main__left-side">
        <h1 :style="{color: 'var(--white)'}">Мои заметки</h1>
        <h3 :style="{color: 'var(--gray)'}">Не забывай о важном, храни его в облаке.</h3>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/header.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
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
    padding: var(--0, 0px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--40, 40px);
    flex: 1 0 0;
  }
}


</style>