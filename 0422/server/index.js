// 从http中导入createServer
const {
    createServer
} = require('http');
// 导入文件中函数，方便调用
const setCors = require('./config/index')
const handlerGet = require('./routes/get');
const handlerPost = require('./routes/post');
const { parse } = require('url');

// 判断请求类型
function handlerMethod (req, res) {
    console.log(req.method,']req.method[')
    switch (req.method) {
        case "GET":
            /**
             * parse(req.url, true) => pathname
             * 
            */
           const {
            pathname
           } = parse(req.url, true);
            // get请求
            handlerGet(req, res)
            break;
        case "POST":
            handlerPost(req, res)
            // post请求
            break;
        default:
            // 其他的请求方式
            break;
    }
}
// 创建服务器
const app = createServer((req, res) => {
    // 响应头
    setCors(res)

    // 处理预检请求
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    console.log(req.method, '[请求方式]')
    console.log('123')
    // 判断请求类型
    handlerMethod(req, res)
})
// 启动端口号3000服务器
app.listen(3000, () => {
    console.log('server is running at port 3000')
})