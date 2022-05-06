<template>
  <main class="pt-6" v-if="!loading">
    <div class="container">
      <div class="row row-cols-5">
        <div class="col gy-3" v-for="(album, index) in musicList" :key="index">
          <CardComponent
            :poster="album.poster"
            :titolo="album.title"
            :autore="album.author"
            :anno="album.year"
          />
        </div>

        <!-- /.col -->
      </div>
      <!-- /.row row-cols-5 -->
    </div>
    <!-- /.container -->
    
  </main>
  <loaderComponent v-else />
</template>

<script>
import axios from "axios";
import CardComponent from "@/components/CardComponent.vue";
import loaderComponent from "@/components/LoaderComponent.vue"
export default {
  name: "SiteMain",
  components: {
    CardComponent,
    loaderComponent,
  },
  data() {
    return {
      link: "https://flynn.boolean.careers/exercises/api/array/music",
      response: null,
      musicList: null,
      loading: true,
    };
  },
  mounted() {
    axios
      .get(this.link)
      .then((response) => {
        console.log(response);
        this.musicList = response.data.response;
        // console.log(this.musicList);
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.error = `  OPS! ${error.message}`
      });
  },
};
</script>
