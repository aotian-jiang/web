import request from "./services/request.js";

// console.log(request(),'[request]')

/*
    最好不要这么解构出 get， post
*/
const http = request()

function getPageData() {
    /*
        类型
         - post
         - get
        请求地址
         - 域名 | ip + 端口号
         - 路由
         - 参数
        响应
         - 是否成功
    */
    fetch(URL, options)
    .then((response) => {
        if(response.ok) {
            // 浏览器的 code， 返回了一个 成功接受数据的code 
        } else {
            // Promise.reject(err)
        }
    })
    .then((data) => {

    })
    .catch((err) => {

    });
}


function getHomeBanner() {
    http.get('/home/banner?list=1')
    .then((res) => {
        console.log(res,'[res]')
    })
    .catch((err) => {
        console.log(err,'[err]')
    })
}
getHomeBanner() 


function getDetailList() {
    http.post('/detail/list', {type: 'room'})
    .then((res) => {
        console.log(res,'[res]')
    })
    .catch((err) => {
        console.log(err,'[err]')
    })
}
getDetailList() 
