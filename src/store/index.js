/*
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 09:30:14
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-23 13:51:25
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/services/api';


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    context: null,

  },
  getters: {
    getContext: ({context }) => {
      if (context) {
        return context;
      }
    },
  },
  mutations: {
    saveContext: (state, payload) => {
      state.context = payload
    }
  },
  actions: {
    async requestContext({commit}, payload) {
      const { data } = await api.getContextDetail(payload);
      if(data) {
        commit('saveContext', data)
      }
      
    }
  }
})