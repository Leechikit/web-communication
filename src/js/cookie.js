/**
* @name: cookie
* @description: cookie操作
* @author: lizijie
* @update: 
*/

/**
* 设置cookie
*
* @param: {String} name 名称
* @param: {String} value 值
* @param: {Number} hours 有效时间（小时）
*/
exports.setCookie = (name, value, hours = 168) => {

    let d = new Date(),
        offset = 8,
        utc = d.getTime() + (d.getTimezoneOffset() * 60000),
        nd = utc + (3600000 * offset),
        exp = new Date(nd);

    exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
    document.cookie = name + "=" + decodeURIComponent(value) + ";path=/;expires=" + exp.toGMTString() + ";";
}

/**
* 获取cookie
*
* @param: {String} name 名称
* @return: {String} cookie值
*/
let getCookie = exports.getCookie = (name) => {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return encodeURIComponent(arr[2]);
    return null;
}

/**
* 去除cookie
*
* @param: {String} name 名称
*/
exports.removeCookie = (name) => {
    let cval = getCookie(name);
    if (cval) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        document.cookie = `${name}=${cval};path=/;expires=${exp.toGMTString()};`;
    }
}