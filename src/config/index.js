/*
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-23 10:23:07
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-23 15:02:27
 */
const modeUrlObj = {
  production: {
    // URL: 'https://yuque.com/api/v2/repos/cxd/design-system',
    // URL: 'http://localhost:4000',
  },
  development: {
    // URL: 'https://yuque.com/api/v2/repos/cxd/design-system',
    // URL: 'http://localhost:4000',
  },
};

export default modeUrlObj[process.env.NODE_ENV];

export const BASE_URL =
// 'https://yuque.com/api/v2/repos/cxd/design-system';
  'http://localhost:4000';

