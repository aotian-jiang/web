import { Http } from '../libs/Http';
import config from '../libs/config/index';
/**
    * 使用 `extends` 关键字来继承父类的方法后，使用this 关键字来进行使用 父类的方法
    * 
   */
class DetailModel extends Http {

    /**
     * 使用 this.axiosGet
     * getHomeBanner
     *  - 行为
     *  - 
     * 
     * */ 
    
    getDetailList(data) {
        return new Promise((resolve, reject) => {
            /**
             * 
            */
            this.axiosPost({
                url: config.API.GET_DETAIL_LIST,
                data: data,
                headers: '',
                responseType: '',
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
    DetailModel
}