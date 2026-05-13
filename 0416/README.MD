### chunk
1. chunk 就是小块的数据
- 读一点
- 再读一点

2. eventEmitter 实例化 => on => createReadStream
3. createReadStream | createWriteStream
4. createWriteStream => on => finish

```js
// nodeJS

const rw = createWriteStream(xxx)

rw.write('xx','utf8')
rw.end()

rw.on('finish', () => {
    console.log('写入完成')
})

rw.on('error', () => {
    console.log('写入失败')
})

```

### 数据流中响应数据的格式
1. 因为前后端是数据流式传输，所以使用 Content-Type 来区别不同的数据类型
2. 前后端有可能有错误处理，比如后端有error 事件，所以后端需要自定义响应数据格式，使用对象的方式
3. 通过对code的自定义和前端达成共识，写入接口文档中
```js
    /**
     *  常见的code码标识
     *  200 - 成功
        201 - 创建成功
        400 - 请求参数错误
        401 - 未登录/未授权
        403 - 无权限
        404 - 资源不存在
        500 - 服务器内部错误
     * 
    */
    {
        code: `自定义code码`
        message: `自定义响应信息，给前端看`,
        data: `返回的数据类型`
    }

```
4. 后端可以直接通过code来进行判断,响应体中的返回数据的结构肯定是固定的


5. parse 是从 url内置模块 结构出来的方法
- const { query, pathname } = parse(req.url)
- query 代表 get请求的参数
- pathname 代表 请求的路径，也就是接口的地址
- method 代表不同的请求类型

6. POST 请求
```js
// Nodejs
    http.createServer((request, response) => {
        // 设置跨域
        // Access-Control-Allow => 访问 - 控制 - 允许
        response.setHeader('Access-Control-Allow-Origin', '*')
        // 设置请求类型
        response.setHeader('Access-Control-Allow-Methods', 'GET,POST')
        // 设置请求自定义类型
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    })


```