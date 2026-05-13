/**
 * objectToQueryString (语义清晰)
 * get请求对象转换为字符串
 * Date: 2026/04/18
 * Auth: wdc
*/


function objectToQueryString(params = {}) {
    let result = [];
    /**
     * for in 
     * 
    */
    /**
     * 获取对象的key的数组
     * - 获取数组形式的属性，也就是key值 => [key1, key2, key3,....]
     * */ 
    let keys = Object.keys(params)
    console.log(keys,'[keys]')
    // 对数组进行循环，获取每一个item, item是对象中的key值，也就是形参key
    keys.forEach((key) => {
        let value = params[key];

        if (value === undefined || value === null || value === '') {
            return
        }

        // key value => ['key=value']
        // result.push(`${key}=${value}`)

        result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    })

    // return result;
    return result.join('&')
};

export default objectToQueryString;