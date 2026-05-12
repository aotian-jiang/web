
function fetchData() {
    // fetch('xxx').then().then()

    // 模拟了一个接口请求
    // new => 已经实例化了
    // return new Promise((resolve, reject) => {
    //     let status = true
    //     setTimeout(() => {
    //         if (status) {
    //             resolve([{id: '1', name: '电视剧'}])
    //         } else {
    //             reject()
    //         }    
    //     }, 3000)
    // })
}

fetchData()
.then((res) => {
    console.log(res, '成功的回调')
})
.catch((err) => {
    console.log('错误的回调')
})
