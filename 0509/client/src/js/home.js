// 引入公共js | css
import '@/assets/js/common.js';
import '@/assets/styles/reset.css';
import '@/pages/style/home.css';

// 引入组件
import renderLoading from '@/components/Loading.js';
import renderError from '@/components/Error.js';
import MySwiper from '@/components/Banner/index.js';
import {
    MyList,
    renderListItem
} from '@/components/List/index.js';

// 引入Ajax请求
import { HomeModel } from '@/models/Home.js';


; ((doc) => {
    const oApp = doc.getElementById('app');
    const homeModel = new HomeModel();
    const pageData = {
        loading: false,
        error: false,

        header: {
            title: '22班DEMO项目'
        },
        banner: [],

        loadMoreStaus: false,
        hasMore: false,
        pageNumber: 1,
        pageSize: 10,
        list: [],
        total: 0,
    };

    /*
        页面渲染函数
    */
    function renderPageStatus() {
        if (pageData.loading) {
            return renderLoading({ oApp: oApp })
        }
        console.log(pageData.error, '[pageData.error]')
        if (pageData.error) {
            return renderError({ oApp: oApp })
        }

        renderPageDom();
        bindEvent();
    }

    /*
        渲染dom元素 
    */
    function renderPageDom() {
        oApp.innerHTML = `
            <div class="page-home">
                <header class="home-header">
                    <h3>${pageData.header.title}</h3>
                </header>
                ${MySwiper(pageData.banner)}
                ${MyList(pageData.list, pageData.hasMore)}
            </div>
        `;

        MySwiper.init()
        MyList.init(loadMore)
    };

    /*
        读取更多
    */
    async function loadMore() {
        if (pageData.loadMoreStaus || !pageData.hasMore) return;
        pageData.loadMoreStaus = true;

        try {
            pageData.pageNumber += 1;
            const listData = await homeModel.getHomeList({ pageNumber: pageData.pageNumber, pageSize: pageData.pageSize });

            if (listData.code === 200) {
                const oListItem = doc.getElementById('J_list_content')
                const oListTips = doc.getElementById('J_list_tips');

                pageData.list.push(...listData.data.list)

                checkHasMoreStatus()

                if (oListItem) {
                    oListItem.innerHTML = renderListItem(pageData.list)
                };

                if (oListTips) {
                    oListTips.innerHTML = pageData.hasMore ? '上拉加载更多' : '已经到底啦~';
                };

                pageData.loadMoreStaus = false;
            }

        } catch (err) {
            console.log(err.message, '[err]')
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
        获取首页的数据
    */
    async function getPageData() {
        pageData.loading = true;
        pageData.error = false;

        renderPageStatus();

        try {
            const bannerData = await homeModel.getHomeBanner();
            const listData = await homeModel.getHomeList({ pageNumber: pageData.pageNumber, pageSize: pageData.pageSize });

            if (bannerData.code === 200) {
                pageData.banner = bannerData.data;
                // pageData.loading = false;
                // pageData.error = false;

                changePageStatus('ALL_FALSE')
            } else {
                console.log('1')
                // pageData.loading = false;
                // pageData.error = true;
                changePageStatus('HALF')
            };;

            if (listData.code === 200) {
                pageData.list = listData.data.list;
                pageData.total = listData.data.total;

                checkHasMoreStatus()
                changePageStatus('ALL_FALSE')
                // pageData.loading = false;
                // pageData.error = false;
            } else {
                console.log('2')
                // pageData.loading = false;
                // pageData.error = true;
                changePageStatus('HALF')
            };


            renderPageStatus();
        } catch (err) {
            console.log(err.message, '[err]')
            // pageData.loading = false;
            // pageData.error = true;
            renderPageStatus();
            changePageStatus('HALF')
        }
    }

    /*
        检查列表数据与总条数
    */
    function checkHasMoreStatus() {
        if (pageData.list.length < pageData.total) {
            pageData.hasMore = true;
        } else {
            pageData.hasMore = false;
        }
    }

    /*
        页面状态
    */
    function changePageStatus(type) {
        switch (type) {
            case 'ALL_FALSE':
                pageData.loading = false;
                pageData.error = false;
                break;
            case 'HALF':
                pageData.loading = false;
                pageData.error = true;
                break;
            default:
                break;
        }
    }


    /**
     * 初始化函数
     * 
    */
    async function init() {
        await getPageData()
    };

    init();

})(document);