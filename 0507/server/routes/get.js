const {
    parse
} = require('url');

const getRoutes = require('../routerMap/getRoutes')

function handlerGet(req, res) {
    const {
        pathname,
        query
    } = parse(req.url, true)

    /****
     * 
     * 
     * let b = '/home/news';
        let obj = {
            a: '1',
            '/home/news': function() {
                console.log('这个是 callMe 的函数') // 执行了这个函数里的逻辑
                return {
                    code: 200,
                    msg: '接口请求成功',
                    data: ['1']
                }
            }
        }
        // obj.a; => 1
        // obj.callMe;
        console.log(obj[b])
     * 
     * 
    */
        // obj[pathname]
        // if (pathname === b) {
        //     function()
        // }

        // if(pathname === '/home/news') {
        //     function()
        // }



    /**
     * getRoutes[pathname] 获取了一个函数
     * 目的就是为了去拆分 get 请求路由,编写一个映射关系
     * 这个映射关系是 路由地址与处理数据的函数做的映射
     * getRoutes[pathname]; 是为了解决 if (pathname === 'xxxx') { handler() }
     * 
     * */ 
    let handler = getRoutes[pathname];
    console.log(handler,'[handler-handler]')
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

    handler(req, res, query);
};

module.exports = handlerGet;