<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="0">
      <router-link to="/home">
        <el-image :src="logo" class="sidebar-logo"></el-image>
      </router-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">我的消息</el-menu-item>
    <el-sub-menu index="2">
      <template #title>{{ userInfo.name }}</template>
      <el-menu-item index="2-1">个人详情</el-menu-item>
      <el-menu-item index="2-2" @click="logout">logout</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import router from "@/router"

export default {
  name: 'HeaderInfo',
  data () {
    return {
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
      userInfo: {
        name: "DefaultName",
        sex: 0,
        images_url: "DefaultImage",
        email: "DefaultEmail"
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
      this.$message.success("logout ok")
      router.push("/login").then(r => {
        console.log("logout 错误", r)
      })
    },
    getUserInfo () {
      console.log("start")
      this.$store.dispatch('user/getInfo').then(response => {
        // const user = response
        this.userInfo = response
        // console.log("获取到用户信息：", user)
        console.log("this.user获取到用户信息：", this.userInfo)
      })
      // login(params).then(response => {
      //   const data = response
      //   console.log("token", data.data)
      //   this.$store.state
      // }).catch(error => {
      //   console.log("返回错误：", error)
      // })
    }
  },
}

</script>

<style>
.flex-grow {
  flex-grow: 1;
}

.sidebar-logo {
  width: 60px;
  height: 60px;
  margin-right: 30px;
}
</style>