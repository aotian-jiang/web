const {
    createReadStream,
    createWriteStream
} = require('fs')

// const rs = createWriteStream('1.text')
const rs = createWriteStream('data1.json')

// 数组对象 => 转换为字符串
// 比如要转换为字符串
// JSON.stringify => 字符串 
// 字符串 => JSON.parse('[{id: '1'}]') => [{}]
rs.write(JSON.stringify([{id: '1'}]), 'utf8')
rs.end();