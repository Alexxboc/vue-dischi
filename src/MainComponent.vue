<template>
     <main class="pt-6">
      <div class="container">
        <div class="row row-cols-5">
          <div class="col gy-3" v-for="(album, index) in musicList" :key="index">
            <div class="card h-100 p-3 rounded-0 bg_transparent" style="width: 15rem">
              <img :src="album.poster" class="card-img-top img-fluid" alt="" />
              <div class="card-body text-dark text-center">
                <h2 class="card-title text_white text-uppercase fs-4 fw-bold mt-3">{{album.title}}</h2>
                <p class="card-text text_light fs-5 mt-4">{{album.author}}</p>
              </div>
            </div>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row row-cols-5 -->
      </div>
      <!-- /.container -->
    </main>
</template>

<script>
import axios from "axios";
export default {
  name: 'SiteMain',
  components: {
    
  },
  data() {
    return {
      link: "https://flynn.boolean.careers/exercises/api/array/music",
      response: null,
      musicList: null,
    };
  },
  mounted() {
    axios.get(this.link).then((response) => {
      console.log(response);
      this.musicList = response.data.response;
      // console.log(this.musicList);
    })
    .catch(error => {
      console.log(error);
    })
  },
};
</script>
