import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    articleType: 'all'
  },
  mutations: {
    update_articleType (state,newType) {
      state.articleType = newType;
    }
  }
})