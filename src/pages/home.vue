<template>
  <div class="container">
      <el-header>
        <cxd-header></cxd-header>
      </el-header>
      <div class="context">
        <el-aside>
          <div>
            <h5 class="leftHeader">设计体系</h5>
            <hr class="line">
            <el-menu
              text-color="#fff"
              active-text-color="#ffd04b"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#1A1A1A">
              <template v-for="(item) in navList" >
                <el-submenu v-if="item.slug === '#'" :index="item.uuid" :key="item.uuid">
                  <template slot="title">
                    <span>{{item.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <template v-for="itm in item.second">
                      <el-submenu v-if="itm.child_uuid" :index="itm.uuid" :key="itm.uuid">
                        <template slot="title">
                          <span>{{itm.title}}</span>
                        </template>
                        
                        <el-menu-item v-for="itemChild in itm.third" :index="itemChild.uuid" :key="itemChild.uuid">
                          <span slot="title" @click="handleItemClick">
                            <router-link :to ="{name:'bodyContent',params :{slug: itemChild.slug}}">
                              {{itemChild.title}}
                            </router-link>
                          </span>  
                        </el-menu-item>
                        
                      </el-submenu>
                      <el-menu-item v-else :index="itm.uuid" :key="itm.uuid" @click="handleItemClick">
                        <router-link :to ="{name:'bodyContent',params :{slug: itm.slug}}">
                          {{itm.title}}
                        </router-link>
                      </el-menu-item>
                      
                    </template>
                  </el-menu-item-group>
                  
                </el-submenu>
                <el-menu-item v-else :index="item.uuid" :key="item.uuid">                  
                  <span slot="title" @click="handleItemClick">
                    <router-link :to ="{name:'bodyContent',params :{slug: item.slug}}">
                      {{item.title}}
                    </router-link>
                  </span>                  
                </el-menu-item>
              </template>
              
            </el-menu>  
          </div>

        </el-aside>
        <el-main>
          <router-view></router-view>
          <!-- <div v-html="blog" class="markdown-body"></div> -->
        </el-main>
      </div>
  </div>
    
</template>

<script>
import marked from 'marked'
import cxdHeader from './cxdHeader.vue'
export default {
  name: 'home',
  components: {
    cxdHeader,
  },
  data() {
    return {
      navList: [],
      blog: {},
    }
  },
  mounted() {
    this.initData();
    this.initDocsDetail('urlgz8');
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
    document.head.appendChild(link);
  },
  methods: {
    async initData() {
      const { data, status} = await this.$http.get('/blog/api/bloglist');
      if(status === 200) {
        data.data.map(item => {
          if(item.depth == 1) {
            item.second = [];
            this.navList.push(item);
          } else if (item.depth == 2 || item.depth == 3) {
            this.navList.map(itm => {          
              if(item.parent_uuid == itm.uuid){
                item.third = [];
                itm.second.push(item);                
              }
              itm.second.map( i => {
                if(item.parent_uuid == i.uuid) {
                  i.third.push(item);
                }
              })
            })            
          } 
        })
      }
    },
    handleItemClick() {
      window.location.reload();
      // console.log(item);
      // this.initDocsDetail(item);
    },
    async initDocsDetail(item) {
      const { data } = await this.$http.get('blog/api/docs/'+item);
      if(data.data) {
        this.blog = marked(data.data.body);
      }
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
    
  }
}
</script>

<style lang="less" scoped>
  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    .el-header {
      position: fixed;
      width: 100%;
      height: 60px;
      background-color: #000000;
      line-height: 1px;
    }
    .context {
      position: relative;
      height: 100vh;
      width: 100%;
      top:65px;
      .el-aside {
        background-color: #1A1A1A;;
        color: #333;
        width: 25%;
        position: fixed;
        z-index: 410;
        top:65px;
        left: 8px;
        flex: 0 0 auto;
        .leftHeader {
          height: 10px;
          color: white;
          margin-left: 20px;
          padding-top: 20px;
          margin-top: 0px;
          font-size: 18px;
        }
        .line {
          width: 80%;
          border: 1px solid rgba(255,255,255,0.24);
        }
        .el-menu {
          height: 480px;
          font-size: 15px;
          .el-menu-item[data-v-56b687e3] {
            height: 35px;
            line-height: 35px;
          }
          .el-submenu {
            line-height: 35px;
          }
          .el-menu-item-group {
            padding-left: 40px !important;
          }
        }
      }
      .el-main {
        position: absolute;
        scroll-behavior: smooth;
        margin-left: 25%;
        // margin-top: 65px;
        background-color: #E9EEF3;
        width: 75%;
        // height: 100vh;
        color: #333;
      }
    }
  }

</style>