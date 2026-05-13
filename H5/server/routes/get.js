const {
    parse
} = require('url');

const getHomeNewsList = require('../controller/news/home')

function handlerGet(req, res) {
    const {
        pathname
    } = parse(req.url, true)
    console.log(pathname,'[pathname]')
    if(pathname === '/home/news') {
        getHomeNewsList(req, res)
    }

    if(pathname === '/detail/news') {
    }
};

module.exports = handlerGet;