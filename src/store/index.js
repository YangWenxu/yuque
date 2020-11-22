import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    context: null,

  },
  getters: {
    context: state => state.context,
  },
  mutations: {
    getContext: (state, payload) => {
      state.context = payload
    }
  },
  // actions: {
  //   requestContext: ({commit}, payload) {
     
  //   }
  // }
})