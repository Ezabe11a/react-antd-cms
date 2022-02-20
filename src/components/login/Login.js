import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { fetchLogin } from '@/utils/api';
import './style.scss'
import { withRouter } from 'react-router-dom'


const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 18,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 18,
    },
}


class Login extends React.Component {
    componentDidMount() {
        // 手动改变路由url
        this.props.history.replace('/login')
    }
    onLogin(values) {
        // console.log('data', values)
        fetchLogin(values).then((res) => {
            this.props.history.replace('/')
            localStorage.setItem('token', res.token)
            // 父组件传递的onLogin事件
            this.props.onLogin()
        })
    }
    render() {
        return (
            <div className='login'>
                <div>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onLogin.bind(this)}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{
                                required: true,
                                pattern: /^[a-zA-Z][a-zA-Z0-9]{5,9}$/,
                                message: '请输入用户名'
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        {/* eslint-disable */}
                        <Form.Item
                            label="密  码"
                            name="password"
                            rules={[{
                                required: true,
                                pattern: /^[a-zA-Z][a-zA-Z0-9\~\!\@\$\%\^\&\*\-]{7,19}$/,
                                message: '请输入密码'
                            }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>记住用户名</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )

    }
}

export default withRouter(Login)