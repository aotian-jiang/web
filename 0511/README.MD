### Express
1. 它是一个快速的，简单(易用性)的 NodeJS web 应用框架。可以很轻松的构建web应用。
    1.1 接口服务
    1.2 传统的web网站
    1.3 开发工具
    webpack => webpack-dev-server

2. 中间件， 应用程序的中间件，路由级别的中间件。
    2.1 Express 中间件非常强大，但是这是一把双刃剑。
    2.2 因为 中间件过于灵活
    2.3 缺点就是虽然中间件可以解决所有的需求问题，但是你要挑选合适的包是一个挑战。

3. Express 不对NodeJS 已有的特性进行二次封装，只是做了扩展，比如说：内部依然沿用了http模块。

4. 很多流行的框架都是基于 Express 进行了 封装 nestJS

5. Express 的特点：
    5.1 简单易学
    5.2 丰富的API支持，以及常见的HTTP辅助程序，比如 重定向、缓存等
    5.3 强大的路由
    5.4 灵活的中间件
    5.5 高性能
    5.6 非常稳定 （源码进行了百分百的覆盖测试）
    5.7 视图系统支持14个及以上的主流模板引擎，比如ejs模板引擎。


6. Express 
1. 下载 npm i express --save
2. nodemon 使用 npm i nodemon --save-dev,因为这个是在开发的环境中使用的

```js
// nodeJS
const {
    http
} = require('http');


const app = http.createServer((req, res) => {
    req.method // 得到请求方式 get | post | delete | put 
    response.write(code, {data: '', code: '', msg: ''})
    response.end()
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})

// Express
const express = require('express')
const app = express()
const port = 3000
app.get('/list', (request, response) => {
  // req => request 请求体
  // res => response 响应体
  
  // send => 发送
  response.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

### put 和 patch
1. 共同点： 更新数据 
2. 不同点： put 需要把所有的字段都要传出过去，而patch 则不需要传输不更新的内容
```js
userInfo = {
    name: '张',
    age: 18
}

{
    name: '李'
}

```
 


### get请求
1. 获取参数 request.query 类型是 object
2. nodeJS string 手动转换为对象 request.query = formatGetQuery(query)

3. 如果只有一个参数，那么你可以设计为使用 `路由/:变量 `这样的方式进行参数的获取。那么使用 request.params 来获取这个参数


### post | put | delete请求
```js
// nodejs
const app = http.createServer((req, res) => {
    let body = '';
    
    req.on('data', (chunk) => {
        body += chunk;
    })

    req.on('end', () => {
        console.log(body,'[body]')
    })
})

// express
const app = express()
app.use(express.json()) // 配置获取body数据，解析请求体，数据为JSON的格式，不仅仅局限于POST。
// 通过 配置 express.json() 那么获取到的body的JSON数据为对象，而不是nodeJS 原生中的 字符串了。

```
1. 通过 express 中的json(). app.use(express.json())
2. post | put | delete , 通过 request.body 获取参数
3. 通过对 post | put | delete 的接口设计，就不能在url再去挂参

### request 请求体
1. request.url// 获取请求地址
2. request.method // 请求方式
3. request.headers // 请求头
4. request.query // get 请求参数
5. request.params // 路由拼接参数,配合 `/:变量名使用`、
6. request.body // 获取复杂请求参数（post\delete\patch\put）

### 定义code
- status(code码)
1. response.status(code).send(data) 链式调用

### respinse 响应 
- 两种方式进行数据响应
1. response.json() 直接给请求头写入 Content-Type: application/json
2. response.send() 根据请求类型及响应数据类型，返回对应的Content-Type的类型。