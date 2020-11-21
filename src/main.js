import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import router from "./router";
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false



Vue.prototype.$http = axios;

Vue.axios = axios;
Vue.http = axios;

Vue.use(Element);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')