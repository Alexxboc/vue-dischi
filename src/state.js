import Vue from 'vue';

const state = Vue.observable({
    selectValue: '',
    selectAuthor: '',
    filteredByAuthor: [],
    filteredByGenre: []
})

export default state