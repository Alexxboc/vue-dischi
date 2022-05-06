<template>
  <div class="card h-100 p-3 rounded-0 bg_transparent" style="width: 15rem">
    <img :src="poster" class="card-img-top img-fluid" alt="titolo" />
    <div class="card-body text-dark text-center">
      <h2 class="card-title text_white text-uppercase fs-4 fw-bold mt-3">
        {{titolo}}
      </h2>
      <p class="card-text text_light fs-5 mt-4 mb-0 fw-bolder">{{autore}}</p>
      <p class="card-text text_light fs-6 fw-bolder">{{anno}}</p>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    poster: String,
    titolo: String,
    autore: String,
    anno: String,



  },
};
</script>