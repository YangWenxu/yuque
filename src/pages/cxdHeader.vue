<template>
  <div id="cxdHeader">
    <div style="padding-left:40px">
      <p style="color:#fff;padding-left:60px;font-size:30px; float: left">cxd</p>
      <div style="float: right; margin-right: 40px; margin-top:30px;">
        <el-row :gutter="40">
          <el-col :span="2">首页</el-col>
          <el-col :span="2">设计体系</el-col>
          <el-col :span="2">行业解决方案</el-col>
          <el-col :span="2">资源工具</el-col>
          <el-col :span="2">团队</el-col>
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