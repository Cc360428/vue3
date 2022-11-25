<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
    @close="handleClose">

    <router-link to='/home' class="link-aside">
      <el-menu-item index="1">
        <el-icon>
          <HomeFilled />
        </el-icon>
        <template #title>
          <span class="span-aside">首页</span>
        </template>
      </el-menu-item>
    </router-link>

<!--    <router-link to='/books' class="link-aside">-->
<!--      <el-menu-item index="2">-->
<!--        <el-icon>-->
<!--          <Notebook />-->
<!--        </el-icon>-->
<!--        <template #title>-->
<!--          <span class="span-aside">BooksManager</span>-->
<!--        </template>-->
<!--      </el-menu-item>-->
<!--    </router-link>-->

    <router-link to='/users' class="link-aside">
      <el-menu-item index="3">
        <el-icon>
          <Menu />
        </el-icon>
        <template #title>
          <span class="span-aside">用户管理</span>
        </template>
      </el-menu-item>
    </router-link>

    <router-link to='/operations' class="link-aside">
      <el-menu-item index="4">
        <el-icon>
          <View />
        </el-icon>
        <template #title>
          <span class="span-aside">操作日志</span>
        </template>
      </el-menu-item>
    </router-link>

    <router-link to='/settings' class="link-aside">
      <el-menu-item index="5">
        <el-icon>
          <Operation />
        </el-icon>
        <template #title>
          <span class="span-aside">设置</span>
        </template>
      </el-menu-item>
    </router-link>

  </el-menu>
</template>

<script>
import {
  HomeFilled,
  Menu,
  // Notebook,
  View,
  Operation
} from '@element-plus/icons-vue'

export default {
  name: 'AsideInfo',
  components: {
    HomeFilled,
    Menu,
    // Notebook,
    View,
    Operation
  },
  data () {
    return {
      views: [
        { id: "" }
      ],
      isCollapse: false
    }
  },
  methods: {
    handleOpen () {
    },
    handleClose () {
    }
  },
}

</script>
<style>
.link-aside {
  text-decoration: none
}

.span-aside {
  color: rgb(130, 130, 208);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>