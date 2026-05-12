// 链式调用：就像链子一样一环扣一环
let computed = {
    num: 0,
    plus1() {
        this.num ++;
        return this;
    },
    plus2() {
        this.num += 2;
        return this;
    },
    showNum() {
        console.log(this.num)
        return this;
    }
}

// plus1()：  this 返回的 => computed
// plus2():   this 返回的 => computed
// showNum(): this 返回的 => computed
computed.plus1().plus2().showNum();

/**
 * 
 * <div id="myDiv"></div>
 * // $('#myDiv') dom 对象
 * // 写的优雅
 * $('#myDiv').css('color', 'red').addClass('heightLight')
 * 
 * 
*/

// 成功 =》resolve
// 失败 =》 reject
// 商家在操作
let p = new Promise(function(resolve, reject){
    if(true) {
        resolve('你买的电脑有货，给你发货了')
    } else {
        reject('你买的电脑没有有货，把钱退给你')
    }
})
console.log(p)

p
.then((res1) => {
     // 代购成功信息
    console.log('我是代购，我知道当前的货物信息' + res1)
    return Promise.reject('我是黑代购，把你的钱私吞了')
})
.catch((err) => {
    // 代购报错信息
    console.log(err)
    return Promise.reject('我是黑代购，把你的钱私吞了')
})
.then((res) => {
    // 我本人 - 成功
    console.log('我本人 成功' + res)
})
.catch((err) => {
    // 我本人 - 报错
    console.log('我本人 报错' + err)
    return '1'
})
.then((res) => {
    console.log('终于正常了')
})
.then((res2) => {

})
.then((res3) => {
    
})