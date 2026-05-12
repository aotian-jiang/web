/**
 * 入口文件
 * - 全局资源引入
 * - npm
 * - reset 样式重置css (Normalize.css库) | 自己自定义 | 社区的
 * - 公共样式css
 * - 等
*/

// 引入jq，保障全局使用
// import Jquery from 'jquery'
// window.Jquery = Jquery;


// Promise AJAX
//import Axion from 'axios'
// 引入全局重置css
//import './reset.css'

/**
 * 自执行函数
 * - 独立作用域， 变量不被污染
 * - 可配置化，window => 全局对象：操作较底层的东西，从而性能更好一些 "use strict"; 严格模式 => 变量提升问题
 * 
 * typeof window !== "undefined" ? window : this
 * 1. typeof 检测数据类型
 * 2. window 全局对象（浏览器下的全局对象）
 * 3. 三元表达式 =》true ？ true ：'自定义'
 * 4. this => 谁调用我，指向谁
 * 
 * */ 
;((doc) => {
    /**
     * es6 箭头函数
     * 
    */
    const init = () => {
        /**
         * DOM: o =>  object , DOM是一个对象
         * addEventListener('事件： 点击事件'， 回调函数， 防止冒泡)
         * 
         * 
        */
        const oBtton = doc.getElementById('btn')
        oBtton.addEventListener('click', handlerClick, false);
      
        function handlerClick() {
            // XMLHttpRequset => fetch
            // 接口地址： http://localhost:3000
            fetch('http://localhost:3000')
            .then((response) => {
                // response.ok => boolean => true | false
                if (!response.ok) {
                    throw new Error('接口请求错误')
                }
                return response.json();
            })
            .then((res) => {
                console.log(res,'[res]')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    init() 


})(document)


/**
 * 全栈程序员
 * - client => 前端程序员
 * - server + sqlData => 后端程序员
 * 
 * 
*/

// (function(global, factory){
//     // global 我要挂载到哪里. global =  window
//     // 

//     global.factory = factory;

// }( typeof window !== "undefined" ? window : this, function(){}))