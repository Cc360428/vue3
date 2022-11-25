import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import echarts from './utils/echarts'
// import conf from "@/config/config"

// Date.prototype.Format = function (fmt) {
//   const o = {
//     "M+": this.getMonth() + 1, //月份
//     "d+": this.getDate(), //日
//     "H+": this.getHours(), //小时
//     "m+": this.getMinutes(), //分
//     "s+": this.getSeconds(), //秒
//     "q+": Math.floor((this.getMonth() + 3) / 3), //季度
//     "S": this.getMilliseconds() //毫秒
//   }
//   if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
//   for (const k in o)
//     if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
//   return fmt
// }
// createApp.prototype.config = conf
const app = createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(store)
app.use(ElementPlus, {locale: zhCn})
app.use(router)
app.mount('#app')
