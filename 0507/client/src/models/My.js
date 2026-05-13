import { Http } from '../libs/Http';
import config from '../libs/config/index';
console.log(config.API,'[API]')
/**
    * 使用 `extends` 关键字来继承父类的方法后，使用this 关键字来进行使用 父类的方法
    * 
   */
class MyModel extends Http {

    /**
     * 使用 this.axiosGet
     * getHomeBanner
     *  - 行为
     *  - 
     * 
     * */ 
    
    getUserBill(data) {
        return new Promise((resolve, reject) => {
            /**
             * 以集合的形式进行传参
             * callback 的形式进行方法的传递
             * 
            */
            this.axiosPost({
                url: config.API.GET_USER_BILL,
                responseType: 'blob',
                data: data,
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
    MyModel
}