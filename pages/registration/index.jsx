import React, { useState } from 'react';
import axios from 'axios';

export default function RegistrationPage() {
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const enteredLoginHandler = (event) => {
    setEnteredLogin(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const onSubmitForm = async (event) => {
    await axios.post('api/createNewUser', {
      username: enteredLogin,
      password: enteredPassword,
      email: enteredEmail,
    });

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Логин"
        onChange={enteredLoginHandler}
        value={enteredLogin}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={enteredEmailHandler}
        value={enteredEmail}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        onChange={enteredPasswordHandler}
        value={enteredPassword}
        required
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
