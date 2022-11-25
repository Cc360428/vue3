<template>
  <div class="login-cc">
    <el-form ref="loginFrom" :model="loginForm" label-width="50px">
      <h1 class="center">Login</h1>
      <el-form-item prop="username">
        <el-input ref="username" v-model="loginForm.username" placeholder="Username" type="text" tabindex="1"
                  autocomplete="on"/>
      </el-form-item>
      <el-form-item prop="username">
        <el-input ref="password" v-model="loginForm.password" placeholder="Password" type="password" tabindex="2"
                  autocomplete="on"/>
      </el-form-item>
      <el-form-item class="center">
        <el-button type="primary" @click.prevent="login">Login</el-button>
        <el-button @click="resetForm()">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {connectWebsocket} from "@/api/websocket/socket"
import {ElNotification} from 'element-plus'

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
  created() {

  },
  methods: {
    connWS() {
      connectWebsocket(
          this.config.Ws_URL + "?uid=1",
          // 发送
          "HeartBeat",
          // 成功拿到后台返回的数据的回调函数
          (data) => {
            ElNotification({title: 'WebSocket 连接成功', message: "Cc 上线了", type: 'success', duration: 3500})
            console.log("成功的回调函数, 接收到的data数据： ", data)
          },
          // websocket连接失败的回调函数
          () => {

            ElNotification({
              title: 'WebSocket 失败',
              message: "请检查服务器",
              type: 'error',
              duration: 2000,
            })
            console.log("失败的回调函数")
          }
      )
    },
    message(messages) {
      ElNotification({title: 'Online Message', message: messages, type: 'success', duration: 10000})
    },
    login() {
      // todo test websocket server
      let p = this.loginForm
      if (p.username === "") return this.$message.error("username  不能为空")
      if (p.password === "") return this.$message.error("password  不能为空")
      let params = {name_and_email: p.username, password: p.password}
      this.$store.dispatch('user/login', params).then(() => {
        this.$message.success("欢迎👏 " + p.username + " 登录成功")
        // 这里连接websocket服务
        this.connWS()
        this.message("Cc：" + p.username + "您终于上线了，盯你很久了，更加开发完成✅Cc_App Server And Client")
        // this.message("Cc 上线了")
        // this.message("HyperLi 上线了")
        // this.message("SuperLi 上线了")
        this.$router.push({path: this.redirect || '/home', query: this.otherQuery})
      }).catch(error => {
        this.$message.error("Login" + error)
      })
    },
    resetForm() {
      this.loginForm = {username: "CcSupper", password: "Cc@cclcc123"}
    }
  },
  computed: {}
}
</script>
<style lang="scss">
.center {
  margin: auto;
  width: 60%;
  padding: 10px;
}

.login-cc {
  text-align: center;
  border-radius: 60px;
  width: 350px;
  height: 500px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>