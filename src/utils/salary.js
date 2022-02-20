import axios from 'axios';

let baseURL = 'http://jx.1000phone.net'

const fetch = axios.create({
    baseURL: baseURL,
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 请求拦截器
fetch.interceptors.request.use(config => {
    return config
})

// 响应拦截器
fetch.interceptors.response.use(response => {
    if (response) {
        return response.data.student
    }
    else {
        console.log('q');
    }
}, error => {
    return Promise.reject(error)
})

// 薪资?class=SZ-HTML5-JY-2001&tdsourcetag=s_pcqq_aiomsg
export function fetchSalary(params) {
    return fetch({
        url: '/teacher.php/Api/classJobData?class=SZ-HTML5-JY-2002&tdsourcetag=s_pcqq_aiomsg',
        method: 'get',
        params
    })
}


// city: "深圳市"
// company: "软**力"
// date: "2020-08-07"
// isJob: "是"
// isPass: "通过"
// offer_num: "1"
// salary: "13000"
// studentEducation: "专科"
// studentID: "80852"
// studentNO: "SZ192013032"
// studentName: "刘*彬"
// studentProfessional: "计算机网络应用"
// studentStatus: "非应届"
// welfare: "五险一金"