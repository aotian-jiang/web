const oBtn = document.getElementById('btn')
// console.log(oBtn,'[oBtn]')
oBtn.addEventListener('click', handlerBtnClick, false)

function handlerBtnClick() {
    // console.log('qingqiul')
    fetch('http://localhost:3000', {
        method: 'GET'
    })
    .then((response) => {
        console.log(response)
        if (!response.ok) {
            throw new Error('错误了')
        }
        return response.json()
    }).then((res) => {
        console.log(res,'resSHUJU')
    }).catch((err) => {
        console.log(err,'err')
    })
}