import React, { useState, useContext, useEffect } from 'react';
import * as pino from 'pino';
import Link from 'next/link';

import Input from '../../components/Common/Input';
import LoginButton from '../../components/Login/LoginButton/LoginButton';
import AuthContext from '../../store/auth-context';

import styles from '../../components/Login/Login.module.scss';

export default function LoginPage() {
  const logger = pino({
    prettyPrint: true,
  });

  const [inputType, setInputType] = useState('password');
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [loading, setLoading] = useState('');

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    setLoading(false);
  }, [enteredLogin, enteredPassword]);

  const enteredLoginHandler = (event) => {
    setEnteredLogin(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onShowPassword = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  const onFinish = async () => {
    setLoading(true);
    logger.info('start getting user data');
    // get user data
    authCtx.onLogin(enteredLogin, enteredPassword);
  };

  return (
    <form className={styles.login}>
      <div className={styles.header}>
        <h1>Добро пожаловать на сайт</h1>
        <span>Волонтерия</span>
      </div>
      <Input
        required
        name="Логин"
        type="text"
        placeholder="Введите ваш e-mail"
        onChange={enteredLoginHandler}
        value={enteredLogin}
      />
      <Input
        required
        name="Пароль"
        type={inputType}
        placeholder="********"
        onChange={enteredPasswordHandler}
        value={enteredPassword}
        onClick={onShowPassword}
        endlessType="password"
      />
      <div className={styles.checkboxPassword}>
        <label>
          <input type="checkbox" />
          Запомнить меня
        </label>
        <p>Забыли пароль?</p>
      </div>
      <LoginButton disabled={loading} onClick={onFinish}>
        Войти
      </LoginButton>
      <p className={styles.footer}>
        Нет аккаунта?
        <Link href="http://t0toro-wordpress.tw1.ru/wp-login.php?action=register">
          Регистрация
        </Link>
      </p>
    </form>
  );
}
