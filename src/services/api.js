/*
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-04 16:24:04
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-23 15:54:38
 */
// import config from '@/config';
import instance from '@/lib/axios';


export function getSideMenuData() {
  return instance.get('/api/v2/repos/cxd/design-system/toc');
}

export function getContextDetail(params) {
  return instance.get('/api/v2/repos/cxd/design-system/docs/'+params);
}

