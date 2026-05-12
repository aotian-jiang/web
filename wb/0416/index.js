const {
    createServer
} = require('http')

const {
    createReadStream
} = require('fs')

const app = createServer((req, res) => {
   
    res.writeHead(200, { 'content-type': 'application/json' })

    const rs = createReadStream('./data2.json')
    rs.setEncoding('utf8')


    let data = ''

    rs.on('data', (chunk) => {
        data += chunk;
    })

    rs.on('end', () => {
        console.log(data,'[读取完毕]')

        res.write(JSON.stringify({
            code: '200',
            message: '请求成功',
            data: data
        }))
        res.end()
    })

    rs.on('error', () => {
        console.log(data,'[读取错误]')
        // 401 自定义的code，目的是告诉前端 接口的请求参数错误了
         res.write(JSON.stringify(
            {
            code: '401',
            message: '接口请求参数错误，请检查参数。',
            data: []
         }
         ))
         res.end()
    })
}); 

app.listen(3000, () => {
    console.log('server is runing 3000')
})