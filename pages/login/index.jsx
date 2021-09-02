import React, { useState, useContext, useEffect } from 'react';
import { Input, Button, Form } from 'antd';
import { useRouter } from 'next/router';

import AuthContext from '../../store/auth-context';

export default function LoginPage() {
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [loading, setLoading] = useState('');

  const authCtx = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, [enteredLogin, enteredPassword]);

  const enteredLoginHandler = (event) => {
    setEnteredLogin(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onFinish = async () => {
    setLoading(true);
    // get user data
    authCtx.onLogin(enteredLogin, enteredPassword);
    router.push('/profile');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      />
      <Form.Item
        label="Логин"
        name="Логин"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите ваш логин!',
          },
        ]}
      >
        <Input
          style={{ width: 400 }}
          value={enteredLogin}
          onChange={enteredLoginHandler}
          placeholder="Логин"
          type="text"
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="Пароль"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите ваш пароль!',
          },
        ]}
      >
        <Input
          style={{ width: 400 }}
          value={enteredPassword}
          onChange={enteredPasswordHandler}
          placeholder="Пароль"
          id="input_password"
          type="password"
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          htmlType="submit"
          loading={loading}
          style={{ width: 400 }}
          type="primary"
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
}
