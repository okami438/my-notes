<template>
  <div id="app">
    <HeaderComponent :user="user"/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import {ping} from "@/api/ping";
import {authentication} from "@/api";
import store from "@/store";

export default {
  components: {
    HeaderComponent
  },

  data() {
    return {
      user: null
    }
  },

  mounted() {
    if (store.getters["authentication/isLoggedIn"]) {
      this.fetchUser()
    }
    ping.testPing()
  },

  methods: {
    fetchUser() {
      try {
        authentication.getAuthentication().then(({data}) => {
          this.user = data;
        })
      } catch(e) {
        console.error(e)
      }
    }
  }

}
</script>

<style lang="scss">

</style>