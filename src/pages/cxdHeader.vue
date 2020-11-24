<!--
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 09:30:14
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-24 10:39:10
-->
<template>
  <div id="cxdHeader">
    <div style="padding-left:40px">
      <p style="color:#fff;padding-left:60px;font-size:30px; float: left">cxd</p>
      <div style="float: right; width: 45%; margin-right: 10px; margin-top:30px;">
        <el-row :gutter="20">
          <el-col :span="3">首页</el-col>
          <el-col :span="4">设计体系</el-col>
          <el-col :span="5">行业解决方案</el-col>
          <el-col :span="4">资源工具</el-col>
          <el-col :span="4">团队</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cxdHeader',
  data() {
    return {

    }
    
  }
}
</script>

<style lang="less" scoped>
#cxdHeader {
  
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      color: #fff;
    }
  }
}
</style>