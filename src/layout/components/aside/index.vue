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
      <template #title>
        <router-link to='/home'><span>首页</span></router-link>
      </template>
    </el-menu-item>


    <el-menu-item index="2">
      <el-icon>
        <Notebook/>
      </el-icon>
      <template #title>
        <router-link to='/books'><span>BooksManager</span></router-link>
      </template>
    </el-menu-item>


    <el-menu-item index="3">
      <el-icon>
        <Menu/>
      </el-icon>
      <template #title>
        <router-link to='/users'><span>用户管理</span></router-link>
      </template>
    </el-menu-item>

    <el-menu-item index="4">
      <el-icon>
        <View/>
      </el-icon>

      <template #title>
        <router-link to='/operations'><span>操作日志</span></router-link>
      </template>
    </el-menu-item>


    <el-menu-item index="5">
      <el-icon>
        <Operation/>
      </el-icon>
      <template #title>
        <router-link to='/settings'><span>设置</span></router-link>
      </template>
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
      isCollapse: false
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