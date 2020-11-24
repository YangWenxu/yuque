/*
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 09:30:14
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-24 10:49:07
 */
import axios from 'axios';
// import { Message } from 'element-ui';

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: { 'X-Auth-Token': '5GmaDRJFUXGVn7DniU0kuRkO6XZjIZ4LflwPSvMz' },
  // timeout: 20000
});

// request 拦截器
instance.interceptors.request.use(
  (config) => {
    // 这里可以自定义一些config 配置
    // if (config.params && !config.params.jsonname) {
    //   config.headers['X-Auth-Token'] = '5GmaDRJFUXGVn7DniU0kuRkO6XZjIZ4LflwPSvMz';
    // }
    return config;
  },
  (error) => {
    //  这里处理一些请求出错的情况

    Promise.reject(error);
  }
);

// response 拦截器
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 这里处理一些response 正常放回时的逻辑
    if (res.code !== '200') {
      // Message.error('服务器异常');
    }

    return res;
  },
  (error) => {
    // 这里处理一些response 出错时的逻辑

    return Promise.reject(error);
  }
);

export default instance;
