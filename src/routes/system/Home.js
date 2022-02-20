import React from 'react';
import { connect } from 'react-redux';
import {
    changeMsg,
    todoAdd,
    todoDel,
    todoUpd,
    todoClear
} from '@/store/actions/todoAction';

// 把state中的数据变成this.props的方式进行访问
function mapStateToProps(store) {
    return {
        msg: store.todo.msg,
        list: store.todo.list
    }
}

// 把外部的action生成器方法，映射到this.props上
function mapActionToProps(dispatch) {
    return {
        change: (payload)=>{
            dispatch( changeMsg(payload))
            // dispatch({
            //     type: 'change',
            //     payload
            // })
        },
        add: (payload)=>dispatch(todoAdd(payload)),
        del: (payload)=>dispatch(todoDel(payload)),
        upd: (payload)=>dispatch(todoUpd(payload)),
        clear:()=>dispatch(todoClear())
    }
}


class Home extends React.Component {
    changeMsg() {
        // dispatch一个action，发出去
        // 发送到store
        // 将诶render进行深复制
        this.props.change('20000')
    }

    createList(){
        let{list} = this.props
        return list.map(ele=>(
            <div key={ele.id}>
                <span>{ele.id}</span>
                <span>--</span>
                <span onClick={this.updHandle.bind(this, ele.id)}>{ele.task}</span>
                <span onClick={this.delHandle.bind(this, ele.id)}>&nbsp; x</span>
            </div>
        ))
    }
    addHandle(){
        this.props.add({
            id: Date.now(), 
            task: 'drinking'
        })
    }
    delHandle(id){
        this.props.del(id)

    }
    updHandle(id){
        this.props.upd({
            id,
            task:'sleep'
        })
    }
    clearHandle(){
        this.props.clear({})
    }
    render() {
        // console.log('props',this.props);

        return (
            <div className='al-system-home'>
                <h1>首页</h1>
                <h2>{this.props.msg}</h2>
                <button onClick={this.changeMsg.bind(this)}>click</button>
                <hr />
                <button onClick={this.addHandle.bind(this)}>+</button>
                <button onClick={this.clearHandle.bind(this)}>x</button>
                {this.createList()}
            </div>
        )
    }
}


export default connect(mapStateToProps, mapActionToProps)(Home)