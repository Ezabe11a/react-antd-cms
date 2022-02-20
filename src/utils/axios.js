import axios from 'axios';

let baseURL = 'http://localhost:9000'

const fetch = axios.create({
    baseURL: baseURL,
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 请求拦截器
fetch.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
})

// 响应拦截器
fetch.interceptors.response.use(response => {
    if (response.data && response.data.err === 0) {
        
        return response.data.data
    } else {
        console.log('网络异常，请稍后重试');
    }
}, error => {
    return Promise.reject(error)
})

export default fetch
