class ResponseBody {
    // constructor(code, msg, data){
    //     this.code = code
    //     this.msg = msg
    //     this.data = data
    // }
    //代表成功的响应体
    static ok(code = '200', msg = '接口请求成功', data = null) {
        return JSON.stringify({
            code: code,
            msg: msg,
            data: data
        })
    }





    //代表失败的响应体
    static err(code = '400', msg = '接口请求失败', data = null){
        return JSON.stringify({
            code: code,
            msg: msg,
            data: data
        })
    }
};

module.exports = ResponseBody;