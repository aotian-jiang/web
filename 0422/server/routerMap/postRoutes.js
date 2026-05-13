// 导入getProductDetailList
const {
    getProductDetailList
} = require('../controller/detail/index')
// 归类
const postRoutes = {
   '/detail/list': getProductDetailList
}
// 导出方便调用
module.exports = postRoutes;