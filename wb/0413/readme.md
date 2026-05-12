#### Nodejs
- 作为一个异步事件驱动的 JavaScript 运行库
- JavaScript 运行库: node 是V8引擎
- 异步 1. 异步 2.同步 3.阻塞 4.非阻塞
- 这与当今更常见的使用操作系统线程并发模型形成对比。基于线程的网络编程效率相对低效，而且非常难以使用。此外，Node.js 的用户不必担心死锁进程，因为没有锁。Node.js 几乎没有任何函数直接执行 I/O 操作，除非使用 Node.js 标准库的同步方法执行 I/O，否则进程永远不会阻塞。由于没有任何阻塞，因此在 Node.js 中开发可扩展的系统非常合理。

1. 线程
2. 锁
3. I/O input / output i/o => node的系统能力 + 接口请求


1. 同步
```js
// 当作一个任务时，这个任务没有做完。下一个任务不能开始
console.log('执行第一步')
console.log('执行第二步')
console.log('执行第三步')
```
2. 异步 
```JS
// 当有一个任务要做的时候，当前流程不用一直等，可以继续往下走
// setTimeout 里面的任务不会立即执行，但是代码没有停下来等待1s的函数回调执行，而是继续执行了下面的代码。
console.log('点外卖了')
console.log('外卖制作的过程')
/**
 * setTimeout - 宏任务
 * 第一参数是 cb 第二个参数 时间 ms
*/
setTimeout(() => {
    console.log('拿到外卖')
}, 1000)
console.log('我在玩手机')

- 点外卖了
- 外卖制作的过程
- 我在玩手机
- 拿到外卖

```

3. 阻塞

``` js
/**
 * 阻塞强调的是当前的这一步，把后面的流程卡住了
 * 比如：一条路堵死了后面的车就过不去了
 * 代码理解：如果一段代码执行了很久，后面的代码等着它执行完，那它就是阻塞的了
 * 
 * */ 

async function test1 () {
    console.log('第一步')
    await fetchData()
    console.log('第二步')
}
```

4. 非阻塞
```js
/**
 * 当前任务不会把后面的流程彻底卡住
 * async function test1 () {
    console.log('第一步')
    // await fetchData()
    fetchData()
    console.log('第二步')
}
 * 
*/


```
* 1. 为什么NodeJS 在讲 异步非阻塞
- 因为NodeJS 会读写文件
- 接收、响应请求 （连接数据库、返回数据）
* 等待的时候，不能傻等，先去做别的事情。



- 事件驱动