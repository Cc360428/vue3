<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon>
        <HomeFilled/>
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <Notebook/>
      </el-icon>
      <template #title>BooksManager</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <Menu/>
      </el-icon>
      <template #title>用户管理</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <View/>
      </el-icon>
      <template #title>操作日志</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon>
        <Operation/>
      </el-icon>
      <template #title>设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import {
  HomeFilled,
  Menu,
  Notebook,
  View,
  Operation
} from '@element-plus/icons-vue'

export default {
  name: 'AsideInfo',
  components: {
    HomeFilled,
    Menu,
    Notebook,
    View,
    Operation
  },
  data() {
    return {
      views: [
        {id: ""}
      ],
      isCollapse: true
    }
  },
  methods: {
    handleOpen() {
    },
    handleClose() {
    }
  },
}

</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>