import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.interceptors.request.use(
  // 请求参数设置
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })
axios.interceptors.response.use(
  // 响应请求
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })
let base = 'http://api.zhuimengzhu.com'
export const Follow = params => {
  return axios.get(`${base}/ui/api/follow`, {params: params})
}
