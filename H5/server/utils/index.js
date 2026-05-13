function formatQuery(query) {

    // split分割字符串 
    // id=1&src=2&name=zhang => [ 'id=1', 'src=2', 'name=zhang' ]
    const urlParse = query.split('&')
    // [ 'id=1', 'src=2', 'name=zhang' ] => {id: 1, src: 2, name: zhang}

    // reduce 第一参数是一个回调函数
    // reduce 第二参数是 第一个一个回调函数的第一个参数, 是你想要得到的初始化

    return urlParse.reduce((obj, item) => {
        console.log(obj, item, 'reduce')
        const [key, value] = item.split('=') 
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
        return obj
    },{})
    console.log(urlParse,'[urlParse]')
};

module.exports = {
    formatQuery
}