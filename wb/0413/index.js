async function test1 () {
    console.log('第一步')
    // await fetchData()
    fetchData()
    console.log('第二步')
}

const  fetchData = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log('等着我执行完了，后面的再执行')
            reslove();
        }, 2000)
    })
}

test1 () 