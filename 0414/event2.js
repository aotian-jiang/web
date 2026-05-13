const { EventEmitter } = require('events');
const { createServer } = require('http')

// 事件触发器
const eventEmitter = new EventEmitter();
const app = createServer()

/**
 * Proxy: 数据劫持
 *  - get 当我使用对象，并且访问对象的时候，会走get 方法
 *  - set 当我访问对象，并对 对象里的属性进行赋值的时候或者改变值的时候，会走set方法
 * Reflect: ES6
 *  - 解决性能问题，把 Object 的属性和方法逐渐移植
*/
const data = new Proxy({
    isRunning: false,
    port: 3000
}, {
    get(obj, key) {
        console.log(obj,key, '[data-key]')
        return Reflect.get(obj, key)
    },
    set(obj, key, value) {
        console.log(obj, key, value, '进行了修改')
        const res = Reflect.set(obj, key, value)

        switch(key) {
            case 'isRunning':
                if (value) {
                    eventEmitter.emit('content', obj.port)
                } else {
                    eventEmitter.emit('close', obj.port)
                }

                break;
            default:
                break;
        }

        return res
    }
})

//get
// console.log(data.isRunning, '进行了访问')

// set 
app.listen(data.port, () => data.isRunning = true)

// setTimeout(() => {
//     app.close(() => {
//         console.log(`port 3000 server is closed`)
//     })

// }, 3000)


//  content
// eventEmitter.addListener
// eventEmitter.on

eventEmitter.on('content', (portNum) => {
    console.log(`server is running at port ${portNum}`)
})

eventEmitter.on('close', (portNum) => {
    app.close(() => {
        console.log(`port: ${portNum} is closed`)
    })
})

setTimeout(() => {
    try {
        let a = b + 10
        // try catch 捕获同步程序错误 、 如果说你在promise中见到了 try/catch ，那么这个promise 就是同步的了 =》 await。
    }catch(e) {
        data.isRunning = false
        console.log(e,'[捕获错误]')
    }
}, 2000)