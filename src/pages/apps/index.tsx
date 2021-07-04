import React, {useState} from 'react'
import { Button, Row, Col, Form, Input } from 'antd';
import AppList from '../../components/AppList'
import { UserAddOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import { Redirect } from 'react-router-dom';

function Apps() {
  const [redirect, setRedirect] = useState<boolean>(false)
  if (redirect) {
    return <Redirect  to="/app/add"></Redirect>
  }
  return (
    <>
      <Button icon={<UserAddOutlined />} type="primary" onClick={() => setRedirect(true)}>创建应用</Button>
      <AppList className={styles.listContainer}></AppList>
    </>
  )
}

export default Apps
