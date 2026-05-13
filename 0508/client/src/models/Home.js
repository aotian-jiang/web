import { Http } from '../libs/Http';
import config from '../libs/config/index';
console.log(config.API,'[API]')
/**
    * 使用 `extends` 关键字来继承父类的方法后，使用this 关键字来进行使用 父类的方法
    * 
   */
class HomeModel extends Http {
    getHomeBanner(params) {
        return new Promise((resolve, reject) => {
            /**
             * 以集合的形式进行传参
             * callback 的形式进行方法的传递
             * 
            */
            this.axiosGet({
                url: config.API.GET_HOME_BANNER,
                params: params,
                success(data) {
                    resolve(data)
                },
                error(err) {
                    resolve(err)
                }
            })
        });
    }

    /**
     * 使用 this.axiosGet
     * getHomeBanner
     *  - 行为
     *  - 
     * 
     * */ 
    
    getHomeList(params) {
        return new Promise((resolve, reject) => {
            /**
             * 以集合的形式进行传参
             * callback 的形式进行方法的传递
             * 
            */
            this.axiosGet({
                url: config.API.GET_HOME_LIST,
                params: params,
                success(data) {
                    resolve(data)
                },
                error(err) {
                    resolve(err)
                }
            })
        });
    }

};


export {
    HomeModel
}