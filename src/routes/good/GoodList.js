import React from 'react';
import {
    Row,
    Col,
    DatePicker,
    Table,
    Modal,
    Button
} from 'antd';
import { AlCateSelect } from '@/components';

import { connect } from 'react-redux';
import { toDate } from '@/utils/date';
import { getGoodList } from '@/store/actions/goodAction';
import './style.less'

const { RangePicker } = DatePicker;

function mapStateToProps(store) {
    return {
        goodArr: store.good.list,
        total: store.good.total
    }
}

function mapActionToProps(dispatch) {
    return {
        getList: (params) => dispatch(getGoodList(params))
    }
}


class GoodList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            curRow: null,
            filter: {
                cate: '',
                hot: false,
                page: 1,
                size: 3,
                min_price: 0,
                max_price: 1000,
                st: '',
                et: ''
            }
        }
    }
    componentDidMount() {
        let { filter } = this.state
        this.props.getList(filter)
    }

    // 更新filter
    updateFilter(key, val) {
        let { filter } = this.state
        if (key !== 'page') {
            filter.page = 1
        }

        // 更新filter
        filter[key] = val
        this.setState({ filter })
        //触发调接口
        this.props.getList(filter)
    }
    cateFilter(val) {
        this.updateFilter('cate', val)
    }
    pageFilter(val) {
        this.updateFilter('page', val)
    }
    dateFilter(e) {
        // 具体时间分钟
        let startTime = e[0].format('YYYY-MM-DD HH:mm:ss')
        // 时间戳
        let endTime = e[1].valueOf()
        console.log(startTime, endTime);

    }
    skipToEdit(row) {
        this.props.history.push('/good/add/'+ row._id)
    }
    showModel(row) {
        this.setState({ show: true, curRow: row })
    }
    handleOk() {
        // fetchDelGood({ id: this.state.curRow._id }).then(() => {
        //     this.props.getList(this.state.filter)
            this.setState({ show: false })
        // })
    }
    handleCancel() {
        this.setState({ show: false })
    }

    skipToAdd() {
        this.props.history.push('/good/add/0')
    }
    render() {
        let { filter, show } = this.state
        let { goodArr, total } = this.props
        // console.log('goodArr', goodArr)

        const columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
                key: 'name',
                align: 'center',
                // width:80,
                render: (text, row, index) => (
                    <div>
                        <img src={'http://localhost:3080' + row.img} alt={row.name} />
                        <div>{row.name}</div>
                    </div>
                )
            },
            {
                title: '简介',
                dataIndex: 'desc',
                key: 'desc',
                align: 'center',

            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
                align: 'center',
                render: function (text) {
                    return (
                        <div>
                            {'￥' + text + '元'}
                        </div>
                    )
                }
            },
            {
                title: '是否热销',
                dataIndex: 'hot',
                key: 'hot',
                align: 'center',
                render: (text) => (
                    <div>
                        {text ? '是' : '否'}
                    </div>
                )
            },
            {
                title: '类别',
                dataIndex: 'cate',
                key: 'cate'
            },
            {
                title: '上架时间',
                dataIndex: 'create_time',
                key: 'create_time',
                render: (text) => (
                    <div>
                        {toDate(text)}
                    </div>
                )
            },

            {
                title: '操作',
                dataIndex: 'handle',
                key: 'handle',
                align: 'center',
                render: (text, row, index) => (
                    <div>
                        <span onClick={this.skipToEdit.bind(this, row)}>编辑</span>
                        <span onClick={this.showModel.bind(this, row)}>删除</span>
                    </div>
                )
            }

        ]
        return (
            <div className='al-system-GoodList'>
                <h1>商品列表</h1><br />
                <div>
                    <Row align='middle'>
                        <Col span={2} offset={5}>品类筛选：</Col>
                        <Col span={3}>
                            <AlCateSelect
                                value={filter.cate}
                                onChange={this.cateFilter.bind(this)}
                            />
                        </Col>
                        <Col span={2}>日期筛选：</Col>
                        <Col span={4}>
                            <RangePicker
                                showTime
                                onChange={this.dateFilter.bind(this)}
                            />
                        </Col>
                        <Col span={4} offset={2} >
                            <Button onClick={this.skipToAdd.bind(this)}>新增</Button>
                        </Col>
                    </Row>
                    <br />
                </div>

                <div>
                    <Table
                        rowKey='_id'
                        columns={columns}
                        dataSource={goodArr}
                        pagination={{
                            total,
                            current: filter.page,
                            pageSize: 3,
                            pageSizeOptions: ['3', '5', '10', '20'],
                            onChange: this.pageFilter.bind(this)
                        }}

                    />
                </div>
                <Modal
                    title="警告"
                    visible={show}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                >
                    <p>确定删除吗？</p>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(GoodList)