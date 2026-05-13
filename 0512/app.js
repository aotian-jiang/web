const express = require('express')
const router = require('./router')

const app = express()

// express.json() 也是中间件
app.use(express.json())

// 声明端口变量
const port = 3000

/*
  如果是多个请求，那么就会重复的写输出日志内容，就可以进行封装了
  封装需要request参数
  myLogger
*/
function myLogger (request) {
  console.log(request.url, request.method, Date.now())
}

/*
  日志中间件
  request 请求对象
  response 响应对象
  next 下一个中间件
  请求 中间件 响应
*/
app.use(function(request, response, next) {
  console.log(request.token,'[日志token]')
  console.log(request.url, request.method, Date.now(), '日志中间件函数')
  next()
})

/*
  token 检查中间件
*/ 

app.use(function(request, response, next) {
  console.log(request.headers.authorization) // TOKEN

  const token = request.headers.authorization;

  if (!token) {
    response.status(401).send({
      code: 401,
      data: null,
      msg: '没有用户信息，请重新登录。'
    })
  };

  request.token = token;
  next()
}, function(request, response, next) {
  console.log(request.token,'[token]')

  if (request.token.length < 5) {
    response.status(401).send({
      code: 401,
      data: null,
      msg: 'token不合法，请重新登录。'
    })
  };

  next()
}, function(request, response, next) {
  console.log(request.token,'[检查过期]')
  console.log('token 检查中间件——token是否过期，如果过期了，也是让用户去登录')
  next()
})

//----------------中间件的分类---------------------


// 限定请求方法 + 请求路径 => 路由中间件
app.get('/', function(request, response, next) {
  /*
    逻辑处理
  */
  next() 
}, function(request, response, next) {
  response.send('get /')
})

// 限定请求路径
app.use('/user/:id',(request, response, next) => {
  console.log(request,'[request]')
  response.send(`请求方法为${request.method} 请求参数为 ${request.params.id}`)
})

// 为同一个路径，定义了多个处理中间件函数
app.get('/detail',(request, response, next) => {
  next()
}, (request, response, next) => {
  next()
})

app.get('/detail',(request, response, next) => {
  response.send(`get /detail 请求-2`)
})

//----------------路由中间件---------------------
// app.use(router) // 挂载到app中
app.use('/todos', router) // 第一个参数是自定义的前缀，如果你的路由模块是相同的前缀的情况下，可以第一个自定参数。



//-----------------今天上午--------------------
// 

// 查询商品
app.get('/product', (request, response, next) => {
  // myLogger (request)
  console.log('get - /product')
  next()
}, function(request, response, next) {
   response.send(`get /product ${request.token}`)
})

// 新增商品
app.post('/product', (request, response) => {
  // myLogger (request)
  response.send('post /product')
})

// 编辑商品
app.put('/product', (request, response) => {
  // myLogger (request)
  response.send('put /product')
})

// 删除商品
app.delete('/product', (request, response) => {
  // myLogger (request)
  response.send('delete /product')
})











// 服务启动监听
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})