import React, { useState } from 'react';
import axios from 'axios';

export default function SetingsPage() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const enteredLoginHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const onSubmitForm = async (event) => {
    await axios.post('api/settings', {
      name: enteredName,
    });

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Логин"
        onChange={enteredLoginHandler}
        value={enteredName}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={enteredEmailHandler}
        value={enteredEmail}
        required
      />
      <button type="submit">Изменить данные</button>
    </form>
  );
}
