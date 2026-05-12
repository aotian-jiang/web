/**
 * try catch 同步程序如果报错，就不会影响下面的代码执行
 * 
 * 
*/
try {
    // try => 尝试
    let a = 10;
    let b = 20;
    console.log(a, b)
    let c = a + b + e;
    console.log(c)
} catch(err) {
    console.log(err,'[---err]')
}
console.log('++++++++')