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
 * 获取产品详情
 * 
*/
function getProductDetail(req, res, query) {
    try {
        const {
            id
        } = query;

        /**
         * 判断属性 id 是否正确
         * 
        */
        if (!id) {
            sendJSON(res, null, 'query数据错误', 400)
            return;
        }
        /**
         * 1.读取所有的列表数据
         * 2.filter =》 根据传入的id属性值 来获取对应的数据
        */
        const data = readJSON('list.json')
        const sendData = data.filter(item => item.pid === id)[0];
        console.log(sendData,'[sendData]')

        /**
         * 没有此商品时
         * 
        */
        if(!sendData) {
            sendJSON(res, null, '没有此商品', 200)
            return;
        }

        sendJSON(res, sendData, '请求成功')

    } catch(err) {
        sendJSON(res, null, 'request is error', 400)
    }
};

/*
    获取详情的列表数据
*/
function getProductDetailList(req, res) {
    let body = '';
    
    req.on('data', (chunk) => {
        body += chunk;
    })

    req.on('end', () => {
        try {
            const bodyData = JSON.parse(body || '{}');

            const { type } = bodyData;
            if (!type) {
                sendJSON(res, null, 'body的参数错误', 400)
                return
            }

            /**
             * 1.读取所有的列表数据
             * 2.filter =》 根据传入的tag属性值 来获取对应的数据
            */
            const data = readJSON('list.json')
            const sendData = data.filter(item => item.tag && item.tag === type);
            console.log(sendData,'[sendData]')

            if (sendData.length === 0) {
                sendJSON(res, sendData, '没有相关推荐');
                return;
            }

            sendJSON(res, sendData, '接口请求成功');
            

        }catch(error) {
            sendJSON(res, null, 'request is error', 400)
        }
    })
}


module.exports = {
    getProductDetail,
    getProductDetailList
}