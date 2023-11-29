<template>
  <div class="dialog-mask">
    <div class="container">
      <header class="container__header">
        <ButtonsComponent rounded is-close-button/>
      </header>
      <section class="container__section-ui">
        <h2>Вход в ваш аккаунт</h2>
        <div v-for="item in this.form" :key="item.id">
          <label class="container__section-ui-label text-small" :for="item.id"> {{ item.label }} </label>
          <input class="container__section-ui-input" type="text" :id="item.id" :value="item.value"
                 :placeholder="item.placeholder">
        </div>
        <div class="container__section-ui-signup">
          <span class="container__section-ui-signup-text text-small">У вас нет аккаунта? <span class="text-small-bold">Зарегистрируйтесь</span></span>
          <ButtonsComponent label="Войти"/>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";

export default {
  name: "DialogComponent",
  components: {
    ButtonsComponent
  },
  data() {
    return {
      form: [
        {id: 'name', placeholder: 'Введите значение', label: 'Email', value: ''},
        {id: 'password', placeholder: 'Введите пароль', label: 'Пароль', value: ''}
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.dialog-mask {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 3;

  &:before {
    content: "";
    display: block;
    background: var(--dark);
    opacity: 0.7;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  width: 780px;
  min-height: 672px;
  z-index: 4;
  border-radius: var(--40, 40px);
  background: var(--dark-middle);

  &__header {
    display: flex;
    justify-content: flex-end;
    padding: 1.25rem;
  }

  &__section-ui {
    color: var(--white);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1 0 0;
    gap: 1rem;
    padding: 0.5rem 5rem 2rem 5rem;

    & > h2 {
      margin-bottom: 2rem;

    }

    & > div {
      width: 100%;
      position: relative;
    }

    &-label {
      display: block;
      margin-bottom: 8px;
      color: var(--gray);
      padding-left: 1rem;
    }

    &-input {
      width: 100%;
    }

    &-signup {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin: 2rem 0;
    }

    &-signup-text {
      color: var(--gray);

      & > span {
        color: var(--green);
      }
    }
  }
}

</style>