// import { Http } from './libs/Http';

// const h = new Http()
// h.axiosGet('/home/list', {
//     pageNumber: 1,
//     pageSize: 20
// }).then((res) => {
//     console.log(res,'[res]')
// })


import {
    HomeModel
} from './models/Home'
 
const homeModel = new HomeModel()

// console.log(homeModel.hasOwnProperty,'[homeModel.hasOwnProperty]')

/**
 * 原型和原型链
*/

/*
    构造函数
*/
// function Home() {
//     this.name = 'zhang'
// }

// Home.prototype.say = function () {
//     console.log(this.name)
// }

// const home = new Home();
// home.say()


// class Home1 {
//     constructor() {
//         this.name = 'zhang1'
//     }

//     say (){
//         console.log(this.name)
//     }
// }


// const home1 = new Home1();
// home1.say()

// 最顶端是null
// Object.prototype.aabbcc = function () {}
// let obj1 = {
//     name: '12111'
// }
// console.log(obj1,'[obj1]')

/**
 *  原型：  原型是一种在开发生命周期的早期显示 应用程序或产品的外观和行为的模型
 *  原型链：每个对象都有一个链条链接到另外一个 称作为 原型对象的 内部的链上。
 *  
 * 
*/

const homeMode = new HomeModel();

homeMode.getHomeBanner({pageNumber:1, pageSize: 20})
.then((res) => {
    console.log(res,'[res-home-banner]')
})
.catch((err) => {
    
});