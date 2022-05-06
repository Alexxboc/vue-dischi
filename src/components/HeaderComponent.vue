<template>
  <header class="bg_transparent p-3">
    <div class="navbar">
      <div class="logo">
        <img width="60" src="@/assets/logo-small.svg" />
      </div>
      <!-- /.logo -->
      <SelectGenre v-model="selectValue" @selection="changeValue"/>
    </div>
    <!-- /.navbar -->
  </header>
</template>

<script>
import SelectGenre from "@/components/SelectGenreComponent.vue";
import state from "@/state.js";
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
    changeValue() {
      console.log(this.selectValue);
      state.selectValue = this.selectValue
      console.log(state);
    
    }
  }
};
</script>

