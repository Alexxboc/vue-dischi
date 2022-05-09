<template>
  <select
    class="form-select form-select-lg mb-3 w-auto me-2"
    id="1"
    @change="$emit('selection')"
    @input="$emit('input', $event.target.value)"
  >
    <option selected value="all">Tutti i generi</option>
    <option value="rock">Rock</option>
    <option value="pop">Pop</option>
    <option value="metal">Metal</option>
    <option value="jazz">Jazz</option>
  </select>
  
</template>

<script>

export default {
    name: 'SelectGenre',
    props: {
       selectValue: String,
    },
    
}
</script>
