<template>
  <div>
    Settings
    <div id="main"></div>
    <div id="maychar"></div>
  </div>
</template>

<script lang="js">
import { defineComponent, onMounted, inject } from "vue" // 主要

export default defineComponent({
  name: 'SettingInfo',
  setup () {
    onMounted(() => {
      change()
      changetype()
    })
    let echarts = inject("echarts") // 主要
    // 基本柱形图
    const change = () => {
      const chartBox = echarts.init(document.getElementById("main")) // 主要
      const option = {
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
        ],
      }
      chartBox.setOption(option)
      // 根据页面大小自动响应图表大小
      window.addEventListener("resize", function () {
        chartBox.resize()
      })
    }
    // 折线图
    const changetype = () => {
      // 获取组件实例
      const machart = echarts.init(document.getElementById("maychar"))
      // 设置配置项
      const option = {
        xAxis: {
          data: ["A", "B", "C", "D", "E"],
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: "line",
            stack: "x",
          },
          {
            data: [5, 4, 3, 5, 10],
            type: "line",
            stack: "x",
          },
        ],
      }
      // 复制
      machart.setOption(option)
      // 根据页面大小自动响应图表大小
      window.addEventListener("resize", function () {
        machart.resize()
      })
    }
    return {
      changetype,
    }
  },
})
</script>
 
<style lang="scss" scoped>
#main {
  min-width: 31.25rem;
  min-height: 31.25rem;
  // max-height: 500px;
}

#maychar {
  max-height: 500px;
  // max-height: 400px;
  height: 500px;
}
</style>

<!-- 
<script>

export default {
  name: "BooksIndex",
  data () {
    return {
      option: {},
    }
  },
  mounted () {
    //this.$root => App
    console.log(this.echarts)
    let myChart = this.$echarts.init(document.getElementById("myChart"))
    // 绘制图表
    myChart.setOption({
      title: { text: "总用户量" },
      tooltip: {},
      xAxis: {
        data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
      },
      yAxis: {},
      series: [
        {
          name: "用户量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
  },
}
</script>
<style scoped>
.chart {
  height: 400px;
}
</style> -->