const express = require('express');
const {
  readDb,
  saveDb
} = require('./db')

/*
    1. express.Router() 创建路由的实例
    2. router 实例其实就是相当于 mini Express 实例
*/

const router = express.Router();

// 获取所有的todos列表
router.get('/', async (request, response, next) => {
  try {
    // console.log(request.foo,'[foo]')
    const data = await readDb();
    response.status(200).send({
      code: 200,
      data: data.todos,
      msg: '请求接口成功'
    })
  } catch (err) {
    // response.status(401).send({
    //   code: 401,
    //   data: null,
    //   msg: err.message
    // })

    next(err)
  }
})

// 通过id来获取某一个todos
router.get('/:id', async (request, response) => {
  try {
    const data = await readDb();
    const id = Number(request.params.id);

    const todo = data.todos.find(todo => todo.id === id)

    // 判断没有todo的情况
    if (!todo) {
      response.status(404).send({
        code: 404,
        data: null,
        msg: '暂无此数据'
      })
    }

    response.status(200).send({
      code: 200,
      data: todo,
      msg: '请求接口成功'
    })
  } catch (err) {
    // response.status(401).send({
    //   code: 401,
    //   data: null,
    //   msg: err.message
    // })
    next(err)
  }
})

// 新增todo
router.post('/', async (request, response) => {

  try {
    // 获取 title
    const { title } = request.body;

    // 判断title 是否存在
    if (!title) {
      response.status(402).send({
        code: 402,
        data: null,
        msg: 'title 是必须传的参数'
      })
    }

    // 读取data db 数据
    const data = await readDb();

    // 真实的开发中不能这么定义新的id
    const lastId = data.todos[data.todos.length - 1];

    // 定义新的todo 对象
    let todo = {
      id: lastId ? Number(lastId.id) + 1 : 1,
      title: title
    };

    // 把数据放入到todos中
    data.todos.push(todo);

    // 写入真实的数据到指定位置
    await saveDb(data)

    response.status(200).send({
      code: 200,
      data: data.todos,
      msg: '接口请求成功'
    })
  } catch (err) {
    // response.status(401).send({
    //   code: 401,
    //   data: null,
    //   msg: err.message
    // })
  
    next(err)
  }

})


/*
  编辑/更新 todo
  1. 传递参数中是根据 id 来进行判断是否有此todo
  2. 在传递参数中，是否要判断title 和之前的值是否相同或者说这个title 是否有值，这个取决于你当前的业务逻辑和业务场景。
*/
router.put('/', async (request, response) => {
  try {
    const newTodo = request.body;

    if (!newTodo.id) {
      response.status(402).send({
        code: 402,
        data: null,
        msg: 'id 是必须传的参数'
      })
    }


    // 读取data db 数据
    const data = await readDb();
    const todo = data.todos.find(todo => todo.id === Number(newTodo.id))

    if (!todo) {
      response.status(402).send({
        code: 402,
        data: null,
        msg: '根据id未找到此todo项，请传递正确的id。'
      })
    }

    // 采用  Object.assign 进行对象合并操作， 浅拷贝，所以就修改了原先的数组
    Object.assign(todo, newTodo)

    // 写入真实的数据到指定位置
    await saveDb(data)

    response.status(200).send({
      code: 200,
      data: todo,
      msg: '接口请求成功'
    })

  } catch (err) {
    // console.log(err.message,'[message]')
    // response.status(401).send({
    //   code: 401,
    //   data: null,
    //   msg: err.message
    // })
    next(err)
  }
})

// 删除
router.delete('/:id', async (request, response) => {

  try {
    const todoId = request.params.id;

    if (!todoId) {
      response.status(402).send({
        code: 402,
        data: null,
        msg: 'id 是必须传的参数'
      })
    }

    // 读取data db 数据
    const data = await readDb();
    const todoIdx = data.todos.findIndex(todo => todo.id === Number(todoId))

    if (todoIdx === -1) {
      response.status(402).send({
        code: 402,
        data: null,
        msg: '根据id未找到此todo项，请传递正确的id。'
      })
    }

    // 删除对应的todo
    data.todos.splice(todoIdx, 1)
    
    // 写入真实的数据到指定位置
    await saveDb(data)
    response.status(200).send({
        code: 200,
        data: null,
        msg: `接口请求成功，已经删除id为 ${todoId} 项的todo`
      })

  } catch(err) {
    // response.status(401).send({
    //   code: 401,
    //   data: null,
    //   msg: err.message
    // })
    next(err)
  }
  
})

module.exports = router;