import React from 'react';

import styles from './profile.module.scss';

export default function ChangeDataBlock({
  name = '',
  lastname = '',
  email = '',
  date = '',
}) {
  const year = date[0] + date[1] + date[2] + date[3];
  const mounths = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return (
    <div className={styles.inputBlock}>
      <label>
        <span>Имя</span>
        <input disabled value={name} />
      </label>
      <label>
        <span>Фамилия</span>
        <input disabled value={lastname} />
      </label>
      <label>
        <span>E-mail</span>
        <input disabled value={email} />
      </label>
      <label>
        <span>Дата рождения</span>
        <div>
          <input disabled className={styles.day} value={date[6] + date[7]} />
          <input
            disabled
            className={styles.birth}
            value={mounths[Number(date[4] + date[5] - 1)]}
          />
          <input disabled className={styles.birth} value={year} />
        </div>
      </label>
      <label>
        <span>Пол</span>
        <input disabled value="Мужской" />
      </label>
      <label>
        <span>Университет</span>
        <input disabled />
      </label>
    </div>
  );
}
