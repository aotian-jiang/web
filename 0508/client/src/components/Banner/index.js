/*
    轮播图
*/

// 引入插件 => 社区（其他程序员）写好的功能模块
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './my-swiper.css'

function HomeBanner(bannerList = {}) {
    /**
     * <section class="home-banner">
            <h3 class="home-banner-title">${banner.des || ''}<h3>
        </section>
     * 
    */
    return `
            <section class="banner">
                <div class="swiper" id="J_swiper">
                    <div class="swiper-wrapper">
                        ${bannerList.map((item) => {
        return `
                                    <div class="swiper-slide swiper-group">
                                        <img src="${item.url}" />
                                        <h3>${item.des}</h3>
                                    </div>
                                `
    }).join('')
        }
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </section>
        `;
}

HomeBanner.init = function () {
    new Swiper('#J_swiper', {
        modules: [Autoplay, Pagination],
        loop: true,
        autoplay: {
            delay: 2500
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }

    })
};

export default HomeBanner;