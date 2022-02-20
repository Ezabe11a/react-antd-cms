import axios from './axios';



// 获取用户信息
export function fetchUsers(params) {
    return axios({
        url: '/api/v1/users/all',
        method: 'GET',
        params
    })
}

// 获取商品品类
export function fetchCates(params) {
    return axios({
        url: '/api/v1/jd/getAllCates',
        method: 'GET',
        params
    })
}

// 添加商品
export function fetchAddGood(data) {
    return axios({
        url: '/api/v1/goods/creategoods',
        method: 'POST',
        data
    })
}

// 获取商品列表
export function fetchGoodList(params) {  
    return axios ({
        url:'/api/v1/jd/getHotGoodList',
        method: 'GET',
        params
    })
}

// 删除商品
// export function fetchDelGood(params) {
//     return axios({
//       url: '/jd/delGood',
//       method: 'GET',
//       params 
//     })
//   }

// 登录
export function fetchLogin(data) {  
    return axios({
        url: '/api/v1/users/cms/login',
        method: 'POST',
        data
    })
}

// 获取商品详情
export function fetchGoodDetail(params) {
    return axios({
      url: '/api/v1/goods/detail',
      method: 'GET',
      params
    })
  }
