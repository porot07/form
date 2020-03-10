import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from '../actions';

const MyForm = () => {
  const dispatch = useDispatch();
  const stateUI = useSelector((state) => state.loadingUI.state);
  const onFinish = ({ username, password }) => {
    dispatch(login(username, password));
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Пожалуйста введи свой логин!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Логин" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пожалуйста введи пароль!' }]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type= "password" placeholder="Пароль" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" disabled={stateUI === 'request'}>
          {stateUI === 'request' ? 'Подождите...' : 'Войти'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
