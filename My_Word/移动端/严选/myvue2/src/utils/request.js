import axios from 'axios'

// 创建vue实例
const instance = axios.create({
    // baseURL: 'http://shiyansong.cn:8888/api/private/v1/', // 创建基地址
    // baseURL: 'http://123.57.143.201:8888/api/private/v1/',
    // baseURL: 'https://api.imooc-admin.lgdsunday.club/api',   /**日测地址 */
    baseURL: 'http://101.132.181.9/api/',/**小米商城 */
    timeout: 3000 //
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // console.log(1234)
    // 在发送请求之前做些什么

    //  通过请求头传递token
    var token = localStorage.getItem('token') //从本地取token
    console.log(token, "token")
    if (token) { //判断token是否有值 ,没有值是null
        config.headers.Authorization = token //有值就把token放到请求头上
    }


    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // console.log(response,"响应回来的书")
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;