<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import http from "@/api/http/http";
import {ping} from "@/api/ping";
import {mapActions} from "vuex";

export default {
  components: {
    HeaderComponent
  },

  mounted() {
    ping.testPing()
  }

}
</script>

<style lang="scss">

</style>