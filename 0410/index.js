

class student {
    constructor(name,age,ban){
        this.name=name
        this.age=age
        this.ban=ban
    }
    sayHi(){
        return `你好，我是${this.ban}的${this.name},我今年${this.age}`
        // 返回
    }
    static study(name,age,ban){
        return `你好，我是${ban}班的${name},我今年${age}`
        // 返回
    }
    // 静态
}
let  a = new student('黎明','77','22')
// 实例化
let  ab = new student('刘德华','88','25')
// 实例化
console.log(student.study('黎明','77','22'));
// 静态调用