// 导入getHomeBanner与getHomeList
const {
    getHomeBanner,
    getHomeList
} = require('../controller/home')
// 导入getProductDetail
const {
    getProductDetail
} = require('../controller/detail/index')
// 归类成对象方便判断和调用
const getRoutes = {
    '/home/banner': getHomeBanner,
    '/home/list': getHomeList,
    '/detail': getProductDetail
}

module.exports = getRoutes;