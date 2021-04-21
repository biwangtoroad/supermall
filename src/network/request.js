import axios from 'axios'

export function request(config) {
  //1.常见axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    //定时器过短会导致首页轮播图无法轮播，只显示一张图片
    timeout: 10000
  })

  //2.axios的拦截器
  //2.1请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {

  })
  return instance(config)
}


