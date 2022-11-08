import request from '@/utils/request'
// import qs from 'qs'

export const login = (data) => request({
  url: "/login",
  method: 'post',
  data: data
})

export const logout = () => request({
  url: "/logut",
  method: 'post',
})

export const getInfo = (data) => request({
  url: "/user/info",
  method: 'post',
  data: data
})