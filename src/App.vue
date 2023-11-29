<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script setup>
import Header from "@/components/Header.vue";

export default {
  components: [Header]
}
</script>