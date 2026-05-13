/**
 * 首页新闻列表
 * 军事、财经、时政
*/

function getHomeNewsList(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })

    res.write(JSON.stringify({
        code: 200,
        msg: '请求成功',
        data: [{id: '1', title: '出大事了'}]
    }))

    res.end();
};


module.exports = getHomeNewsList;

