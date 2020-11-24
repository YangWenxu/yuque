/*
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 10:23:07
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-23 16:00:00
 */
const modeUrlObj = {
  production: {
    URL: 'https://yuque.com',
  },
  development: {
    URL: 'https://yuque.com',
  },
};

export default modeUrlObj[process.env.NODE_ENV];

export const BASE_URL =
'https://yuque.com';

