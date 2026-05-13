// const getHomeBanner = require('../controller/home')
const {
    getHomeBanner,
    getHomeList
} = require('../controller/home')

const {
    getProductDetail
} = require('../controller/detail/index')

/**
 * 请求 '/home/news' 的地址，你就执行 getHomeNewsList 函数
 * 
*/
const getRoutes = {
    '/home/banner': getHomeBanner,
    '/home/list': getHomeList,
    '/detail': getProductDetail
}

module.exports = getRoutes;