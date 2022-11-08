<template>
  <div>
    <p>login</p>
    <button @click=login()> Login Request</button>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: "LoginInfo",
  methods: {
    login () {
      let params = { name_and_email: "CcSupper", password: "Cc@cclcc123" }
      login(params).then(response => {
        const data = response
        console.log("token", data.data)
      }).catch(error => {
        console.log("返回错误：", error)
      })
    }
  }
}
</script>