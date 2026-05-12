const http = require('http') // 启动一个服务
//console.log(http,'[http]') // 对象： 属性和方法

// const hi = '你好 node'
const data = [
    {
        id: '1',
        name: '电视剧'
    },
    {
        id: '2',
        name: '动漫'
    }
]

const app = http.createServer((requset, response) => {
    /**
     * createServer的参数是一个回调函数
     * createServer的回调函数第一个参数 requset 第二个参数是response
     * 
    */
    // console.log(req, '[req]')

    // response.writeHead(200, { 'content-type': 'text/html;charset=utf-8' })
    // response.write('<div>你好</div>')

    response.writeHead(200, { 'content-type': 'appliaction/json'})
    response.write(JSON.stringify(data))
    
    response.end()
}) 

app.listen(3000, () => {
    console.log('server is runing at port 3000')
})