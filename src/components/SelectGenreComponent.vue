<template>
  <select
    class="form-select form-select-lg mb-3 w-auto"
    aria-label=".form-select-lg example"
    @change="$emit('select', $event.target.value)"
  >
    <option selected>Seleziona un genere</option>
    <option :value="rock">Rock</option>
    <option :value="pop">Pop</option>
    <option :value="metal">Metal</option>
    <option :value="jazz">Jazz</option>
  </select>
  <!-- /.select -->
</template>

<script>
export default {
    name: 'SelectGenre',
    props: {
       selectValue: String,
    },
}
</script>
