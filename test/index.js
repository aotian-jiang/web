/**
 * 1.拆分函数和目录的目的是维护代码
 * 
 * server/ index      => 服务的入口 => 校长
 * server/ routes     => 路由分发   => 教导主任
 * server/ controller => 数据返回   => 老师
 * 
 * 2.解决代码冲突
 * 
 * 3.分工
 * 
 * 综上所述： 代码拆分的目的就是为了解决会出现的问题
 *  
*/


/**
 * 1. 当你启动项目之后
 * 2. 第一个你要判断的是：请求类型（现在只有两种）， 你要处理请求类型的分发 （GET | POST）
 * 3. 第二个你要判断的是：接口地址（home/news）有万万千个接口地址
 * 4. 
 * 
*/

/**
 * 1. 声明类型 + 值相同 才会走 case
 * 2. 如果 声明类型不同 或者 值不相同 就会走 default
 * 
*/
// let a = '2'

// switch(a) {
//     case 1:
//         console.log('a 是 1')
//         break;
//     case "2":
//         console.log('a 是 2')
//         break;
//     default:
//         console.log('a 是 其他值')
//         break;
// }


// if (a === 1) {
//     console.log('a 是 1')
// } else if (a === '2') {
//     console.log('a 是 2')
// } else {
//     console.log('a 是 其他值')
// }

let b = '/home/news1';
let obj = {
    a: '1',
    '/home/news': function() {
        console.log('这个是 callMe 的函数') // 执行了这个函数里的逻辑
        return {
            code: 200,
            msg: '接口请求成功',
            data: ['1']
        }
    }
}


// obj.a; => 1
// obj.callMe;
console.log(obj['a'])