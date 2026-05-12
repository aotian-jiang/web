const {
    createReadStream
} = require('fs')

const res = createReadStream('./data.json')
res.setEncoding('utf8');


let data = '';

res.on('data', (chunk) => {
    console.log(chunk,'chunk')
    data += chunk
})


res.on('end',()=> {
    console.log(data,'END')
})