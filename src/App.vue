<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
   
  </div>
</template>

<script>

import SiteHeader from "@/HeaderComponent.vue";
import SiteMain from "@/MainComponent.vue"

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
  },

};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
