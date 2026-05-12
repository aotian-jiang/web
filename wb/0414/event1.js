const { EventEmitter } = require('events');
const { createServer } = require('http')

// 事件触发器
const eventEmitter = new EventEmitter();
const app = createServer()

app.listen(3000, () => {
    console.log(`server is running at port 3000`)
})

setTimeout(() => {
    app.close(() => {
        console.log(`port 3000 server is closed`)
    })
}, 3000)
