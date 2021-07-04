import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { AppstoreOutlined, UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Apps from './pages/apps'
import AddApp from './pages/add_app'
import AppDetail from './pages/app_detail'

function App() {
  const {Sider, Header, Content, Footer} = Layout;
  const { SubMenu } = Menu;

  const handleClick = () => {

  }

  return (
    <>
      <Router>
        <Layout style={{height: '100vh'}}>
          <Header>Header</Header>
          <Layout>
            <Sider theme="light">
              <Menu
                onClick={handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <Menu.Item key="app" icon={<AppstoreOutlined />}><Link to="/">应用管理</Link></Menu.Item>
                <Menu.Item key="user" icon={<UserOutlined />}><Link to="/user">用户管理</Link></Menu.Item>
              </Menu>
            </Sider>
            <Content style={{height: "100%"}}>
              <Layout style={{height: "100%"}}>
                <Content style={{height: "100%", padding: '16px'}}>
                  <Switch>
                    <Route path="/user">123</Route>
                    <Route path="/app/add"><AddApp /></Route>  
                    <Route path="/app/detail/:id"><AppDetail /></Route>  
                    <Route path="/"><Apps /></Route>                      
                  </Switch>
                </Content>
                <Footer>Footer</Footer>
              </Layout>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </>
  )
}

export default App
