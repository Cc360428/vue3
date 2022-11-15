<template>
  <div class="login-cc">
    <el-form ref="loginFrom" :model="loginForm" label-width="50px">
      Login
      <el-form-item prop="username">
        Username：
        <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            type="text"
            tabindex="1"
            autocomplete="on"/>
      </el-form-item>
      <el-form-item prop="username">
        Password：
        <el-input
            ref="password"
            v-model="loginForm.password"
            placeholder="Password"
            type="password"
            tabindex="2"
            autocomplete="on"/>
      </el-form-item>
      <el-form-item class="center">
        <el-button type="primary" @click.prevent="login">Login</el-button>
        <el-button @click="resetForm()">ResetValue</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginInfo",
  data() {
    return {
      loginForm: {
        username: 'Super',
        password: '123456'
      }
    }
  },
  methods: {
    login() {
      let p = this.loginForm
      if (p.username === "") return this.$message.error("username  不能为空")
      if (p.password === "") return this.$message.error("password  不能为空")
      let params = {name_and_email: p.username, password: p.password}
      this.$store.dispatch('user/login', params).then(() => {
        this.$message.success("欢迎👏 " + p.username + " 登录成功")
        this.$router.push({path: this.redirect || '/home', query: this.otherQuery})
      }).catch(error => {
        this.$message.error("Login" + error)
      })
    },
    resetForm() {
      this.loginForm = {username: "", password: ""}
    }
  },
  computed: {}
}
</script>


<style lang="scss">

.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.login-cc {
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  width: 600px;
  height: 500px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>