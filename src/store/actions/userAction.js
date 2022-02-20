import {
    GET_USER_LIST,
    GET_CLASS_SALARY
} from '@/store/actionType'

import { fetchUsers } from '@/utils/api';
import { fetchSalary } from '@/utils/salary';

// 三次dispatch
// 1.
export function getUsers(params) {
    return function (dispatch) {
        // 调接口
        fetchUsers(params).then(res => {
            // 2.
            dispatch({
                type: GET_USER_LIST,
                payload: res
            })
        }).catch(err => {
            // 3.
            dispatch({
                type: GET_USER_LIST,
                payload: []
            })
        })
    }
}
export function getSalary(params) {
    return function (dispatch) {
        fetchSalary(params).then(res => {
            dispatch({
                type: GET_CLASS_SALARY,
                payload: res
            })
        })
        .catch(err => {
            dispatch({
                type:GET_CLASS_SALARY,
                payload:[]
            })
        })
    }
}