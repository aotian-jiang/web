const {
    getProductDetailList
} = require('../controller/detail/index')

const {
    getUserBill
} = require('../controller/my/index')

const postRoutes = {
   '/detail/list': getProductDetailList,
   '/my/getUserBill': getUserBill
}

module.exports = postRoutes;