<template>
  <div id="app">
    <header>
      <div class="logo">
        <img width="60" src="@/assets/logo-small.svg">
      </div>
      <!-- /.logo -->
    </header>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
header {
  background-color: $spotify-transparent;
  padding: 1rem;
}

</style>
