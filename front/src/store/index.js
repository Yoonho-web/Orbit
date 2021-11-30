import Vue from "vue";
import Vuex from "vuex";
import { getAlbumInfo } from '@/api/index.js';
import { getSongInfo } from '@/api/index.js';

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
    ],
    album :[

    ]
  },
  //가공 하는 곳
  mutations: {
    SET_ALBUM(state, response){
      state.album = response.data.album;
      console.log('나오니?', state.album);
    },
    SET_SONG(stateSong, resSong){
      stateSong.song = resSong.data.song;
    },
  },

  actions: {
    async GET_ALBUM(context){
      //axios 불러줌
      const response = await getAlbumInfo();
      console.log(response);
      //mutations로 넘겨주는거 
      context.commit('SET_ALBUM', response);
    },
    async GET_SONG(context) {
      const resSong = await getSongInfo();

      context.commit('SET_SONG', resSong);
    }
  },
  modules: {},
});
