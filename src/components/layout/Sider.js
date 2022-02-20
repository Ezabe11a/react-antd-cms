import React from 'react';
import { Menu } from 'antd';
import routes from '@/routes';
import { Link } from 'react-router-dom';
import img from '@/utils/img';

const { SubMenu } = Menu;

export default class Sider extends React.Component {
    creacteMenuItem(children) {
        if (children) {
            return children.map(ele => (
                <Menu.Item  icon={ele.icon} key={ele.id}>
                    <Link to={ele.path}>{ele.text}</Link>
                </Menu.Item>
            ))
        }
    }
    createNavs() {
        let arr = []
        routes.map(ele => {
            arr.push(
                <SubMenu
                    icon={ele.icon}
                    key={ele.id}
                    title={ele.text}>
                    {this.creacteMenuItem(ele.children)}
                </SubMenu>
            )
            // 在这个脚手架环境中，要求所有箭头函数需要一个返回值
            return false
        })
        return arr
    }

    render() {
        return (
            <div className='al-Sider'>
                <div className='al-logo'>
                    <img src={img.logo} alt='logo' />
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    {this.createNavs()}

                    {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>

                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>

                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}