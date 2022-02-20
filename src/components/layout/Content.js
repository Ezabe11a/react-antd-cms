import React from 'react';
import routes from '@/routes';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

export default class Content extends React.Component {
    createRoutes() {
        let res = []
        function create(arr) {
            arr.map(ele => {
                res.push(<Route key={ele.id} exact path={ele.path} component={ele.component} />)
                // 递归
                if(ele.children) {
                    create(ele.children)
                }
                return false
            })
        }
        // 调用递归函数
        routes.map(ele => {
            create(ele.children)
            return false
        })
        return res
    }

    render() {
        return (
            <div className='al-Content'>
                <Switch>
                    {this.createRoutes()}
                    <Redirect to={'/home'} />
                </Switch>
            </div>
        )
    }
}