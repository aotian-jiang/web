// 导入parse方法
const {
    parse
} = require('url');
// 从文件中导入getRoutes 方便调用函数
const getRoutes = require('../routerMap/getRoutes')

function handlerGet(req, res) {
    // 导入url路由
    const {
        pathname,
        query
    } = parse(req.url, true)
    // 获取一个函数 用于拆分get请求路由
    let handler = getRoutes[pathname];
    console.log(handler,'[handler-handler]')
    // 判断接口是否正确
    if (!handler || typeof handler !== 'function') {

        // 返回404.并且告知接口填写错误
        res.statusCode = 404;
        // 响应头
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            code: 404,
            msg: '未找到此接口地址，请重新检查接口地址，是否编写错误。',
            data: null
        }))
        return;
    }
    // 获取
    handler(req, res, query);
};

module.exports = handlerGet