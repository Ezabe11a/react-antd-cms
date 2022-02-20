import React from 'react';
import {
    Select,
} from 'antd';

import { getCates } from '@/store/actions/goodAction';
import { connect } from 'react-redux';

const { Option } = Select;

function mapStateTopProps(store) {
    return {
        cates: store.good.cates
    }
}

function mapActionTopProps(dispatch) {
    return {
        getCates: (params) => dispatch(getCates(params))
    }
}

class AlCateSelect extends React.Component {

    componentDidMount() {
        this.props.getCates({})
    }

    createOptions() {
        let { cates } = this.props
        // console.log(this.props);
        return cates.map(ele => (
            <Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Option>
        ))
    }

    render() {
        return (
            <Select 
                style={{ width: 120 }} 
                value={this.props.value} 
                onChange={(val)=>this.props.onChange(val)} 
            >
                {this.createOptions()}
            </Select>

        )
    }
}
export default connect(mapStateTopProps, mapActionTopProps)(AlCateSelect)