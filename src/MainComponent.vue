<template>
  <main class="pt-6" v-if="!loading">
    <div class="container">
      <div class="row row-cols-5">
        
          <CardComponent v-for="(album, index) in musicList" :key="index"
            :poster="album.poster"
            :titolo="album.title"
            :autore="album.author"
            :anno="album.year"
          />
        

        
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
      API_URL: "https://flynn.boolean.careers/exercises/api/array/music",
      response: null,
      musicList: null,
      loading: true,
    };
  },
  methods: {
    callApi() {
       axios
      .get(this.API_URL)
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
    }
  },
  mounted() {
   this.callApi();
  },
};
</script>
