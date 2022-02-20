import {
    GET_USER_LIST,GET_CLASS_SALARY
  } from '@/store/actionType'
  
const initState = {
    list: []
}

export default function userReducer(state = initState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case GET_USER_LIST:
            newState.list = action.payload
            return newState
        case GET_CLASS_SALARY:
            newState.list = action.payload
            return newState
        default:
            return state
    }
}