/**
 * post
 * 
*/
const btn = document.getElementById('btn');
btn.addEventListener('click', handlerClick, false)


/**
 * get
 * 
*/
const btnGetBanner = document.getElementById('btn-get-banner');
btnGetBanner.addEventListener('click', handlerGetBannerClick, false)

function handlerGetBannerClick() {
    fetch('http://localhost:3000/home/banner')
    .then((response) => {
        if (!response.ok) {
            throw new Error('接口请求错误')
        }
        return response.json()
    })
    .then((res) => {
        if(res.code === 200) {
            console.log(res.data,'正常返回')
        } else {
            console.log(res.msg, '错误的提示')
        }
    })
    .catch((err) => {
        console.log(err, '接口请求错误')
    })
}

/**
 * ______________________________________________
 * 
*/

const btnGetList = document.getElementById('btn-get-list');
btnGetList.addEventListener('click', handlerGetListClick, false)

function handlerGetListClick() {
    fetch('http://localhost:3000/home/list?pageNumber=2&pageSize=20')
    .then((response) => {
        if (!response.ok) {
            throw new Error('接口请求错误')
        }
        return response.json()
    })
    .then((res) => {
        if(res.code === 200) {
            console.log(res.data,'正常返回')
        } else {
            console.log(res.msg, '错误的提示')
        }
    })
    .catch((err) => {
        console.log(err, '接口请求错误')
    })
}





function handlerClick() {
    getData()
}

function getData() {
    // 第一个参数是url ，第二个参数是配置项
    fetch('http://localhost:3000/list', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pageNumber: 1,
            pageSize: 20
        })
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('接口请求错误')
        }
        // console.log(response,'[response]')
        return response.json()
    })
    .then((res) => {
        // console.log(res,']res[')
        // console.log(res.code)
        // if (res.code1 === '200') {
        //     console.log(res.data)
        // } else if (res.code2 === '400'){
        //     // 后台服务报错
           
        // } else if (res.code3 === '404') {
        //     // 没有接口地址
        // } else {
        //     console.log(res.message)
        // }   
        console.log(res,'[res]')
        if(res.code === 200) {
            console.log(res.data)
        } else {
            console.log(res.msg)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
