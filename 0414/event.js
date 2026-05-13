const { EventEmitter } = require('events');

// 事件触发器
const eventEmitter = new EventEmitter();

eventEmitter.on('abc', () => {
    console.log('123')
})

// eventEmitter.addListener('abc', () => {
//     console.log('123')
// })

eventEmitter.emit('abc')






