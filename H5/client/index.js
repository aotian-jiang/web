/**
 * obj => string
 * 
 * 
*/
let obj = {
    name: '张三',
    source: 2,
    like: '吃&睡&打游戏&编程'
}

import objectToQueryString from './utils/index'

// import './utils/index'

// console.log(objectToQueryString,'[objectToQueryString]')

function getData(obj) {
    // 1.字符拼接： += 字符拼接 '?id=' + obj.id
    
    
    // 2.模板字符串 `` 模板字符串
    // fetch(`http://localhost:3000?id=${obj.id}&s=${obj.source}`)
    
    
    /**
     *  3. 工具函数 => 工具函数是为了解决数据类型问题，传入参数，或者此函数有默认参数，返回我想要的数据类型及格式。
     *     工具函数一般来说都是纯函数
     *     纯函数：特征就是不被外界所影响的函数，一般来说比如 全局变量。输入结果和输出结果一致
     *     // let a = 1;
            // const computed = {
            //     plus(a, b) {
            //         return a + b;
            //     },
            //     minus(a, b) {
            //         return a - b
            //     }
            // } 
     * */ 

    console.log(objectToQueryString(obj),'拼接后的对象，成了字符串')


    fetch(`http://localhost:3000?${objectToQueryString(obj)}`)
    .then((response) => {
        return response.json()
    })
    .then((res) => {
        console.log(res,'[res]')
    })
    
}


getData(obj)
