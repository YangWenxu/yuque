<template>
  <div>
    <h2 class="title"> {{ title }}</h2>
    <div v-html="blog" class="markdown-body"></div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'bodyContent',
  watch :{
    '$route' (to){
      console.log(to.params.slug);
      window.location.reload();
    }
  },
  data() {
    return {
      title: '',
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
      const { data } = await this.$http.get('blog/api/docs/'+item, 
        // {
        //   headers: {
        //     'X-Auth-Token': '5GmaDRJFUXGVn7DniU0kuRkO6XZjIZ4LflwPSvMz'
        //   }
        // }
      );
      if(data.data) {
        // this.blog = data.data.body;
        this.title = data.data.title;
        this.blog = marked(data.data.body);
        // console.log(this.blog);
      }
    },
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 30px;
}
  // .content {
  //   float: right;
  //   height: 500px;
  //   background-color: #E9EEF3;
  //   width: 60%;
  //   color: #333;
  //   // text-align: center;
  // }
</style>