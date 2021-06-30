import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import App from './App'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
