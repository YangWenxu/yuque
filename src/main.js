/*
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 09:30:14
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-23 13:49:35
 */
import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store"
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import * as api from '@/services/api';
Vue.config.productionTip = false


Vue.prototype.$api = api;


Vue.use(Element);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')