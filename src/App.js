import React from 'react';
import './assets/css/app.less';
import 'antd/dist/antd.css'

// import { fetchUsers } from '@/utils/api';
import { Layout, Login } from '@/components';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import Count from './count';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem('token')
    }
  }
  onLogin() {
    this.setState({
      token: localStorage.getItem('token')
    })
  }
  // componentDidMount() {
  //   fetchUsers({}).then(res=>{
  //     console.log(res);
  //   })
  // }
  render() {
    let { token } = this.state
    return (
      <HashRouter>
        <Provider store={store}>
          {/* <Count /> */}
          {token ? <Layout /> : <Login onLogin={this.onLogin.bind(this)} />}
        </Provider>
      </HashRouter>

    );
  }
}


