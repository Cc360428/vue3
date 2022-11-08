import request from '@/utils/request'
// import qs from 'qs'

export const login = (data) => request({
  url: "/login",
  method: 'post',
  data: data
})