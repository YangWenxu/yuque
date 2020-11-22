<template>
  <el-container class="container" >
      <el-header>
        <cxd-header></cxd-header>
      </el-header>
      <el-container class="context">
        <el-aside>
          <div>
            <h5 class="leftHeader">设计体系</h5>
            <hr class="line">
            <el-menu
              text-color="rgb(255,255,255,0.8)"
              default-active="4"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#1A1A1A">
              <template v-for="(item) in navList" >
                <el-submenu v-if="item.slug === '#'" :index="item.uuid" :key="item.uuid">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span class="hasChild">{{item.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <template v-for="itm in item.second">
                      <el-submenu v-if="itm.child_uuid" :index="itm.uuid" :key="itm.uuid">
                        <template slot="title">
                          <span class="hasChild" >{{itm.title}}</span>
                        </template>
                        
                        <el-menu-item v-for="itemChild in itm.third" :index="itemChild.uuid" :key="itemChild.uuid">
                          <span style="padding-left:40px !important;" slot="title" @click="handleItemClick(itemChild.slug)">
                            <router-link :to ="{name:'bodyContent',params :{slug: itemChild.slug}}">
                              {{itemChild.title}}
                            </router-link>
                          </span>  
                        </el-menu-item>
                        
                      </el-submenu>
                      <el-menu-item v-else :index="itm.uuid" :key="itm.uuid" @click="handleItemClick(itm.slug)">
                        <router-link :to ="{name:'bodyContent',params :{slug: itm.slug}}">
                          {{itm.title}}
                        </router-link>
                      </el-menu-item>
                      
                    </template>
                  </el-menu-item-group>
                  
                </el-submenu>
                <el-menu-item v-else :index="item.uuid" :key="item.uuid">                  
                  <span slot="title" @click="handleItemClick(item.slug)">
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
          <div class="content">
            <router-view></router-view>
          </div>
          
        </el-main>
      </el-container>
  </el-container>
    
</template>

<script>
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
  },
  methods: {
    async initData() {
      const { data, status} = await this.$http.get('blog/api/bloglist', 
        // {
        //   headers: {
        //     'X-Auth-Token': '5GmaDRJFUXGVn7DniU0kuRkO6XZjIZ4LflwPSvMz'
        //   }
        // }
      );
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
    handleItemClick(item) {
      console.log(item);
      // this.$router.push({ path: item })
      // this.$forceUpdate();
      // window.location.reload();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    
  }
}
</script>
<style>
  .el-submenu__title {
    padding-left: 0 !important;

  }
  .el-icon-arrow-down:before {
    content: '\e791';
  }
  .el-menu--inline {
    padding-left: 0 !important;
  }
  .el-submenu__icon-arrow, .el-submenu__icon-arrow {
    float: right;
    margin-right: 100px;
    margin-top: 10px;
  }
  .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
    -webkit-transform: rotateZ(0deg);
    -ms-transform: rotate(0deg);
    transform: rotateZ(0deg);
  }

  .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
    -webkit-transform: rotateZ(90deg);
    -ms-transform: rotate(90deg);
    transform: rotateZ(90deg);
  }
</style>
<style lang="less" scoped>
  ul {
    padding-inline-start: 0px !important;
  }
  li {
    list-style:none;
  }
  a:-webkit-any-link {
    color: rgba(255,255,255,0.8);
    cursor: pointer;
    text-decoration: none;
  }
  a:-webkit-any-link:hover{
    color: #fff;
  }
  .router-link-active {
    color: #006BF8 !important;
  }
  .container {
    width: 100%;
    height: 100%;
    .el-header {
      left: 0 !important;
      top: 0 !important;
      position: fixed;
      width: 100%;
      height: 60px;
      background-color: #000000;
      line-height: 1px;
    }
    .context {
      left: 0 !important;
      position: fixed;
      height: 100vh;
      width: 100%;
      top:60px;
      .el-aside {
        background-color: #1A1A1A;;
        color: #333;
        width: 25%;
        position: absolute;
        z-index: 410;
        top: 0;
        left: 0;
        right: 0;
        bottom: 61px;
        overflow-y:  scroll;
        overflow-x: hidden;
        scroll-behavior: smooth;
        .leftHeader {
          height: 10px;
          color: white;
          margin-left: 50px;
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
          font-size: 14px;
          margin-left: 50px;
          .el-menu-item[data-v-56b687e3] {
            height: 35px;
            line-height: 35px;
            padding-left: 0 !important;
          }         
          .el-submenu {
            line-height: 35px;
            .hasChild:hover {
              color: #fff;
            }           
          }
        }
      }
      .el-aside::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      .el-main {
        position: absolute;
        top: 2px;
        right: 8px;
        bottom: 70px;
        left: 0;
        overflow-y:  scroll;
        overflow-x: hidden;
        scroll-behavior: smooth;
        margin-left: 23%;
        // margin-top: 65px;
        // background-color: #E9EEF3;
        width: 76%;
        background-color: #fff;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
          height: 90%;
          width: 85%;
        }
      }
      .el-main::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    }
  }

</style>