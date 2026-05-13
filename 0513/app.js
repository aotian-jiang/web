const express = require('express');
const router = require('./router')

const app = express();
app.use(express.json());


app.use((req, res, next) => {
  console.log('第一个中间件')
  next('route')
}, (req, res, next) => {
  console.log('第二个中间件')
  next()
})

const PROT = 3000;

app.use('/todos', router)

// 404 路由地址不对
app.use((req, res, next) => {
  res.status(404).send({
    code: 404,
    data: null,
    msg: `您请求的当前路径为 ${req.originalUrl} 和请求方法为 ${req.method}, 资源不存在，请检查。`
  })
})

/*
  全局错误捕获中间件
  一定要把四个参数写完整，而且位置不能颠倒。

*/ 
app.use((err, req, res, next) =>{
  res.status(500).send({
    code: 500,
    data: null,
    msg: err.message
  })
})


app.listen(PROT, () => {
  console.log(`server is running at port ${PROT}`)
})

