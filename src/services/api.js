/*
 * @Descripttion: 
 * @version: 
 * @Author: yangwenxu
 * @Date: 2020-11-04 16:24:04
 * @LastEditors: yangwenxu
 * @LastEditTime: 2020-11-23 14:54:30
 */
// import config from '@/config';
import instance from '@/lib/axios';


export function getSideMenuData() {
  return instance.get('blog/api/toc');
}

export function getContextDetail(params) {
  return instance.get('blog/api/docs/'+params);
}

