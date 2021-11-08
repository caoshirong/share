import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import About from '../about/About';
import Dashboard from '../dashboard/Dashboard';
import Home from '../home/Home';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const renderMenu = (position='header', data, i = 0) => {
  return data.map((_, index) => {
    if (_.children && _.children.length > 0) {
      return <SubMenu key={'SubMenu' + position + i + index} title={_.name}>
        {
          renderMenu(position, _.children, i + 1)
        }
      </SubMenu>
    } else {
      return <Menu.Item key={i + '' + index}>
      <Link to={_.url}>{_.name}</Link>
    </Menu.Item>;
    }
  })
}

class App extends React.Component {
  state = {
    current: 'mail',
    collapsed: false,
    menuList: [
      {
        name:'home',
        url: '',
      },
      {
        name:'dashboard',
        url: '/dashboard',
        children: [
          {
            name: 'dashboard-1',
            url: '/dashboard/1',
            children: [
              {
                name:'dashboard-1-1',
                url: '/dashboard/1/1',
              },
              {
                name:'dashboard-1-2',
                url: '/dashboard/1/2',
              }
            ]
          }
        ]
      },
      {
        name:'about',
        url: '/about',
      },
    ]
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  
  render() {
    const { collapsed, menuList } = this.state;
    return (
      <Router>
        <Layout className="layout">
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {renderMenu('sider',menuList)}
            </Menu>
          </Sider>
          <Layout>
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {renderMenu('header',menuList)}
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
          
        </Layout>,
    </Router>
    );
  }
}


export default App;
