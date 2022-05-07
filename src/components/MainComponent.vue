<template>
  <main class="pt-5">
    <MusicList />
  </main>
</template>

<script>
import MusicList from "@/components/MusicListComponent.vue";
export default {
  name: "SiteMain",
  components: {
    MusicList,
  },
};
</script>
