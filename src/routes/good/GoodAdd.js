import React from 'react';

import { connect } from 'react-redux';
import {
    Form,
    Input,
    Button,
    InputNumber,
    Switch,
} from 'antd';

import { AlUpload, AlCateSelect } from '@/components';
import { fetchAddGood } from '@/utils/api';
import { getGoodDetail, resetDetail } from '@/store/actions/goodAction';
import img from '@/utils/img';

const { TextArea } = Input;

function mapStateToProps(store) {
    return {
        detail: store.good.detail
    }
}

function mapActionToProps(dispatch) {
    return {
        getDetail: (params) => dispatch(getGoodDetail(params)),
        resetDetail: () => dispatch(resetDetail())
    }
}


class GoodAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: img.uploadIcon,
            cate: '',
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        // 添加
        if (id === '0') {
            this.props.resetDetail({
                name: '',
                desc: '',
                price: '',
                cate: '',
                img: '',
                hot: false
            })
            // 编辑
        } else {
            this.props.getDetail({ good_id: id })
        }
    }

    // 当store中的props更新时
    shouldComponentUpdate(props) {
        this.refs.form.setFieldsValue(props.detail)

        // 当返回值为true时，表示props或state改变时，页面将会更新。反之不更新
        return true
    }


    imgChange(url) {
        console.log('图片上传成功');
        this.setState({ imageUrl: url })
    }
    cateChange(val) {
        console.log(val);
        this.setState({ cate: val })
    }

    onFinish(value) {
        let id = this.props.match.params.id
        if (id !== '0') {
            // 编辑
            value.id = id
        }
        // console.log(value);
        fetchAddGood(value).then(res => {
            // console.log('sussecs');
            console.log(res);
            this.refs.form.setFieldsValue({
                name: '',
                desc: '',
                price: '',
                img: '',
                cate: '',
                hot: false
            })
            this.props.history.goBack()
        })
    }

    render() {
        // console.log(this.props);
        let { cate } = this.state
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 8,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 8,
            },
        };
        return (
            <div className='al-system-AddGood'>
                <h1>添加商品</h1>
                <Form
                    {...layout}
                    ref='form'
                    name="basic"
                    onFinish={this.onFinish.bind(this)}
                >
                    <Form.Item
                        label="商品名称"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '商品名称不符合要求',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="商品描述"
                        name="desc"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品描述',
                            },
                        ]}
                    >
                        <TextArea row={4} />
                    </Form.Item>

                    <Form.Item
                        label="商品价格"
                        name='price'
                        rules={[
                            {
                                required: true,
                                message: '请输入商品价格',
                            },
                        ]}
                    >
                        <InputNumber min={0} />
                    </Form.Item>

                    <Form.Item
                        label="商品品类"
                        name='cate'
                        rules={[
                            {
                                required: true,
                                message: '请输入商品品类',
                            },
                        ]}
                    >
                        <AlCateSelect value={cate} onChange={this.cateChange.bind(this)} />
                    </Form.Item>

                    <Form.Item
                        label="商品图片"
                        name='img'
                    >
                        <AlUpload />
                    </Form.Item>

                    <Form.Item
                        label="是否热销"
                        name='hot'
                        valuePropName='checked'
                    >
                        <Switch />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(GoodAdd)