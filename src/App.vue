<!--
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 09:30:14
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-24 10:28:49
-->
<template>
  <div id="app">
    <home></home>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
import home from "./pages/home.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: 'App',
  components: {
    home,
    // HelloWorld,
  }
}
</script>

<style>
html，body{
  height:100%;
  width: 100%;
}
#app {
  
  height:100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
