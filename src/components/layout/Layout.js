import React from 'react';
import AlContent from './Content';
import AlHeader from './Header';
import AlSider from './Sider';
import { Layout } from 'antd';
import './style.scss';
const { Header, Sider, Content } = Layout

export default class AlLayout extends React.Component {
    render() {
        return (
            <div className='al-layout'>
                <Layout>
                    <Sider width='175'>
                        <AlSider />
                    </Sider>
                    <Layout>
                        <Header>
                            <AlHeader />
                        </Header>
                        <Content>
                            <AlContent />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}