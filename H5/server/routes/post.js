function handlerPost ( req , res ) {
    let body = ''
    req.on('data',(chunk)=>{
        chunk+=body
    })
    req.on('end',()=>{
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.end(JSON.stringify({
            code:200,
            mag:'请求成功',
            data: [{id:1}]
        }))
    })
}

module.exports = handlerPost;