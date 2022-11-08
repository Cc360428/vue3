<template>
  <h1>
    主页暂时不开发
    <hr />
    <button @click=test()> test</button>
  </h1>
</template>

<script>
import { byteLength } from '@/utils/index'
export default {
  name: "HomeInfo",
  methods: {
    test () {
      console.log("start")

      let res = byteLength("李超成")
      console.log(res)
    }
  }
}
</script>