import Vue from "vue";
import VueRouter from "vue-router";

import bodyContent from "../pages/bodyContent.vue";

Vue.use(VueRouter);

const routes = [
  { 
    name: 'bodyContent', 
    path: '/:slug', 
    component: bodyContent 
  }
]

var router = new VueRouter({
  routes
})

export default router;