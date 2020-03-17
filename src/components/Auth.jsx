import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Input,
  Button, Row,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from '../actions';

const Auth = () => {
  const dispatch = useDispatch();
  const stateLoginUI = useSelector((state) => state.loadingTokenUI.loadingState);
  const onFinish = ({ username, password }) => {
    dispatch(login(username, password));
  };
  return (
    <div className="container">
      <Row justify="center">
        <div id="components-form-login">
          <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Пожалуйста введи свой логин!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Пожалуйста введи пароль!' }]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" disabled={stateLoginUI === 'request'}>
                {stateLoginUI === 'request' ? 'Подождите...' : 'Войти'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Row>
    </div>
  );
};

export default Auth;
