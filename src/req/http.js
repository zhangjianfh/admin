import Vue from 'vue'
import router from '../../../../jobs/manage/src/router/index'
import axios from 'axios'
import qs from 'qs'
import { MessageBox } from 'element-ui'
Vue.prototype.$MsgBoxs = MessageBox
let $MsgBoxs = Vue.prototype.$MsgBoxs

if (process.env.NODE_ENV == 'development') { //开发环境
  axios.defaults.baseURL = '/api/'}
else if (process.env.NODE_ENV == 'testing') {
  axios.defaults.baseURL = '/api/';
}
else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = '"https://schedule.woyue.com/"';
}
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.error(error)
  })

//响应拦截
axios.interceptors.response.use(
  response => {
    if(response.status === 200){
      return Promise.resolve(response)
    }else{
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          /*router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          });*/
          $MsgBoxs('认证未通过','提示',{
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          $MsgBoxs('登录过期，请重新登录','提示',{
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          // 清除token
          /*localStorage.removeItem('token');
          store.commit('loginSuccess', null);*/
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          $MsgBoxs('网络请求不存在','提示',{
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          break;
        case 405:
          $MsgBoxs('请求方法未允许','提示',{
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          $MsgBoxs(error.response.data.message,'提示',{
            confirmButtonText: '确定',
            callback: action => {
            }
          });
      }
      return Promise.reject(error.response);
    }

  })

/**
 * get请求方法
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function Get(url, data){
  return new Promise((resolve, reject) => {
    axios.get(url,{
      params: data
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * Post请求方法
 * @param url
 * @param data
 * @returns {Promise<any>}
 * @constructor
 */
export function Post(url, data){
  return new Promise((resolve, reject) => {
    // {headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
    axios.post(url, qs.stringify(data))
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
