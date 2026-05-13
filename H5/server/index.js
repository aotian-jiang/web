const {
    createServer
} = require('http')

const {
    parse
} = require('url')

function handlerGet() {

}

function handlerPost(req, res) {
    let body = '';
    // chunk 块
    req.on('data', (chunk) => {
        // 拼接数据
        body += chunk;
    })

    req.on('end', () => {
        // 数据传输完成
        console.log(typeof body, '[body]')
        console.log(JSON.parse(body), '[body-结果]')

        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({
            code: 200,
            msg: '请求成功',
            data: [{id: 1}]
        }))
    })

    
};

function handlerMethod (req, res) {
    console.log(req.method,']req.method[')
    switch (req.method) {
        case "GET":
            // get请求
            handlerGet()
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

const app = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    // 处理预检请求
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    console.log(req.method, '[请求方式]')
    // req 是请求对象
    // res 是响应对象
    // res.end() 调用end方法的时候，代表着此次响应结束了，nodejs 进入了休眠状态。

    /**
     * get / 简单请求，获取某些数据
     *  1.get的主要请求场景：获取列表、获取详情、获取某些查询数据
     *  2.get请求就是在url上进行拼接
     *  3.get请求只会发送一次
     * post / 携带参数的，获取JSON数据
     *  1.post的主要请求场景：登录、注册、新增数据（表单）、获取列表 （page-number\page-size）
     *  2.post请求放到body中
     *  3.post会发送两次请求
     * put
     * deleted
     * 
     * 1. 甄别是什么请求类型（post\get）
     * req.method => GET | POST
     * 2. 请求地址
     * req.url
    */

    // if (req.method === 'GET' ) {

    // }

    // if (req.method === 'POST') {

    // }
    // console.log(parse(req.url), parse(req.url).pathname, parse(req.url).query)
    
    handlerMethod(req, res)
})

app.listen(3000, () => {
    console.log('server is running at port 3000')
})