const express = require('express');
/*
    1. express.Router() 创建路由的实例
    2. router 实例其实就是相当于 mini Express 实例
*/

const router = express.Router();

router.get('/:id', (request, response) => {
    console.log(request.params.id,'[get-todos-id]')
  response.send(`get /todos`)
})

router.post('/add', (request, response) => {
  response.send(`post /todos`)
})

router.put('/', (request, response) => {
  response.send(`put /todos`)
})

router.delete('/', (request, response) => {
  response.send(`delete /todos`)
})

module.exports = router;