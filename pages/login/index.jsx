import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input, Button, Form } from 'antd';

import AuthContext from '../../store/auth-context';

export default function LoginPage() {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      router.push('/profile');
    } else {
      setLoading(false);
    }
  }, [authCtx.isLoggedIn, router, enteredLogin, enteredPassword]);

  const enteredLoginHandler = (event) => {
    setEnteredLogin(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onFinish = async () => {
    setLoading(true);
    authCtx.onLogin(enteredLogin, enteredPassword);
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
