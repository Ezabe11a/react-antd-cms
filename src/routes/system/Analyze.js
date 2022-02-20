import React from 'react';
// import {fetchUsers} from '@/utils/api';
import { connect } from 'react-redux';
import { getUsers, getSalary } from '@/store/actions/userAction';
import { fetchSalary } from '@/utils/salary';
import { Table } from 'antd';


function mapStateToProps(store) {
    return {
        users: store.user.list
        // student: store.user.list
    }
}

function mapActionsToProps(dispatch) {
    return {
        // 异步action第一次触发
        // init: (parmas) => dispatch(getUsers(parmas))
        init: (params) => dispatch(getSalary(params))

    }
}
class Analyze extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []

        }
    }
    componentDidMount() {
        this.props.init({})
        //     fetchUsers({}).then(res=>{
        //         // console.log(res);
        //         this.setState({user: res})
        //     })
        fetchSalary({}).then(res => {
            let {data} = this.state
            this.setState({ user: res })
            if (this.props.users !== undefined) {
                this.setState({ data: res })
                console.log(data);
            }

        })

    }
    createSalaryList() {
        let { users } = this.props

        if (users !== undefined) {
            // let list = users.list
            // console.log(users);
            // console.log(this.props);
            // return users.map(ele => (
            //     <div key={ele.studentID}>
            //         <span>{ele.studentName}</span>
            //         <span>--</span>
            //         <span>{ele.date}</span>
            //         <span>--</span>

            //         <span>{ele.salary}</span>
            //     </div>
            // ))
        } else {
            return false
        }

    }
    createUserList() {
        let { users } = this.props
        let list = users.list
        // console.log(list);

        // 第一次dispatch由于list值为空，返回的是undefined会报错，
        // 所以只接收第二次有值的list，将空值过滤掉
        if (list !== undefined) {
            return list.map(ele => (
                <div key={ele._id}>
                    <span>{ele._id}</span>
                    <span>--</span>
                    <span>{ele.username}</span>
                </div>
            ))

        } else {
            return false
        }
    }
    render() {
        // let { users } = this.props
        let { data } = this.state
        const columns = [
            {
                title: 'Name',
                dataIndex: 'studentName',
            },
            {
                title: 'City',
                dataIndex: 'city',
            },
            {
                title: 'Education',
                dataIndex: 'studentEducation',
            },
            {
                title: 'Professional',
                dataIndex: 'studentProfessional',
            },
            {
                title: 'Status',
                dataIndex: 'studentStatus',
            },
            {
                title: 'Date',
                dataIndex: 'date',
            },
            {
                title: 'Salary',
                dataIndex: 'salary',
                sorter: {
                    compare: (a, b) => a.salary - b.salary,
                    multiple: 1,
                },
            },
            {
                title: 'Company',
                dataIndex: 'company',
            },
            {
                title: 'Welfare',
                dataIndex: 'welfare',
            },


        ];
        // console.log(this.props.users.list);
        return (
            <div className='al-system-analyze'>
                <h1>数据分析</h1>
                {/* {this.createUserList()} */}
                {this.createSalaryList()}
                <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} sticky/>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapActionsToProps)(Analyze)