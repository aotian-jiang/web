// commonjs 规范引入

const http = require('http')

// readFileSync 同步读取文件
// readFile     异步读取
const {
    readFile,
    readFileSync 
} = require('fs') // fileSystem
const {
    resolve
} = require('path') // 地址

const data = [
    {
        id: '1',
        name: 'DIANSHIJU'
    },
    {
        id: '2',
        name: 'DONGMAN'
    }
]

// createServer的参数是一个回调函数
const app = http.createServer((request, response) => {
    // request  前端进行的请求数据
    // response 后台响应的数据

    // 1.写入单个请求头：解决跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 2.设置：响应头
    response.writeHead(200, { 'Content-Type': 'application/json' })

    // 读取文件
    readFile(resolve(__dirname, './data.json'), 'utf8', (err, data) => {
        console.log(data, '[data]')
    })
    // 执行顺序
    console.log('312')
    // 3.写入数据,string
    response.write(JSON.stringify(data))

    // 4.结束了
    response.end();
})

app.listen(3000, () => {
    console.log(`server is running at port 3000`)
})


// // 商家制作 callBack
// function createFood() {
//     console.log('商家制作')
//     console.log('商家制作完成')
// }

// // 下单 create 创建  Order 订单
// function createOrder(createFood) {
//     let createOrderId = ''

//     createOrderId = '1234'

//     if (createOrderId) {
//         setTimeout(() => {
//             createFood()
//         }, 2000)
//     }
// }

// createOrder(createFood)


