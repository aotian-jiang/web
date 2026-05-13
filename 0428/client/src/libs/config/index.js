/**
 * 集中的管理 url 对url进行统一转发
 * 
*/
// api
// 做转发 =》 nginx => WEB服务转发

/**
 * nginx  WEB服务器
 * 前端的服务器 =》 WEB服务器  =》 I/O操作频繁，input 、output 
 *  1.1 前端首先来说就是文件资源 ，所以说要读取文件，返回文件给浏览器
 *  1.2 接口请求，转发。
 * 后端的服务器 =》 应用服务器  =》 占用运算 CPU使用量大
 *  1.1 生成文件，或者生成token
 *  1.2 加密解密
 *  1.3 压缩文件，转码视频
 * 
*/

const BASE_URL = '/prod-api'

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


