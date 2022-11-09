<template>
  <div>
    <p>login</p>
    <h1>{{ msg }}</h1>
    <hr />
    <button @click=login()> Login Request</button>
  </div>
</template>

<script>
export default {
  name: "LoginInfo",
  methods: {
    login () {
      let params = { name_and_email: "CcSupper", password: "Cc@cclcc123" }
      this.$store.dispatch('user/login', params).then(() => {
        this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
      })

    }
  }, computed: {
    msg () {
      return this.$store.state.user.token
    }
  }
}
</script>