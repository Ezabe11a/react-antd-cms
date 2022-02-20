import {
    CHANGE_MSG,
    TODO_ADD,
    TODO_DEL,
    TODO_UPD,
    TODO_CLEAR
} from '@/store/actionType';

// action = {
//     type: 'add', // 意图
//     payload: '' // 视图传递的值
// }

// 定义初始化数据，可以被所有组件共享使用
const initState = {
    msg: '1000',
    list: [{ id: 1, task: 'eating' }]
}

export default function todoReducer(state = initState, action) {
    // 深复制
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {

        case CHANGE_MSG:
            // 单层对象深复制
            // let newState ={...state}
            // let newState = Object.assign({}, state)

            // 多层对象深复制
            // let newState = JSON.parse(JSON.stringify(state))
            newState.msg = action.payload
            return newState;

        case TODO_ADD:
            // 往list数组中添加一条action.payload即Home中add传递的todo
            newState.list.push(action.payload)
            return newState;

        case TODO_DEL:
            let id = action.payload
            // 筛选出所有的和点击不符的todo并保留，即是将选中的删除
            newState.list = newState.list.filter(ele => ele.id !== id)
            return newState;

        case TODO_UPD:
            newState.list.map((ele, idx, arr) => {
                // arr表示的是由原list数组生成的一样的新数组，也是一种数组遍历
                // 找寻点击的todo并选中
                if (ele.id === action.payload.id) {
                    // 将点击的对应的todo中task换成action.payload.task即Home中upd传递的task
                    arr[idx].task = action.payload.task
                }
                // 箭头函数必须有返回值
                return false
            })
            return newState;

        case TODO_CLEAR:
            // 清空list数组即是清空
            newState.list = []
            return newState;

        default:
            return state;
    }
}

