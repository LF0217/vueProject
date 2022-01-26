import axios from 'axios'
import router from "~/router"
import Qs from "qs"
import {getLoginOutUrl,removeSSO,removeLoginOutUrl,getToken,removeToken, getSSO,removeTokenExpiresIn} from '~/util/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    // baseURL: "http://127.0.0.1:8010/YESS", // api的base_url
    // timeout: 15000, // request timeout
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
    // #设置Content-Type
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
// 添加一个请求拦截器
service.interceptors.request.use(function (config) {
    //接口统一传token
    config.params = {...config.params,access_token:getToken()};
    
    if(config.method === "get"){
        config.params.random = new Date().getTime() + parseInt(Math.random()*1000000);
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


service.interceptors.response.use(function (response) {
    if(response.data.code=='error.login'){
        
        router.replace({
            path: '/login'
        });
        //不通过登录页面直接登录
        if(response.config.sso){
            // router.push({path:'/notlogin'});
            return Promise.resolve(response.data);
        }else{
            // let sso=getSSO();
            // let loginouturl=getLoginOutUrl();
            // removeSSO();
            // removeLoginOutUrl();
            // removeToken();
            // removeTokenExpiresIn();
            // if(sso&&loginouturl){
            //     location.href=loginouturl;
            // }else{
                
            //     router.replace({
            //         path: '/login'
            //     });
            // }

            return Promise.resolve(response.data);
        }
    }
    return response.data;

}, function (error) {
    return Promise.reject(error);
});

export default service;
export const baseURL=process.env.BASE_API;
