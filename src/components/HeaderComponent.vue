<template>
  <header class="bg_transparent p-3">
    <div class="navbar">
      <div class="logo">
        <img width="60" src="@/assets/logo-small.svg" />
      </div>
      <!-- /.logo -->
      <div class="selection d-flex">
        <SelectGenre v-model="selectValue" @selection="changeValue" />
        <SelectAuthor v-model="selectAuthor" @selection="changeAuthor" />
      </div>
      <!-- /.selection -->
    </div>
    <!-- /.navbar -->
  </header>
</template>

<script>
import SelectGenre from "@/components/SelectGenreComponent.vue";
import SelectAuthor from "@/components/SelectAuthorComponent.vue";
import state from "@/state.js";
export default {
  name: "SiteHeader",
  components: {
    SelectGenre,
    SelectAuthor,
  },
  data() {
    return {
      selectValue: "",
      selectAuthor: ""
    };
  },
  methods: {
    changeValue() {
      // console.log(this.selectValue);
      state.selectValue = this.selectValue;
      // console.log(state);
    },
    changeAuthor() {
      // console.log(this.selectAuthor);
      state.selectAuthor = this.selectAuthor;
      //  
    }
  },
};
</script>

