import { GET_ALL_CATES, GET_GOOD_LIST, GET_GOOD_DETAIL,RESET_GOOD_DETAIL } from '@/store/actionType';
import { fetchCates, fetchGoodList, fetchGoodDetail } from '@/utils/api';
// import { GET_USER_LIST } from '../actionType';

export function getCates(params) {
    return function (dispatch) {
        fetchCates(params).then(res => {
            // console.log(res);
            dispatch({
                type: GET_ALL_CATES,
                payload: res
            })
        })
    }
}

export function getGoodList(params) {
    return function (dispatch) {
        fetchGoodList(params).then(res => {
            dispatch({
                type: GET_GOOD_LIST,
                payload: res
            })
        })
    }
}
export function getGoodDetail(params) {
    return function (dispatch) {
        fetchGoodDetail(params).then(res => {
            dispatch({
                type: GET_GOOD_DETAIL,
                payload: res
            })

        })
    }
}

export function resetDetail(payload) {  
    return{
        type:RESET_GOOD_DETAIL,
        payload
    }
}

