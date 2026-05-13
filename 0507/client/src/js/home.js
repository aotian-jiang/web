import '@/assets/styles/reset.css'
import '@/pages/style/home.css';

import { HomeModel } from '@/models/Home.js';

;((doc) => {
    const oApp = doc.getElementById('app');
    const homeModel = new HomeModel();
    console.log(homeModel,'[homeModel]')

    /**
     * 模拟 doc元素需要的数据 => mock数据
     * 
    */
    const pageData = {
        loading: false,
        error: false,
        header: {
            title: '22班DEMO项目'
        },
        banner: {
            id: '1',
            title: '家电',
            subtitle: '618大促'
        },
        list: [
            {
                id: '1',
                title: '电视机',
                des: '液晶彩色电视机'
            },
            {
                id: '2',
                title: '空调',
                des: '一晚只用一度电'
            },
            {
                id: '3',
                title: '手机',
                des: '充电5分钟，通话两小时。'
            }
        ]
    };

    /*
        轮播图
    */
    function HomeBanner(banner = {}) {
        return `
            <section class="home-banner">
                <h3 class="home-banner-title">${banner.des}<h3>
            </section>
        `;
    }

    /*
        list
    */
    function newsList(list = []) {
        return `
            <section class="home-list">
                ${list.map((item) => {
            return `<article class="news-card" data-id="${item.id}">
                        <h3 class="home-list-title">${item.t}</h3>
                    </article>`
        }).join('')}
            </section>
        `;
    }

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
            ${HomeBanner(pageData.banner)}
            ${newsList(pageData.list)}
        </div>
    `;
    };

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
        获取首页的数据
    */
    async function getPageData () {
        const bannerData = await homeModel.getHomeBanner();
        const listData = await homeModel.getHomeList({pageNumber:1, pageSize: 10});

        if (bannerData.code === 200) {
            pageData.banner = bannerData.data[0];
        };

        if (listData.code === 200) {
            pageData.list = listData.data;
        };
    }

    /*
        loading => 加载中 => 让用户感知你在给他干活
    */
    function renderLoading() {
        
        oApp.innerHTML = `
            <div class="page-status">加载中</div>
        `;
    }

    /**
     * 初始化函数
     * 
    */
    async function init() {
        renderLoading();

        await getPageData()
        renderPageDom();
        bindEvent();
    };
    
    init();
    

})(document);