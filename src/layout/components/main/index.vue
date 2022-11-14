<template>
  <el-calendar v-model="value" />
</template>


<script>
export default {
  name: 'MainInfo',
  props: {},
  data() {
    return {
      value: new Date(),
    }
  },
  methods: {}
}


</script>

<style>

</style>