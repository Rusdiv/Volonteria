import React, { useState } from 'react';
import axios from 'axios';

import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';

import styles from '../../styles/settingsPage.module.css';

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
    <form className={styles.settings} onSubmit={onSubmitForm}>
      <Input
        type="text"
        placeholder="Логин"
        onChange={enteredLoginHandler}
        value={enteredName}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={enteredEmailHandler}
        value={enteredEmail}
        required
      />
      <Button type="submit">Изменить данные</Button>
    </form>
  );
}
