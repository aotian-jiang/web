// ES6 => 解开
const { 
    createServer
} = require('http');

/**
 * readFile     异步读取文件
 * readFileSync 同步读取文件
 * 
*/
const {
    readFile,
    readFileSync
} = require('fs'); 
// fileSystem

// create => 创建
// server => 服务 （node 创建的这个服务）
// app 当前服务的总称
// createServer 一个参数 =》 回调函数
// request  => 请求   前端 AJAX
// response => 响应   返回了数据


const app = createServer((request, response) => {
    /**
     * 跨域  1.协议不同 http://WWW.BAIDU.COM  HTTPS://WWW.BAIDU.COM
     *       2.  WWW.BAIDU.COM => 域名
     *       3. port 端口号不同
     * 
     *  前端： http://localhost:5173
     *  后端： http://localhost:3000 服务端解决跨域
     * 
     * setHeader 写入响应头
     * */ 

    response.setHeader('Access-Control-Allow-origin', '*')

    // writeHead 写入响应头里面的内容， 1.第一个参数状态值 2.自定义的数据类型
    response.writeHead(200,{ 'Content-Type': 'application/json' })
    // 同步的
    // readFileSync 第一个参数是当前目录的文件， 第二个参数是 字符集
    // const data = readFileSync('./data.json', 'utf8')
    // write 写入数据

    /**
     * 异步
     * 
    */
    readFile('./data.json', 'utf8', (err, data) => {
        response.write(data, 'utf8')
        response.end()
    })
   
    
    
    
    // 告诉node结束了
    // response.end()

    /**
     * 异步
     * 
    */
    // readFile('./data.json', 'utf8', (err, data) => {
    //     response.write(data, 'utf8')
    //     response.end()
    // })
    
    // console.log(JSON.parse(data))
   
    // console.log('1')

    response.end()
});

app.listen(3000, () => {
    console.log(`server is running at port 3000`)
})