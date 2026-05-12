### 数据流
1. 什么是流 ？处理数据交换的载体，数据是以字节序列的方式流动的，字节序列就是流（字节流）
```NODEJS
1. res.write('字符串') =》 字节
2. stream：流
```
#### 什么是数据流动和数据交换
1. 数据流就是数据传输的过程
2. 输入流 input  stream 
3. 输出流 output stream 
- request  客户端向服务端输入的请求信息（输入流）
- response 服务端向客户端响应的返回信息（输出流）
* 输入和输出的过程就是数据交换的过程
* 数据交换的过程需要数据流来完成

#### Nodejs stream 
1. stream 就是完成操作数据的流动工具
2. readfile/ readfileSync 都属于 fs (fileSystem) 文件系统
3. createReadStream() | createWriteStream() 核心方法
4. createReadStream 执行的返回结果就是 EvnetEmitter 的实例，返回的结果是可以进行流的工作的事件监听
5. 传输数据中使用 data 进行传出
6. 传输结束用 end
7. 传输错误用 error 
```JS
// NODEJS
const {
    readfile,
    readfileSync,

    // 流式读取
    createReadStream,
    // 写入
    createWriteStream
} = require('fs')
// 1.参数 地址
const rs = createReadStream('./data.json')
// 2.字符集 =》 utf8
rs.setEncodeing('utf8')
// chunk => 块
let data = ''
rs.on('data', (chunk) => {
    data += chunk;
});

res.on('end', () => {
    console.log(data,'[读取完成了]')
});
```

5. createReadStream 与 readFileSync 不同
5.1 readFileSync 会读取整个文件，放入到了内存之中，读取完成后返回给回调（小文件）
5.2 createReadStream 分块（chunk）读取文件，使用data 来读取进度和进行其他处理。（适合大文件）