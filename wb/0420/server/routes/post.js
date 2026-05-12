function handlerPost(req, res) {
    let body = '';
    // chunk 块
    req.on('data', (chunk) => {
        // 拼接数据
        body += chunk;
    })

    req.on('end', () => {
        // 数据传输完成
        console.log(typeof body, '[body]')
        console.log(JSON.parse(body), '[body-结果]')

        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({
            code: 200,
            msg: '请求成功',
            data: [{id: 1}]
        }))
    })  
};


module.exports = handlerPost;