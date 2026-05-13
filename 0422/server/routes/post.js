const {
    parse
} = require('url');

const postRoutes = require('../routerMap/postRoutes')

function handlerPost(req, res) {
    const {
        pathname
    } = parse(req.url, true)
    // 用于拆分post路由
    let handler = postRoutes[pathname];
    // 判断接口填写是否有误  有误就返回404 ， 并且告知问题
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
    // 发送
    handler(req, res);
};


module.exports = handlerPost;