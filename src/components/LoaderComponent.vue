<template>
  <div class="container">
    <div class="loading d-flex justify-content-center align-items-center">
      <h1 class="text-dark">Loading...</h1>
    </div>
    <!-- /.loading -->
  </div>
  <!-- /.container loading -->
</template>

<script>
export default {
  name: "loaderComponent",
};
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  width: 100vw;
  background-color: white;
}
</style>