### node 

#### WEB 服务的目的是什么？
1. 数据共享，无论你的服务、数据放到哪里，数据是需要通信的，最终的目的是数据共享。
2. 在计算机上架设并常驻一个WEB应用。
3. 服务器的本质就是一台计算机，WEB服务器就是架设并常驻WEB服务程序应用的服务器。
4. 阿里云、腾讯云、华为云

#### 请求流程与后端基础知识
1. 客户端（client） => request => 服务端（server）=> 原生模块 => response => 返回给客户端（client）
2. WEB 服务的应用程序，叫做WEB 服务平台，常见的WEB服务开发语言：JAVA、Python、Go
3. Node 一般来说在企业级应用中的使用场景为 中间件。

#### GET | POST

```JS
// nodeJS
    const {
        createServer
    } = require('http')

    const app = createServer((req, res) => {
        // req 是请求对象
        // res 是响应对象
        // res.end() 调用end方法的时候，代表着此次响应结束了，nodejs 进入了休眠状态。

        /**
         * get / 简单请求，获取某些数据
         *  1.get的主要请求场景：获取列表、获取详情、获取某些查询数据
         *  2.get请求就是在url上进行拼接
         *  3.get请求只会发送一次
         * post / 携带参数的，获取JSON数据
         *  1.post的主要请求场景：登录、注册、新增数据（表单）、获取列表 （page-number\page-size）
         *  2.post请求放到body中
         *  3.post会发送两次请求
         * put
         * deleted
         * 
         * 1. 甄别是什么请求类型（post\get）
         * req.method => GET | POST
         * 2. 请求地址
         * req.url
        */

        // if (req.method === 'GET' ) {

        // }

        // if (req.method === 'POST') {

        // }

        /**
         * OPTIONS
         * 预先检查
         *  
         * 
        */


       /**
        * 封装的目的： 封装就是为了让一个文件或者一个函数去做一件事，以便更好地维护代码。也就是说 是单一职责。并且系统化的分工后，也就是现代的工程化。
        * 
        * 
       */
    })

    app.listen(3000, () => {
        console.log('server is running at port 3000')
    })


```



### 
1. 用 `method` 去做分发请求
2. 用 `pathname` 去找接口
3. 用 GET query 获取参数
4. 用 POST body  request.on('data') request.on('end')
5. 逻辑和数据不能耦合
    - index.js 服务入口，是一个入口页面。它的职责：1.启动服务 2.接受请求 3.分发（method => pathname => query | body）

    - routes 按照请求方式进行一个分发 （逻辑）

    - controller 负责具体的接口处理逻辑 （数据）

    * 所有的事，都是再拆分，拆分成不同的文件和函数


### 映射
```js

 
 obj: {
    'http://wwww.baidu.com': 'http://localhost:3000'
 }

/**
 * '/home/news': function
 * 
 * 
*/

obj1: {
    a: function() {}
}

obj1['a']() 等价  let fn1 = obj1.a; fn1()

obj1['b']() => undefined => undefined() => not is a function


```


### 敏感参数 => 加密（MD5）
1. 不能放到 get 请求上
2. 也不能放到 post 上
3. 一定要加密处理