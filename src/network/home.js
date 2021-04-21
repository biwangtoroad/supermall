import {request} from "./request";
//方便管理首页的请求地址

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
    timeout: 5000
  })
}
