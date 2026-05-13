const express = require('express')
const app = express()
const router = express.Router()
app.use(express.json())
const port = 3000
app.use('/abb',router)
router.get('/',(request,response)=>{
    response.send('get /abb')
})
router.post('/',(request,response)=>{
    response.send('post /abb')
})
router.put('/',(request,response)=>{
    response.send('put /abb')
})
router.delete('/',(request,response)=>{
    response.send('delete /abb')
})

app.listen(port,()=>{
    console.log('服务器3000启动');
})