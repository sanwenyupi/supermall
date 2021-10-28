import axios from 'axios';


export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 拦截器
  instance.interceptors.request.use(config => {
    // 发送请求前做什么？
    return config
  },err => {
    // 请求错误做什么?
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    // 对响应数据做点什么
    // 这里是将相应的数据直接取到它的data属性对象,方便操作响应数据
    return res.data
  },err => {
    // 对相应错误做点什么
    console.log(err);
  })

  return instance(config)
}
