<template>
  <div id="HomeInfo">
    <h1>
      主页Layout

      <hr />
      <p>名字：{{ userInfo.name }}</p>
      <p>性别：{{ userInfo.sex === 0 ? '男' : '女' }}</p>
      <p>邮箱：{{ userInfo.email }}</p>
      头像：<img v-if="userInfo.images_url" :src="userInfo.images_url" class="avatar">
    </h1>
  </div>
</template>

<script>
export default {
  name: "HomeInfo",
  data () {
    return {
      IsCC: true,
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
  }
}
</script>