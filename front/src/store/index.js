import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name : 'babo',
    members : [
      {
          "name" : "chu",
          "age" : 12
      }, 
      {
          "name" : "heejin",
          "age" : 32
      }, 
  ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
