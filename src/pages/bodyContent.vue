<!--
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 09:30:14
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-23 10:19:29
-->
<template>
  <div>
    <h2 class="title"> {{ title }}</h2>
    <div v-html="blog" class="markdown-body"></div>
  </div>
</template>

<script>
import marked from 'marked'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'bodyContent',
  watch :{
    '$route' (to){
      console.log(to.params.slug);
      window.location.reload();
    },
    getContext: {
      handler(newValue) {
        this.title = newValue.title;
        this.blog = marked(newValue.body); 
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(['getContext'])
  },
  data() {
    return {
      title: '',
      blog: {},
    }
  },
  mounted() {
    this.requestContext(this.$route.params.slug)
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
    document.head.appendChild(link);
  },
  methods: {
    ...mapActions([
      'requestContext'
    ]),
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 30px;
}
</style>