const btn = document.getElementById('btn');
btn.addEventListener('click', handlerDownloadClick, false)

/**
 * axios(库) 另外处理 requestType : 'blob'
 * 
 * 
*/
function handlerDownloadClick() {
    fetch('http://localhost:3000')
    .then((response) => {
        /**
         * blob:  二进制容器
         * 0 | 1: 二进制
         * new 
         * 
        */
        // res.json
        console.log(response,'[response]')
        return response.blob()
    })
    .then((res) => {
        console.log(res,'[res]')
        // res 得到的式一个二进制
        /**
         * 1. 返回一个浏览器可识别的数据用 new Blob 这个二进制容器
         *  1.1 Blob 浏览器中的二进制对象，可以理解为一个盒子
         *  1.2 把二进制数据装入到这个盒子中，变成浏览器认识的（可以处理的）文件。
         *  1.3 文件有很多类型：图片、pdf、excel、音频、视频
         * 2. 把服务返回的二进制数据，变为浏览器的一个临时的文件地址。
         * 3. 通过a标签下载文件
         * 4. 清除a标签及缓存再浏览器中的临时文件地址
         * 
        */
        // if(res.code === '200'){}
        const b   = new Blob([res])
        const url = URL.createObjectURL(b)

        // a标签具备地址指向性 url
        const a = document.createElement('a');
              a.href = url;
              a.download = 'logo1.png';
              document.body.appendChild(a);
              a.click(); // 事件触发


              document.body.removeChild(a)
              URL.revokeObjectURL(url);

    })
}