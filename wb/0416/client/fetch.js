const btn = document.getElementById('btn');
btn.addEventListener('click', handlerClick, false)

function handlerClick() {
    getData()
}

function getData() {
    fetch('http://localhost:3000?list=1', {
        method: 'post'
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
        if(res.code === '200') {
            console.log(res.data)
        } else {
            console.log(res.msg)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
