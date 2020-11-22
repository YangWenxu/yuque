import axios from "axios";
// axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'https://yuque.com/api/v2/repos/cxd/design-system';   
// axios.defaults.baseURL = config.API_ROOT;
// axios.defaults.baseURL = getBaseUrl(window.location.href); 
axios.defaults.headers = { 'X-Auth-Token': '5GmaDRJFUXGVn7DniU0kuRkO6XZjIZ4LflwPSvMz' }

//POST传参序列化
axios.interceptors.request.use((config) => {
  // if (config.method === 'post') {
  //   config.data = qs.stringify(config.data);
  // }
  return config;
}, (error) => {
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use(
  response => {
    // if (response.data && response.data.code) {
    //   if (response.data.code === '2001') {
    //     auth.logout()
    //   }
    // }
    return response;
  },
  error => {
    if (error.response) {
      //全局ajax错误信息提示
      //MessageBox({type:"error",message:error.response.data,title:"温馨提示",});
    }
    return Promise.reject(error);
  });

export function fetch(url, config = { method: 'get' }) {
  return axios.request({ ...config, url })
  // return new Promise((resolve, reject) => {
  //   axios.request({ ...config, url })
  //     .then(response => {
  //       resolve(response.data);
  //     }, err => {
  //       reject(err);
  //     })
  //     .catch((error) => {
  //       reject(error)
  //     })
  // })
}

export default axios