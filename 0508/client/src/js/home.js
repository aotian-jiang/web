import '@/assets/js/common.js';
import '@/assets/styles/reset.css';
import '@/pages/style/home.css';

// 引入组件
import renderLoading from '@/components/Loading.js';
import renderError from '@/components/Error.js';
import MySwiper from '@/components/Banner/index.js';

// 引入Ajax请求
import { HomeModel } from '@/models/Home.js';

// 引入插件
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
BScroll.use(Pullup);


;((doc) => {
    const oApp = doc.getElementById('app');
    const homeModel = new HomeModel();
    console.log(homeModel,'[homeModel]')

    /**
     * 模拟 doc元素需要的数据 => mock数据
     * page status => 来做判断，当前页面显示的状态 loading | error | success 
     * 
    */
    const pageData = {
        loading: false,
        error: false,
        header: {
            title: '22班DEMO项目'
        },
        banner: [],
        pageNumber: 1,
        pageSize: 10,
        list: [],
        loadMore: false,
        total: 0
    };

    /*
        list
    */
    function newsList(list = []) {
        return `
            <section class="home-list" id="J_list">
                <div>
                    ${list.length > 0 && list.map((item) => {
            return `<article class="news-card" data-id="${item.id}">
                        <h3 class="home-list-title">${item.t}</h3>
                    </article>`
        }).join('') || `<div style="text-align:center;">暂无list数据</div>`}
                </div>
            </section>
        `;
    }

    newsList.init = function(callback) {
        let bs = new BScroll('#J_list', {
            scrollY: true, // 允许纵向滚动
            click: true,  // 是否可以点击
            probeType: 3, // 滑动精准度
            pullUpLoad: true // 上拉
        });

        bs.on('pullingUp', () => {
            callback() // 获取更多的数据
            bs.finishPullUp() // 完成了获取更多的数据操作
            bs.refresh(); // 结束这次的滑动事件并告知
        })
    };

    /**
     * 渲染dom元素
     * 
    */
    function renderPageDom() {
        oApp.innerHTML = `
            <div class="page-home">
                <header class="home-header">
                    <h3>${pageData.header.title}</h3>
                </header>
                ${MySwiper(pageData.banner)}
                ${newsList(pageData.list)}
            </div>
        `;

        MySwiper.init()
        newsList.init(loadMore)
    };

    async function loadMore() {
        console.log('读取更多')
        if (pageData.loadMore) return;

        pageData.loadMore = true;

        try {
            pageData.pageNumber += 1;
            const listData = await homeModel.getHomeList({pageNumber: pageData.pageNumber, pageSize: pageData.pageSize});
            console.log(listData,'[listData=第二页]')
        } catch(err) {

        }
    }

    /*
        绑定事件
    */
    function bindEvent() {
        doc.addEventListener('click', (event) => {
            try {
                // event 事件源
                // console.log(event.target,'[target]')
                // closest 接近靠近
                const newsCard = event.target.closest('.news-card')
                // console.log(newsCard,'[newsCard]')
                // data-id 
                // getAttribute 
                const id = newsCard.getAttribute('data-id');

                console.log(id, '[id]')
            } catch (err) {
                console.log(err && err.message)
            }
        });
    };

    /*
        页面渲染函数
    */
    function renderPageStatus() {
        if (pageData.loading) {
            return renderLoading({oApp: oApp})
        }
        console.log(pageData.error,'[pageData.error]')
        if (pageData.error) {
            return renderError({oApp: oApp})
        }

        renderPageDom();
        bindEvent();
    }


    /*
        获取首页的数据
    */
    async function getPageData () {
        pageData.loading = true;
        pageData.error = false;

        renderPageStatus();

        try {
            const bannerData = await homeModel.getHomeBanner();
            const listData = await homeModel.getHomeList({pageNumber: pageData.pageNumber, pageSize: pageData.pageSize});

            if (bannerData.code === 200) {
                pageData.banner = bannerData.data;
                pageData.loading = false;
                pageData.error = false;
            } else {
                console.log('1')
                pageData.loading = false;
                pageData.error = true;
            };;

            if (listData.code === 200) {
                pageData.list = listData.data;
                pageData.loading = false;
                pageData.error = false;
            } else {
                console.log('2')
                pageData.loading = false;
                pageData.error = true;
            };
            
            
            renderPageStatus();
        }catch(err) {
            console.log(err,'[err]')
            pageData.loading = false;
            pageData.error = true;
            renderPageStatus();
        }
    }

    /**
     * 初始化函数
     * 
    */
    async function init() {
        // renderLoading();
        await getPageData()
        // renderPageDom();
        // bindEvent();
    };
    
    init();
    

})(document);