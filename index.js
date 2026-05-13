const http = require('http') // 启动一个服务
console.log(http,'[http]') // 对象： 属性和方法

const app = http.createServer((req, res) => {
    /**
     * createServer的参数是一个回调函数
     * createServer的回调函数第一个参数 requset 第二个参数是response
     * 
    */
    console.log(req, '[req]')
    
    res.end()
}) 

app.listen(3000, () => {
    console.log('server is runing at port 3000')
})