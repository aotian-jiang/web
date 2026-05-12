const {
    createServer,
} = require('http')

const {
    createReadStream
} = require('fs')

const app = createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST')
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    /**
     * 1. 读取要下载的文件资源时，不要使用setEnCoding()
    */

    const rs = createReadStream('./logo1.png')

    response.writeHead(200, {
        /**
         * 响应头的数据类型
         *  1. 浏览器要下载文件了，也就是说要告诉浏览器这个是什么类型的数据
         *  2. Content-Type： image/gif 是告诉浏览器的类型为图片格式而已
         *  3. application/octet-stream 告诉浏览器要下载文件了。
         *  4. Content-Disposition 告诉浏览器，怎么处理这个你要下载的文件呢？
         *  5. attachment;filename=logo1.png 处理下载场景，当成附件下载，不能渲染到页面上
         *  6. 不写 ‘Content-Disposition': 'attachment;filename=logo1.png’ 浏览器无法准确的判断文件类型，下载时出现文件识别异常，某些场景下会出现 预览、下载 不稳定。
         *  7. 一块写的： 浏览器会理解为：
         *      7.1 服务器返回成功
         *      7.2 返回的是一份二进制数据
         *      7.3 这份文件不能直接显示
         *      7.4 请按照附件下载
         *      7.5 下载的文件叫 logo1.png
         * 
         * */ 
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment;filename=logo1.png'
    })

    // rs是一个流式文件，管道通向的还是流式文件，也就是说 是通过流失读取，要流式写入。
    rs.pipe(response)
    rs.on('end', () => {
        /**
         * 不能字符串和二进制数据做混合，因为你已告诉浏览器的数据格式类型是 application/octet-stream 流式数据了
         * 
        */

        // let data
        // response.write(JSON.stringify({
        //     code: 200,
        //     msg: '成功',
        //     data: data
        // }))
        response.end();
    })
})


app.listen(3000, ()=> {
    console.log('port 3000')
})