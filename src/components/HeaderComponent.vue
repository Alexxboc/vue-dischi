<template>
  <header class="bg_transparent p-3">
    <div class="navbar">
      <div class="logo">
        <img width="60" src="@/assets/logo-small.svg" />
      </div>
      <!-- /.logo -->
      <SelectGenre v-model="selectValue" @select="selection"/>
    </div>
    <!-- /.navbar -->
  </header>
</template>

<script>
import SelectGenre from "@/components/SelectGenreComponent.vue";
import state from "@/state";
export default {
  name: "SiteHeader",
  components: {
    SelectGenre
  },
  data() {
    return {
      selectValue: ''
    }
  },
  methods: {
    selection() {
      console.log('selection!');
      console.log(this.selectValue);
    }
  }
};
</script>

