import React from 'react';

export default function ContactsData({ email = '', phone = '' }) {
  return (
    <div>
      <h4>Контактные данные</h4>
      <div>
        E-mail
        <p>{email}</p>
      </div>
      <div>
        Телефон
        <p>{phone}</p>
      </div>
      <div>
        Адрес
        <p>{phone}</p>
      </div>
      <div>
        Telegram
        <p>{phone}</p>
      </div>
    </div>
  );
}
