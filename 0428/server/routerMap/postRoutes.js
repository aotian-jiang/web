const {
    getProductDetailList
} = require('../controller/detail/index')

const postRoutes = {
   '/detail/list': getProductDetailList
}

module.exports = postRoutes;