import axios from 'axios'
const request = axios.create({
  baseURL: 'http://172.12.12.188:8886', // 所有请求的公共地址部分 TODO 这里可写环境变量
  timeout: 3000 // 请求超时时间 这里的意思是当请求时间超过5秒还未取得结果时 提示用户请求超时
})

// import { byteLength } from '@/utils/index'
import store from '@/store'
import { getToken } from '@/utils/auth'
import router from '@/router'
// request拦截器
request.interceptors.request.use(config => {
  console.log("start request")

  if (store.getters.token) {
    config.headers['Authorization'] = getToken()
  }
  // 待添加
  /**
   * 有增加token
   */
  return config
}, error => {
  console.log("请求错误")
  Promise.reject(error)
})
request.interceptors.response.use(response => {
  const res = response.data
  if (res.code != 0) {
    console.log("请求失败" + res)
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    console.log("成功" + res)
    return res
  }
}, error => {
  if (error.response.status === 401 && error.response.data.code === -2) {
    router.push("/login")
    return
  }
  console.log('3' + error)
  return Promise.reject(error)
})

export default request