<template>
  <h1>
    主页暂时不开发
    <hr />
    <button @click=getUserInfo()>UserInfo</button>
  </h1>
</template>

<script>
export default {
  name: "HomeInfo",
  methods: {
    getUserInfo () {
      console.log("start")
      this.$store.dispatch('user/getInfo', "")
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