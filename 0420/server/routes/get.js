const {
    parse
} = require('url');

const getHomeNewsList = require('../controller/news/home')

function handlerGet(req, res) {
    const {
        pathname
    } = parse(req.url, true)
    console.log(pathname,'[pathname]')
    // if 是逻辑
    if(pathname === '/home/news') {
        // end() 返回的是数据
        getHomeNewsList(req, res)
    }

    if(pathname === '/detail/news') {
        /**
         * typeTag: '军事'
         * 
        */
    }
};

module.exports = handlerGet;