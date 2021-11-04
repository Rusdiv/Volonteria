import React from 'react';

import styles from './profile.module.scss';
import ProfileSelect from './ProfileSelect';

export default function ChangeDataBlock({
  name = '',
  surname = '',
  email = '',
  date = '',
  gender = '',
  ed = '',
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
        <input disabled value={surname} />
      </label>
      <label>
        <span>E-mail</span>
        <input disabled value={email} />
      </label>
      <label>
        <span>Дата рождения</span>
        <div>
          <ProfileSelect
            className={`${styles.customSelect} ${styles.day}`}
            defaultValue={date[6] + date[7]}
          />
          <ProfileSelect
            className={`${styles.customSelect} ${styles.birth}`}
            defaultValue={mounths[Number(date[4] + date[5] - 1)]}
            values={mounths}
          />
          <ProfileSelect
            className={`${styles.customSelect} ${styles.birth}`}
            defaultValue={year}
          />
          {/* <input disabled className={styles.day} value={date[6] + date[7]} />
          <input
            disabled
            className={styles.birth}
            value={mounths[Number(date[4] + date[5] - 1)]}
          />
          <input disabled className={styles.birth} value={year} /> */}
        </div>
      </label>
      <label>
        <span>Пол</span>
        <input disabled value={gender} />
      </label>
      <label>
        <span>Университет</span>
        <input disabled value={ed} />
      </label>
    </div>
  );
}
