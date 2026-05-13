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
   *  2. 重复请求，可以发送非最后一次请求。
   * 
   * */ 
  console.log(config,'[config]')
  config.headers['Authorization'] = '1234'
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

  axiosPost(){}

  aabbcc() {}
}

export {
  Http
}