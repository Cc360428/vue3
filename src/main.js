import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import echarts from './utils/echarts'
const app = createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(store)
app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.mount('#app')
