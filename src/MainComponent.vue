<template>
     <main class="pt-6">
      <div class="container">
        <div class="row row-cols-5">
          <div class="col gy-3" v-for="(album, index) in musicList" :key="index">
              <CardComponent :poster="album.poster" :titolo="album.title" :autore="album.author" />
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
import CardComponent from "@/components/CardComponent.vue"
export default {
  name: 'SiteMain',
  components: {
    CardComponent,
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
