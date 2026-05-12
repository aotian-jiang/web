const {
    createReadStream,
    createWriteStream
} = require('fs')

const rs = createReadStream('logo1.png');
const ws = createWriteStream('logo2.png');

// rs.on('data', (chunk) => {})

// 管道 复制了一份数据
// 省略了 rs的on `data` 方法
rs.pipe(ws)