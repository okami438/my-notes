<template>
  <section class="container__section-ui">
    <h2>Регистрация</h2>
    <FormRenderComponent :form="form"/>
    <div class="container__section-ui-signup">
      <span class="container__section-ui-signup-text text-small">У вас есть аккаунт?
        <router-link class="text-small container__section-ui-signup-link" to="/login">Войдите</router-link>
      </span>
      <ButtonComponent :style="{width: '13.75rem'}" label="Зарегистрироваться" @click="fetchReg"/>
    </div>
  </section>
</template>

<script>
import FormRenderComponent from "@/components/forms/FormRenderComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import {requestMapper} from "@/utils/requestMapper";
import {registration} from "@/api/registration";
import {DIALOG_SIGN_UP} from "@/constans/dialogSignUp";

export default {
  name: "SignUpComponent",
  components: {ButtonComponent, FormRenderComponent},
  data() {
    return {
      form: []
    }
  },

  created() {
    this.form = DIALOG_SIGN_UP
  },

  methods: {

    async fetchReg() {
      try {
        await registration.postRegistration(requestMapper(this.form));
      } catch(e) {
        console.log(e)
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