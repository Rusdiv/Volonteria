import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/Common/Input/Input';
import Button from '../components/Common/Button/Button';

export default function Contacts() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_c0h57cc',
      template_id: 'volonteria',
      user_id: 'user_tEiVSWn2tmbfhXnLFHj0G',
      template_params: {
        name: { enteredName },
        email: { enteredEmail },
        message: { enteredMessage },
      },
    });
  };

  return (
    <form style={{ margin: '0 auto' }}>
      <Input
        name="email"
        type="email"
        value={enteredEmail}
        onChange={(e) => setEnteredEmail(e.target.value)}
        placeholder="email"
        required
      />
      <Input
        name="Ваше имя"
        type="text"
        value={enteredName}
        onChange={(e) => setEnteredName(e.target.value)}
        placeholder="имя"
        required
      />
      <Input
        name="Сообщение"
        type="text"
        value={enteredMessage}
        onChange={(e) => setEnteredMessage(e.target.value)}
        placeholder="Сообщение"
        required
      />
      <Button type="submit" onClick={handleSubmit}>
        Отправить
      </Button>
    </form>
  );
}
