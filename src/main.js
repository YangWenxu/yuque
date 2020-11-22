import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// import axios from "./lib/axios.js";
import router from "./router";
import store from "./store"
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false



Vue.prototype.$http = axios;

Vue.axios = axios;
Vue.http = axios;

Vue.use(Element);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')