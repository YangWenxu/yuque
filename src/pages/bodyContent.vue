<template>
  <div v-html="blog" class="markdown-body"></div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'bodyContent',
  data() {
    return {
      blog: {},
    }
  },
  data() {
    return {
      blog: {},
    }
  },
  created() {
    // alert(this.$route.params.slug);
  },
  mounted() {
    this.initDocsDetail(this.$route.params.slug);
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
    document.head.appendChild(link);
  },
  methods: {
    async initDocsDetail(item) {
      const { data } = await this.$http.get('blog/api/docs/'+item);
      if(data.data) {
        this.blog = marked(data.data.body);
      }
    },
  }
}
</script>

<style lang="less" scoped>
  // .content {
  //   float: right;
  //   height: 500px;
  //   background-color: #E9EEF3;
  //   width: 60%;
  //   color: #333;
  //   // text-align: center;
  // }
</style>