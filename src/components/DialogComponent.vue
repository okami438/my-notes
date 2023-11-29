<template>
  <div class="dialog-mask">
    <div class="container">
      <header class="container__header">
        <ButtonsComponent rounded is-close-button @click="$emit('close')"/>
      </header>
      <section class="container__section-ui">
        <h2>Вход в ваш аккаунт</h2>
        <div v-for="item in form" :key="item.id">
          <InputComponent v-if="item.type === 'text'" :item="item"/>
          <InputPasswordComponent v-if="item.type === 'password'" :item="item"/>
        </div>
        <div class="container__section-ui-signup">
          <span class="container__section-ui-signup-text text-small">У вас нет аккаунта? <span class="text-small-bold">Зарегистрируйтесь</span></span>
          <ButtonsComponent label="Войти" @click="fetchAuth"/>
        </div>
          <span v-if="isError" class="container__section-ui-error">Пользователь с таким логином не найден</span>
      </section>
    </div>
  </div>

</template>

<script>
import ButtonsComponent from "@/components/ButtonComponent.vue";
import InputComponent from "@/components/InputTextComponent.vue";
import InputPasswordComponent from "@/components/InputPasswordComponent.vue";
import {authentication} from "@/api";

export default {
  name: "DialogComponent",
  emits: ['close'],
  components: {
    InputPasswordComponent,
    ButtonsComponent,
    InputComponent
  },
  data() {
    return {
      isError: null,
      form: [
        {id: 'email', placeholder: 'Введите значение', label: 'Email', type: 'text', value: ''},
        {id: 'password', placeholder: 'Введите пароль', label: 'Пароль', type: 'password', value: ''}
      ]
    }
  },

  methods: {

    async fetchAuth() {

      try {
        const requestMapper = {};
        this.form.forEach(item => {
          requestMapper[item.id] = item.value;
        });
        await authentication.getAuthenticationUser(requestMapper);
        this.isError = null;
      } catch(e) {
        console.log(e)
        this.isError = e;
      }

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

    &-error {
      padding: 1rem 1rem 1rem 1.5rem;
      color: #ff7461;
      background-color: #323649;
      border-radius: 2rem;
    }
  }
}

</style>