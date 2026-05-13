/*
    数据模型
    模型： 飞机 => 飞机模型

    数据模型： 
     1. 一定的规则进行输入
        按照一定的规则进行输出
     2. 可以在输入和输出时进行数据处理

     3. 抽象

    通过一个模型达到了我想要的效果，http请求
    MVC | MVVM 设计模式

    1. 代码的23种设计模式
*/

/*
    1. 通过函数传递
    2. 最后一个函数进行公共的部分进行编写，这个编写的过程及结果就是封装的过程和封装结果
    3. 切记不要过度的进行封装，同过这个规则，不能很便利的进行传参
        3.1. 如果说我不在使用端，进行get和post的处理，那么我将会把逻辑堆叠到这个请求模型中
            - 导致使用者传入的配置项增多, 判断越来越多。
            - 使用语义化要好
            * 减少使用用户的心智负担
*/
const BASE_URL = 'http://localhost:3000';

function fetchData(url, options = {}) {

    return fetch(`${BASE_URL}${url}`, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(response, '在这里处理错误的响应')
                /**
                 * 公共处理
                 * 一般来说会有一个错误对照表，
                 * 表中有对code的友好语义化的提示
                 * */

                /**
                 * 自定义处理
                 *  
                */
                return Promise.reject('接口请求错误')
            }
        })
}


export default function request() {
    return {
        /*
            url => 路由
        */

        /*
            类型
                - post
                - get
            请求地址
                - 域名 | ip + 端口号
                - 路由
                - 参数
            响应
                - 是否成功
            
        */
        get(url) {
            // www.localhost:3000/home/banner?list=1
            return fetch(BASE_URL + url + '?list=1')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject('err')
                }
            })

            // return fetchData(url)
        },
        post(url, bodyData) {

            /**
             * , {
                method: 'POST',
                headers: {
                    'type': 'json'
                },
                body: JSON.stringify(bodyData)
            }
             * 
             * */ 
            return fetch(BASE_URL + url)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject('err')
                }
            })


            return fetchData(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })

            //______________
            return fetch(BASE_URL + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log(response, '在这里处理错误的响应')
                        return Promise.reject('接口请求错误')
                    }
                })
        }
    }
};

// class Request {
//     get () {

//     }

//     post() {

//     }
// }


