import React from 'react';

import styles from './profile.module.scss';

export default function ContactsData({ email = '', phone = '' }) {
  return (
    <div className={styles.contacts}>
      <h4>Контактные данные</h4>
      <div>
        <span>E-mail</span>
        <p>{email}</p>
      </div>
      <div>
        <span>Телефон</span>
        <p>{phone}</p>
      </div>
      <div>
        <span>Адрес</span>
        <p>{phone}</p>
      </div>
      <div>
        <span>Telegram</span>
        <p>{phone}</p>
      </div>
    </div>
  );
}
