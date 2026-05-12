
function setCors(res) {
    // 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许请求的接口
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
    // 设置允许的content类型
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}
// 导出函数 方便调用
module.exports = setCors;