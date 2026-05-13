import axios from 'axios';
console.log(axios)
/**
 * wrap
 * wrapper 容器
 * {
 *  a:'11',
 *  sum: function
 * }
 * 
 * [1, FUNCTION] X
 * 
 * FUNCTION () {}
 * FUNCTION.PROTOTYPE.ADD = FUNCTION
 * 
 * CLASS 
 * 
*/





// function request() {
//     return {
//         a: 1,
//         get(a) {
//             console.log('get runing')
//             fetchData(a)
//         },
//         post(a, b) {
//             fetchData(a, b)
//         }
//     }
// }

// function fetchData(a, b) {
//     fetch(a, b)
//         .then((response) => {
//             return response.json()
//         })
// }

/*
    调用 request() 获取了 对象
*/
// const r = request()

// console.log(r.a)

// console.log(r.get(1))


// wrap ____________________

// function add(a, b) {
//     return a + b;
// }   

// add(1, 2)

// add1(2,3)


// const r = axios()
// console.log(r)
/**
 *  第三方库（代码）
 *  
 * 
*/
// axios.get('http://localhost:3000/home/list', {
//     // GET 请求自动做了序列化的工作，不需要你再转换为string
//     // 携带参数使用 params
//     params: {
//         pageNumber: 1,
//         pageSize: 10
//     }
// })
// .then((response) => {
//     /*
//         整体的响应对象
//             - data 后端返回的真正的数据
//             - status HTTP的状态码，注意也就是浏览器的状态码，再注意当前是在浏览器中进行请求的。
//             - headers 响应头信息
//     */ 
//     console.log(response,'[response]')

//     // 这个200是浏览器的状态
//     if (response.status === 200) {
//        // console.log(response.data)

//         // code 是自定义的
//         if (response.data.code === 200) {
//             // 真正的返回了正确的数据类型
//             console.log(response.data)
//         } else {
//             // 返回了错误提示
//         }
//     }
// })


/**
 * post
*/
axios.post('http://localhost:3000/detail/list', {
    type: 'room'
})
.then((res) => {
    console.log(res,'[POST-res]')
})
.catch((err) => {

})

/**
 * axios 常见的请求方式
 *  - 点 + 请求类型 
 *  - axios(config)
*/
// axios.get('url')
// axios.post('url', 'config')

axios({
    url: 'http://localhost:3000/home/list',
    method: 'get',
    params: {
        pageNumber: 1,
        pageSize: 10
    }
}).then((res) => {
    console.log(res,'[axios-config-get]')
})


axios({
    url: 'http://localhost:3000/detail/list',
    method: 'post',
    data: {
        type: 'phone'
    }
}).then((res) => {
    console.log(res,'[axios-config-post]')
})




// function myAxios () {
//     return {
//         get(url,config){
//            let obj = config.params
//            JSON.stringify(obj)
//         },
//         post(url, data){
//             // let obj = config.params
//            JSON.stringify(data)
//         }
//     }
// }

// axios.create({
//     baseURL: 'www.baidu.com',
//     baseURL: 'www.baidu.com',
//     baseURL: 'www.baidu.com'
// })

// axios.defaults.baseURL = 'www.baidu.com'
// axios.defaults.baseURL = 'www.baidu.com'
// axios.defaults.baseURL = 'www.baidu.com'
// axios.defaults.baseURL = 'www.baidu.com'
// axios.defaults.baseURL = 'www.baidu.com'