const {
    readFileSync,
    createReadStreameadStream
} = require('fs')

const {
    resolve
} = require('path')

/*
    读取JSON数据
    1.参数1 文件名称 fileName
*/
function readJSON(fileName){
    const filePath = resolve(__dirname,`../../data/home/${fileName}`)
    const content = readFileSync(filePath, 'utf8')
    console.log(typeof content,'[content]') // string
    return JSON.parse(content)
};

/*
    发送数据
*/
function sendJSON(res, data = null, msg = '请求成功', code = 200) {
    res.writeHead(code, {
        'Content-Type': 'application/json'
    })
    // res.end(JSON.stringify({
    //     code,
    //     msg,
    //     data
    // }))
    res.write(JSON.stringify({
        code,
        msg,
        data
    }))
    res.end();
};

/**
 * HOME
 *  - 首页轮播图
*/
function getHomeBanner(req, res, query) {
    /**
     * 1. 读取JSON数据
     * 2. 组装数据 （1. 排序 2. 分页 3. 新增属性）
     * 3. 发送数据
    */
    const data = readJSON('banner.json')
    sendJSON(res, data)
    console.log(data,'[data-获取的数据]')
}

/**
 * HOME
 *  - 首页列表
*/
function getHomeList(req, res, query) {
    /**
     * 1. 读取JSON数据
     * 2. 组装数据 （1. 排序 2. 分页 3. 新增属性）
     * 3. 发送数据
    */
    // console.log(query,'[query-获取的参数]')
    const {
        pageNumber,
        pageSize
    } = query;

    const data = readJSON('list.json')
    // console.log(data,'[data]')
    // console.log(typeof pageNumber, typeof pageSize)
    const starIndex = (pageNumber - 1) * pageSize;
    const endIndex = starIndex + (+pageSize)
    // console.log(starIndex,endIndex, 'idx-')
    const sendData = data.slice(starIndex, endIndex)
    // console.log(sendData, 'sendData-')
    sendJSON(res, sendData)
};

module.exports = {
    getHomeBanner,
    getHomeList
};