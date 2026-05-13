


// 从fs 导入readFikeSync 与 createReadStreameadStream 方法
const {
    readFileSync,
    createReadStreameadStream
} = require('fs');

// 导入 resolve 方法

const {
    resolve
} = require('path')

/*
    读取JSON数据
    1.参数1 文件名称 fileName
*/
function readJSON(fileName){
    // 构建绝对文件地址
    const filePath = resolve(__dirname,`../../data/home/${fileName}`)
    // 同步读取文件
    const content = readFileSync(filePath, 'utf8')
    console.log(typeof content,'[content]') // string
    // 解析为对象格式 返回给readJSON 用于发送前端
    return JSON.parse(content)
};

/*
    发送数据
*/
function sendJSON(res, data = null, msg = '请求成功', code = 200) {
    // 设置响应头
    res.writeHead(code, {
        'Content-Type': 'application/json'
    })
    // 构建统一结构的json字符串写入响应体
    res.write(JSON.stringify({
        code,
        msg,
        data
    }))
    // 结束
    res.end();
};
// 读取banner文件
function getHomeBanner(req, res, query) {
    // 读取banner文件
    const data = readJSON('banner.json')
    // 正常发送
    sendJSON(res, data)
    console.log(data,'[data-获取的数据]')
}
// 读取list文件
function getHomeList(req, res, query) {
    // 获取页码与条数
    const {
        pageNumber,
        pageSize
    } = query;
    // 读取文件
    const data = readJSON('list.json')
    // 获取此页第一条的索引
    const starIndex = (pageNumber - 1) * pageSize;
    // 获取此页最后一条的索引
    const endIndex = starIndex + (+pageSize)
    // 截取数据
    const sendData = data.slice(starIndex, endIndex)
    // 正常发送
    sendJSON(res, sendData)
};

// 导出函数方便调用
module.exports = {
    getHomeBanner,
    getHomeList
};