<template>
  <main class="pt-6">
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
