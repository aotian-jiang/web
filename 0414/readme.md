### 链式调用
* 优雅地处理一系列的组合函数

```js
// class 类

let 奶茶店 = new 蜜雪冰城();

let 下单结果 = 奶茶店.下单('珍珠奶茶')
let 制作结果 = 下单结果.制作()
let 打包结果 = 制作结果.打包()
let 喝到奶茶 = 打包结果.给我()

// 像流水线一样，一步接一步
let 喝到奶茶 = new 蜜雪冰城() // 返回对象
    .下单('珍珠奶茶')
    .制作()
    .打包()
    .给我()

```
```js
let computed = {
    数字：0， // 属性
    // 方法
    加一（） {
        this.数字 ++;
        return this; // 对象本身
    }，

    加二（）{
        this.数字 += 2;
        return this; // 对象本身
    },

    显示（）{
        console.log(this.数字)
        return this; // 对象本身
    }
}

```
### Promise
```js
// Promise 为了解决回调地狱
// 形成金字塔结构特征
// 传统的回调：回调地狱
// 1. 难以阅读和维护
// 2. 错误处理很麻烦
读文件('a.text', (err, data) => {
    console.log('读到了内容a.text')
    读文件('b.text', (err, data) => {
        console.log('读到了内容b.text')
        读文件('c.text', (err, data) => {
            console.log('读到了内容c.text')   
        })
    })
})

Promise => 就是承诺 =》 未来时态 =》 1.等待 pending 2.成功 fulfilled 3.失败  rejected

/**
 * 1. Promise => 社区规范 Promise A+ 规范 
 * 2. ES6 => Promise : 民间变官方
 * 
*/
let 淘宝订单 = new Promise(function(发货成功，发货失败){
    let 有货 = true

    if (有货) {
        发货成功('一台电脑')
    } else {
        发货失败('一台电脑购买失败，因为没货了')
    }
})
淘宝订单
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})


```

- Promise
- then 方法 ： resolve方法的回调
- catch 方法： reject 方法回调

* 如果then执行后，如果还有报错信息，那么就走下面的 catch方法
* 如果 catch 方法报错，将继续走 catch，直到你运行正常才会走then


### 事件驱动
- 作为异步事件驱动的JavaScript的库
- 