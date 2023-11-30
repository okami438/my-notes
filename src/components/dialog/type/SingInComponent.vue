<template>
  <section class="container__section-ui">
    <h2>Вход в ваш аккаунт</h2>
    <FormRenderComponent :form="form"/>
    <div class="container__section-ui-signup">
      <span class="container__section-ui-signup-text text-small">У вас нет аккаунта?
        <router-link class="text-small container__section-ui-signup-link" to="/signup">Зарегистрируйтесь</router-link>
      </span>
      <ButtonsComponent label="Войти" @click="fetchAuth"/>
    </div>
    <span v-if="isError" class="container__section-ui-error">Пользователь с таким логином не найден</span>
  </section>
</template>

<script>
import FormRenderComponent from "@/components/forms/FormRenderComponent.vue";
import ButtonsComponent from "@/components/ButtonComponent.vue";
import {authentication} from "@/api";
import {requestMapper} from "@/utils/requestMapper";
import {DIALOG_SIGN_IN} from "@/constans/dialogSingIn";

export default {
  name: "SignInComponent",
  components: {ButtonsComponent, FormRenderComponent},
  data() {
    return {
      isError: null,
      form: []
    }
  },

  created() {
    this.form = DIALOG_SIGN_IN
  },

  methods: {

    async fetchAuth() {

      try {
        this.isError = null;
        await authentication.postAuthentication(requestMapper(this.form));
      } catch (e) {
        console.log(e)
        this.isError = e;
      }

    }

  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/styles";

.container__section-ui {
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

    &-text {
      color: var(--gray);

      & > span {
        cursor: pointer;
        color: var(--green);
      }
    }

    &-link {
      @extend %link;
      color: var(--green-light);

      &:hover {
        color: var(--white)
      }
    }
  }


  &-error {
    padding: 1rem 1rem 1rem 1.5rem;
    color: #ff7461;
    background-color: #323649;
    border-radius: 2rem;
  }
}

</style>
