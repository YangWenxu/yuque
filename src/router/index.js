/*
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 09:30:14
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-24 11:24:06
 */
import Vue from "vue";
import VueRouter from "vue-router";

import bodyContent from "../pages/bodyContent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/bqr5yz'
  },
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