const {
    parse
} = require('url');

const postRoutes = require('../routerMap/postRoutes')

function handlerPost(req, res) {
    const {
        pathname
    } = parse(req.url, true)

    let handler = postRoutes[pathname];
    
    if (!handler || typeof handler !== 'function') {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            code: 404,
            msg: '未找到此接口地址，请重新检查接口地址，是否编写错误。',
            data: null
        }))
        return;
    }

    handler(req, res);
    // let body = '';
    // // chunk 块
    // req.on('data', (chunk) => {
    //     // 拼接数据
    //     body += chunk;
    // })

    // req.on('end', () => {
    //     // 数据传输完成
    //     console.log(body,'[body]')
    //     //console.log(JSON.parse(body), '[body-结果]')

    //     res.writeHead(200, {
    //         'Content-Type': 'application/json'
    //     })
    //     res.end(JSON.stringify({
    //         code: 200,
    //         msg: '请求成功',
    //         data: [{id: 1}]
    //     }))
    // })  
};


module.exports = handlerPost;