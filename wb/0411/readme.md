### 前端工程化
### nodeJS的应用场景
1. type
- commonjs: const axios = requier('axios')
- ES6 module: import _ from 'jquery'

2. 没有vite => 浏览器器：监听入口文件 
3. node包 => nodemon => npmjs.com ;  nodemon 会监听nodejs入口文件，当文件发生变化了，会自动的重启服务


### 内置模块
1. const http = require('node:http') 简写 const http = require('http')
2. STATUSCODES: {} 状态码集合 200 ok | 404 没有资源（泛指）
3. 服务 正在运行（进行时）在3000 端口
4. createServer 创建一个服务
4.1 createServer 有两个参数 req, res （简写）
4.2 req：request (请求) res： response(响应)
4.3 request: 1.url 2.参数 3.请求头 4.body等
4.4 请求头： 包含着 请求类型
4.5 body： 参数 post
5.response: 服务器返回给客户端的数据（状态码、响应头、body（数据））

### http

```js
/**
 * Nodejs 中HTTP模块允许你创建以恶搞HTTP服务器（或客户端），网络应用的基础，http是和客户端进行数据交换的主要方式
 * 
*/

const app = http.createServer((requset, response) => {
    /**
     * createServer的参数是一个回调函数
     * createServer的回调函数第一个参数 requset 第二个参数是response
     * requset： 请求 ：客户端发送给服务器的请求数据：1.url 2.参数 3.请求头 4.body等
     * response： 响应：服务端返回给客户端的数据（状态码、响应头、body（数据））
    */
    // console.log(req, '[req]')
    // writeHead => 写一个响应头：1.状态码（ok 成功） 2. content-type ：自定义数据类型
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
    // 写入内容
    response.write('<h3>nihao</h3>')
    // 结束了
    response.end()
}) 

app.listen(8080, () => {

})
```


```js

const { createServer } = require('http');
const { parse } = require('url');
const data = [
    {
        id: '1',
        name: 'manju'
    }
]


const app = createServer((req, res) =>{
    // res.setHeader('Access-Control-Allow-Origin', '*')
    // const urlInfo = parse(req.url)
    // console.log(urlInfo,'[urlInfo]')

    // 定义一个数据类型 ： application/json => json的数据类型
    res.writeHead(200, { 'Content-Type': 'application/json'})
    // 转换为字符串返回给客户端
    res.write(JSON.stringify(data))
    res.end();
})

app.listen(3000, () => {
    console.log('server is running at port 3000')
})

```