import axios from "axios";


/*
    XMLHttpRequest => AXIOS 库 =》 libs
*/
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
  /**
   * 在发送请求之前做些什么
   *  1. 携带token
   *  2. 重复请求，可以发送最后一次请求。
   * 
   *  headers 请求头中增加了一个属性
   * */ 
  console.log(config,'[config]')
  config.headers['Authorization'] = 'Bearer 1234'
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // 对2xx特殊的处理做出特殊的全局响应
  // 204 => 对照语义化良好的提示
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么

  // 固定的code码 => 自定义code 5015
   /**
    * - 1.登录状态失效 
    *   1.1 清除当前存储的token
    *   1.2 跳转到登陆页面 | 给出登录失效的提示
    * 
    * */ 

  return Promise.reject(error);
});

// function http () {
//   return {
//     get() {
//       fetch(url).then(() => {})
//     },
//     post() {},
//   }
// }

class Http {
  axiosGet(options){
    return instance({
      url: options.url,
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: options.params
    })
    .then((res) => {
      // console.log(res)
      // return res
      options.success(res.data)
    })
    .catch((err) => {
      options.error(err)
    })
  }

  axiosPost(options){
    return instance({
      url: options.url,
      method: 'post',
      headers: {
        'Content-Type': options.headers ? options.headers : 'application/json'
      },
      responseType: options.responseType ? options.responseType : 'json',
      data: options.data
    })
    .then((res) => {
       options.responseType === 'blob' ? options.success(res) : options.success(res.data)
    })
    .catch((err) => {
      options.error(err)
    })
  }
}

export {
  Http
}