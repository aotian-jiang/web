const {
    createServer
} = require('http')

const {
    createReadStream
} = require('fs');

const {
    parse
} = require('url')

const ResponseBody = require('./utils/responseBody')

const app = createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200, { 'content-type': 'application/json' })

    /*
        处理接口参数的信息 1. 是哪一个的接口 2.接口参数
    */
    // console.log(parse(req.url),'[req]')
    // const urlParams = req.url

    // get 请求的参数使用 query 来获取
    const { query, pathname } = parse(req.url)
    console.log(query, pathname,'[query, pathname]')
    // list=1
    // console.log(query.split('='),'[字串串分割成数组数据]')
    // // 得到了请求参数的值 为 1
    // let type = query.split('=')[1];
    // console.log(type,'[type]')

    /*
        1.读取文件，用流的方式读取（createReadStream）。如果文件特别大，那么我要使用流的方式，把文件切分成小块（chunk）,
        读取一部分，再读取一部分，最终组装成一个完成的文件数据，放到 `data` 的方法回调函数中。
        2. 字符集 utf8
    */

    /**
     * 拼装成我想要的路径地址
     * 1. `` 为模板字符串，是ES6中提供的，可编写变量的一种方式，最终返回的是字符串格式的数据
     * 
     * */ 

    // var type1  = '1';
    // var path1 = './data' + a + '.json'

    let path = `./data1.json`;
    const rs = createReadStream(path)
    rs.setEncoding('utf8')


    let data = ''

    rs.on('data', (chunk) => {
        data += chunk;
    })

    rs.on('end', () => {
        console.log(data,'[读取完毕]')

        // res.write(JSON.stringify({
        //     code: '200',
        //     message: '请求成功',
        //     data: data
        // }))


        /*
            let body = new ResponseBody(code, msg, data).ok()
            这种方式不可取，因为这些信息都会变为公共信息
            1. 逻辑一定要严谨
        
            let body = new ResponseBody().ok(code, msg, data)
            1. 回调函数中执行的逻辑为返回数据并响应请求的逻辑，为一次性（针对于当前的请求为一次性，再次调用此回调函数和上一次请求无关）的定义数据状态
            2. 综上所述，所以说是可以优化为 静态方法 => static

        */ 
        // let body = ResponseBody.ok(200, '请求成功', data)
     
        res.write(ResponseBody.ok('200', '请求成功', data))
        res.end()



    })

    rs.on('error', () => {
        console.log('[data读取错误]')
        // 401 自定义的code，目的是告诉前端 接口的请求参数错误了
        //  res.write(JSON.stringify(
        //     {
        //         code: '401',
        //         message: '接口请求参数错误，请检查参数。',
        //         data: null
        //     }
        //  ))

        res.write(ResponseBody.ok('401', '接口请求参数错误，请检查参数。', null))
        res.end()
    })
});

app.listen(3000, () => {
    console.log('server is runing 3000')
})