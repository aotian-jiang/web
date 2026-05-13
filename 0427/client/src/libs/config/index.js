/**
 * 集中的管理 url 对url进行统一转发
 * 
*/
// api
// 做转发 =》 nginx => WEB服务转发

const BASE_URL = '/api'

const API = {
    /**
     *  分模块编写
     * 
    */


    /**
     * Home
     *  - getHomeBanner 获取首页的轮播图
     *  - getHomeList   获取首页的列表
     * 
    */
    GET_HOME_BANNER: '/home/banner',
    GET_HOME_LIST: '/home/list',

    /**
     * Detail
     * 
    */

    GET_DETAIL_BANNER: '/detail',
    GET_DETAIL_LIST: '/detail/list',

};

export default {
    API
}


