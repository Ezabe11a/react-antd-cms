import {
    CHANGE_MSG,
    TODO_ADD,
    TODO_DEL,
    TODO_UPD,
    TODO_CLEAR
} from '@/store/actionType';

// action生成器
export function changeMsg(payload) {
    return {
        type: CHANGE_MSG,
        payload
    }
}

//TODOLIST
export function todoAdd(payload) {
    return {
        type: TODO_ADD,
        payload
    }
}

export function todoDel(payload) {
    return {
        type: TODO_DEL,
        payload
    }
}

export function todoUpd(payload) {
    return {
        type: TODO_UPD,
        payload
    }
}

export function todoClear() {
    return {
        type: TODO_CLEAR,
        payload: ''
    }
}

