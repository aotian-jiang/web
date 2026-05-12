const {
    createReadStream,
    createWriteStream
} = require('fs')

const rd = createReadStream('data.json')
rd.setEncoding('utf8')
const rSet = createWriteStream('data1.json');

let data = ''

rd.on('data', (chunk) => {
    data += chunk;
    rSet.write(chunk)
})


rd.on('end', () => {
    console.log('读完了')
    rSet.end()
})