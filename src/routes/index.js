import loadable from '@loadable/component';
import { AppstoreFilled, LayoutFilled, ProfileFilled, PlusCircleFilled, FundFilled, ShopFilled } from '@ant-design/icons';
import React from 'react';
const Home = loadable(() => import('./system/Home'))
const Analyze = loadable(() => import('./system/Analyze'))
const AddGood = loadable(() => import('./good/GoodAdd'))
const GoodList = loadable(() => import('./good/GoodList'))


const routes = [
    {
        id: 1,
        text: '系统概况',
        icon: <LayoutFilled />,
        children: [
            {
                id: 11,
                text: '首页概况',
                path: '/home',
                component: Home,
                icon: <AppstoreFilled />
            },
            {
                id: 12,
                text: '数据分析',
                path: '/analyze',
                component: Analyze,
                icon: <FundFilled />,
            }
        ]
    },
    {
        id: 2,
        text: '商品管理',
        icon: <ShopFilled />,
        children: [
            {
                id: 21,
                text: '商品列表',
                path: '/good/list',
                component: GoodList,
                icon: <ProfileFilled />,
                children:[
                    {
                        id: 2101,
                        text: '添加商品',
                        path: '/good/add/:id',
                        component: AddGood,
                        icon: <PlusCircleFilled />,
                    },
        
                ]
            }

        ]
    },
    {
        id: 3,
        text: '系统管理',
        icon: <ShopFilled />,
        children: [
            {
                id: 31,
                text: '角色管理',
                path: '',
                component: '',
                icon: <PlusCircleFilled />
            },
            {
                id: 32,
                text: '权限管理',
                path: '',
                component: '',
                icon: <PlusCircleFilled />
            },
            {
                id: 33,
                text: '商品管理',
                path: '',
                component: '',
                icon: <PlusCircleFilled />
            },
        ]
    }
]

export default routes