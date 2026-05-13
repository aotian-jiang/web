// 引入插件
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
BScroll.use(Pullup);

import './list.css';

/*
        list
    */


function MyList(list = [], hasMore = false) {
    return `
            <section class="my-list" id="J_list">
                <div>
                    <div id="J_list_content">
                        ${renderListItem(list)}
                    </div>
                    <p id="J_list_tips" class="list-tips">
                        ${hasMore ? '上拉加载更多' : '已经到底啦~'}
                    </p>
                </div>
            </section>
        `;
}

function renderListItem(list) {
    // 判断是否有list数据
    if (!list.length) {
        return `<div style="text-align:center;font-size: 0.14rem; ">暂无列表数据</div>`
    };
    // 循环list列表
    return list.map((item) => {
        return `<article class="news-card" data-id="${item.pid}">
                        <h3 class="my-list-title">${item.t}</h3>
                    </article>`
    }).join('');
}


MyList.init = function (callback) {
    let bs = new BScroll('#J_list', {
        scrollY: true, // 允许纵向滚动
        click: true,  // 是否可以点击
        probeType: 3, // 滑动精准度
        pullUpLoad: true // 上拉
    });
    // 监听 pullingUp
    bs.on('pullingUp', () => {
        callback() // 获取更多的数据
        bs.finishPullUp() // 完成了获取更多的数据操作
        bs.refresh(); // 结束这次的滑动事件并告知
    })
};

export {
    MyList,
    renderListItem
};