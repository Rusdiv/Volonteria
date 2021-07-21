import React, { useState, useContext } from 'react';

import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';
import AuthContext from '../store/auth-context';

import styles from '../../styles/loginPage.module.css';

export default function LoginPage() {
  const authCtx = useContext(AuthContext);
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const enteredLoginHandler = (event) => {
    setEnteredLogin(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onSubmitForm = async (event) => {
    authCtx.onLogin(enteredLogin, enteredPassword);

    event.preventDefault();
  };

  return (
    <form className={styles.login}>
      <Input
        value={enteredLogin}
        onChange={enteredLoginHandler}
        placeholder="Логин"
        type="text"
      />
      <Input
        value={enteredPassword}
        onChange={enteredPasswordHandler}
        placeholder="Пароль"
        type="password"
      />
      <Button type="button" onClick={onSubmitForm}>
        Войти
      </Button>
    </form>
  );
}
