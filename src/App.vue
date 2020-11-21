<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from "./pages/home.vue";

export default {
  name: 'App',
  components: {
    home,
  }
}
</script>

<style>
#app {
  height:100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
