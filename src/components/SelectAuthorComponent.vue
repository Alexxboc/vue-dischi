<template>
    <select
    class="form-select form-select-lg mb-3 w-auto"
    id="2"
    @change="$emit('selection')"
    @input="$emit('input', $event.target.value)"
  >
    <option selected value="all">Tutti gli artisti</option>
    <option value="bon jovy">Bon Jovi</option>
    <option value="queen">Queen</option>
    <option value="sting">Sting</option>
    <option value="steve gadd band">Steve Gadd Band</option>
    <option value="iron maiden">Iron Maiden</option>
    <option value="eric clapton">Eric Clapton</option>
    <option value="deep purple">Deep Purple</option>
    <option value="mettaliica">Mettalica</option>
    <option value="dave weckl">Dave Weckl</option>
    <option value="michael jacjson">Michael Jacjson</option>
  </select>
  <!-- /.select -->
</template>

<script>
export default {
    name: 'SelectAuthor',
    selectAuthor: String,
}
</script>
