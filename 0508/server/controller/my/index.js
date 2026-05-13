const {
    createReadStream
} = require('fs')

const {
    resolve
} = require('path')

function getUserBill(req, res){
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        const bodyData = JSON.parse(body || '{}');
        console.log(bodyData,'[body]')
    })
    const excelData = createReadStream(resolve(__dirname, '../../data/my/bill.xlsx'))
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment;filename=bill.xlsx'
    });
    excelData.pipe(res)
    excelData.on('error', (err) => {
        console.log(err,'[err]')
    })

    excelData.on('end', () => {
        console.log('读取完成')
        res.end()
    })
};

module.exports = {
    getUserBill
}