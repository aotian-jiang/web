// 从fs导入文件读取方法
const {
    readFileSync,
    createReadStreameadStream
} = require('fs')
// 从path导入路径方法
const {
    resolve
} = require('path')
// 读取文件内容
function readJSON(fileName){
    // 构建绝对路径
    const filePath = resolve(__dirname,`../../data/home/${fileName}`)
    // 同步读取文件内容
    const content = readFileSync(filePath, 'utf8')
    console.log(typeof content,'[content]')
    // 解析为对象并返回
    return JSON.parse(content)
};
// 向客户发送json格式响应
function sendJSON(res, data = null, msg = '请求成功', code = 200) {
    // 设置响应头
    res.writeHead(code, {
        'Content-Type': 'application/json'
    })
    // 构建json字符串写入响应体
    res.write(JSON.stringify({
        code,
        msg,
        data
    }))
    // 结束
    res.end();
};
// 处理单个详细请求
function getProductDetail(req, res, query) {
    try {
        // 从参数中获取商品id
        const {
            id
        } = query;
        // 如果参数错误返回400
        if (!id) {
            sendJSON(res, null, 'query数据错误', 400)
            return;
        }
        // 读取列表json文件
        const data = readJSON('list.json')
        // 查询pid等于id的第一个
        const sendData = data.filter(item => item.pid === id)[0];
        console.log(sendData,'[sendData]')
        // 如果没有返回空数据
        if(!sendData) {
            sendJSON(res, null, '没有此商品', 200)
            return;
        }
        // 正常返回
        sendJSON(res, sendData, '请求成功')
        // 错误提示
    } catch(err) {
        sendJSON(res, null, 'request is error', 400)
    }
};
// 处理获取推荐列表
function getProductDetailList(req, res) {
    // 用于储存chunk
    let body = '';
    // 监听数据块
    req.on('data', (chunk) => {
        // 拼接数据块
        body += chunk;
    })
    // 请求接收数据
    req.on('end', () => {
        try {
            // 解析json请求体
            const bodyData = JSON.parse(body || '{}');
            // 获取筛选类型
            const { type } = bodyData;
            // 没有数据就返回400
            if (!type) {
                sendJSON(res, null, 'body的参数错误', 400)
                return
            }
            // 读取列表json文件
            const data = readJSON('list.json')
            // 筛选出tag属性等于type的内容
            const sendData = data.filter(item => item.tag && item.tag === type);
            console.log(sendData,'[sendData]')
            // 没有查询到就返回200提示
            if (sendData.length === 0) {
                sendJSON(res, sendData, '没有相关推荐');
                return;
            }
            // 正常返回
            sendJSON(res, sendData, '接口请求成功');
            
            // 出错返回400
        }catch(error) {
            sendJSON(res, null, 'request is error', 400)
        }
    })
}

// 导出函数，方便调用
module.exports = {
    getProductDetail,
    getProductDetailList
}