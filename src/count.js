import React from 'react';
import './assets/css/app.less';
import 'antd/dist/antd.css'

export default class Count extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            count: 1
        }
    }
    componentDidMount() {

    }
    addFn() {
        let count = this.state.count
        count += 1
        this.setState({
            count
        })
    }
    couFn() {
        let count = this.state.count
        count -= 1
        this.setState({
            count
        })
    }
    render() {
        return (
            <div className='bigBox'>
                <div className='btnBox'>
                    <span className='couBtn' onClick={() => this.couFn()}>-</span>
                    <span className='addBtn' onClick={() => this.addFn()}>+</span>
                </div>
                <text className='textBox'>当前数字为<span>{(this.state.count % 2 == 1) ? '奇' : '偶'}</span>数</text>
            </div>
        )
    }
}