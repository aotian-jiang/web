const { createServer } = require('http');
const { parse } = require('url');
const data = [
    {
        id: '1',
        name: 'manju'
    }
]


const app = createServer((req, res) =>{
    // console.log(req,'[req-来自客户端的请求]')
    //  Access-Control-Allow : 访问-控制-允许-源  * 通配符
    // res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    // const urlInfo = parse(req.url)
    // console.log(urlInfo,'[urlInfo]')
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.write(JSON.stringify(data))
    res.end();
})

app.listen(3000, () => {
    console.log('server is running at port 3000')
})