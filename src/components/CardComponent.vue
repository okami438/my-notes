<template>
  <div class="card">
    <header>
      <h4> {{ title }} </h4>
    </header>
    <main class="card__inner">
      <section>
      <span class="text-normal card__inner-text">
        {{ content }}
      </span>
      </section>
      <section class="card__inner-section-button">
        <ButtonComponent  :label="'Удалить'" @click="fetchDelete">
          <template #icon>
            <img src="@/assets/images/Close.svg" alt="delete">
          </template>
        </ButtonComponent>
      </section>
    </main>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import {notes} from "@/api";

export default {
  name: "CardComponent",
  components: {ButtonComponent},
  props: {
    item: Object
  },

  computed: {
    title() {
      return this.item && (this.item.title === null || this.item.title === undefined) ? 'Заголовок' : this.item.title
    },

    content() {
      return this.item && (this.item.content === null || this.item.content === undefined) ?
          'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.'
          : this.item.content
    }
  },

  methods: {
    async fetchDelete() {
      try {
        await notes.deleteNotes(this.item.id)
      } catch(e) {
        console.error(e)
      }
    }
  }
}
</script>


<style scoped lang="scss">


.card {
  display: flex;
  flex-direction: column;
  max-height: 480px;
  height: fit-content;
  width: 510px;
  align-items: flex-start;
  box-shadow: 0 3px 1px 0 #0A1621;
  border-radius: 12px;
  background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.1) 0) no-repeat 100% 0 / 2em 2em, linear-gradient(-135deg, transparent 1.5em, var(--green-light) 0);

  & > header {
    padding: 1.3rem;
    width: 100%;
    border-bottom: 1px solid var(--green-middle, #97AB0D);


    & > h4 {
      color: var(--white);
    }

  }

  &__inner {
    display: flex;
    flex-direction: column;
    padding: 1.3rem;
    width: 100%;

    &-text {
      color: var(--white)
    }

    &-section-button {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }

  }
}

</style>