import React from 'react';
import axios from 'axios';

export default function Contacts() {
  const handleSubmit = () => {
    axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_c0h57cc',
      template_id: 'volonteria',
      user_id: 'user_tEiVSWn2tmbfhXnLFHj0G',
      template_params: {
        name: 'Test',
        email: 'example.com',
        message: 'text',
      },
    });
  };

  return (
    <div>
      <button type="button" onClick={handleSubmit}>
        Отправить
      </button>
    </div>
  );
}
