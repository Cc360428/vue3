<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0" ><router-link to="/home">LOGO</router-link></el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item index="1">我的消息</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Info</template>
      <el-menu-item index="2-1">个人详情</el-menu-item>
      <el-menu-item index="2-2" @click="logout">logout</el-menu-item>
      <!--      <el-menu-item index="2-3">item three</el-menu-item>-->
      <!--      <el-sub-menu index="2-4">-->
      <!--        <template #title>item four</template>-->
      <!--        <el-menu-item index="2-4-1">item one</el-menu-item>-->
      <!--        <el-menu-item index="2-4-2">item two</el-menu-item>-->
      <!--        <el-menu-item index="2-4-3">item three</el-menu-item>-->
      <!--      </el-sub-menu>-->
    </el-sub-menu>
  </el-menu>
</template>

<script>
import router from "@/router";

export default {
  name: 'HeaderInfo',
  methods: {
    logout() {

      this.$store.dispatch('user/logout')
      this.$message.success("logout ok")
      router.push("/login").then(r => {
        console.log("logout 错误", r)
      })
    }
  },
}

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>