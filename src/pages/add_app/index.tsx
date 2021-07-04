import React, {useState} from 'react'
import api from '../../api'
import { Button, message, Form, Input } from 'antd';
import { Redirect } from 'react-router-dom'
import styles from './index.module.less'

function AddApp() {
  const [redirect, setRedirect] = useState<boolean>(false);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values)
    api.addApp(values).then(() => {
      form.resetFields()
      message.success("添加成功")
      setRedirect(true)
    }).catch(err => {
      console.log(err)
      message.error("发生异常，请稍后再试")
    })
  }

  if (redirect) {
    return <Redirect to="/"></Redirect>
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className={styles.formContainer}
    >
      <Form.Item label="应用名称" name="app" rules={[{ required: true }]}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="应用描述" name="description" rules={[{ required: true }]}>
        <Input placeholder="" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">添加应用</Button>
      </Form.Item>
    </Form>
  )
}

export default AddApp
