<template>
  <header>
    <img src="/src/assets/images/MyNotes.svg" alt="SVG">
    <ButtonComponent @click="toLogin" label="Вход" v-if="!isLoggedIn">
      <template #icon>
        <img src="/src/assets/images/Vector.svg" alt="SVG">
      </template>
    </ButtonComponent>
    <div v-else>
      <span class="text-small">{{ userEmail }}</span>
      <ButtonComponent rounded :style="{backgroundColor: 'var(--dark-middle)'}" @click="isToggle = !isToggle">
        <template #icon>
          <img src="@/assets/images/User.svg" alt="user">
        </template>
      </ButtonComponent>
      <MenuComponent @logout="logout" v-if="isToggle"/>
    </div>
  </header>
</template>

<script>
import DialogComponent from "@/components/dialog/DialogComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import SignUpView from "@/views/SignUpView.vue";
import SignInView from "@/views/SignInView.vue"
import {mapActions, mapGetters, mapState} from "vuex";
import MenuComponent from "@/components/MenuComponent.vue";

export default {
  name: 'HeaderComponent',
  components: {MenuComponent, SignUpView, SignInView, ButtonComponent, DialogComponent},
  data() {
    return {
      isToggle: false
    }
  },


  mounted() {
    console.log(this.isLoggedIn)
  },

  computed: {

    ...mapState('authentication', {
      userEmail: 'userEmail'
    }),

    ...mapGetters('authentication', {
      isLoggedIn: 'isLoggedIn',
    }),
  },

  methods: {
    ...mapActions('authentication', {
      logout: 'logout'
    }),

    toLogin() {
      this.$router.replace("/login");
    },
  }
}
</script>

<style scoped lang="scss">

header {
  display: flex;
  padding: var(--40, 40px) var(--160, 10rem);
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 17rem;

    & > span {
      color: var(--white)
    }
  }
}

</style>
