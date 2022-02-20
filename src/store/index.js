import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './reducers/todoReducer';
import goodReducer from './reducers/goodReducer';
import userReducer from './reducers/userReducer';

// 中间件，用于支持redux异步action
import thunk from 'redux-thunk';

const reducer = combineReducers({
    todo: todoReducer,
    good: goodReducer,
    user: userReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store


/**
 * 创建store
 * 使用createStore() 来创建，该方法必填参数是 reducer
 *
 * reducer？
 * 是一个纯函数，在redux的工作中，他用于更新state
 *
 * 定义reducer？
 * 鉴于同事协作，要分多个reducer，再使用combineReducers进行合并，
 * 以得到最终的reducer
 * function childReducer(state, action) { switch }
 *
 * state？
 * 是子store中可以被全局共享的数据
 *
 * action？
 * 他是reducer更新store的信号，包括type和payload
 *
 * action哪里来？
 * 视图中的dispatch派发而来
 *
 * 异步数据
 * 组件的外部数据全部都要从 props 进来（建议）
 *
 * 异步 action 和同步 action 区别
 * 前者需要三个action，后者只需要一个action
 * 异步数据的三个action：
 *      1.通知store，我要调接口了
 *      2.我点接口已成功，这是后端返回的数据，给reducer更新
 *      3.我调接口已经失败，告诉store失败了，不让reducer更新
 *
 */
