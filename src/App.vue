<script setup>
import * as echarts from "echarts"
import { provide } from "vue"
provide("echarts", echarts)
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
