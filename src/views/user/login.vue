<template>
  <div>
    <el-form ref="loginFrom" :model="loginForm">


      <div>
        <h3 class="title">登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input ref="username" v-model="loginForm.username" placeholder="Username" name="username" type="text"
          tabindex="1" autocomplete="on" />
      </el-form-item>
      <el-tooltip content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input ref="password" v-model="loginForm.password" placeholder="Password" name="password" tabindex="2"
            autocomplete="on" />
        </el-form-item>
      </el-tooltip>


    </el-form>
    <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.prevent="login">
      Login</el-button>
    <!-- <button @click=login()> Login Request</button> -->
  </div>
</template>

<script>
export default {
  name: "LoginInfo",
  data () {
    return {
      loginForm: {
        username: '',// CcSupper
        password: '' // Cc@cclcc123
      }
    }
  },
  methods: {
    login () {
      let p = this.loginForm
      let params = { name_and_email: p.username, password: p.password }
      this.$store.dispatch('user/login', params).then(() => {
        this.$message.success("欢迎👏 " + p.username + " 登录成功")
        this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
      }).catch(error => {
        this.$message.error("Login" + error)
        return
      })
    },
  },
  computed: {
    msg () {
      return this.$store.state.user.token
    }
  }
}
</script>
