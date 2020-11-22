<template>
    <el-dropdown trigger="click" class="custom-tree-menu" size="small">
        <i class="el-icon-more rotate " />
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for='(item,index) in events' :key="index" :divided="index >0" @click.native="clickMenu(item)">
                {{item.label}}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
export default {

  data() {
    return {
      events: [
        {
          label: '新建同级',
          funcName: 'addNode'
        },
        {
          label: '编辑',
          funcName: 'editNode'
        },
        {
          label: '删除',
          funcName: 'deleteNode'
        }
      ],
      zhaobuchu: {},
    }
  },
  methods: {
    clickMenu(item) {
      this.$emit(item.funcName, this.zhaobuchu)
    }
  }
}