import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';

import styles from './profile.module.scss';

export default function ChangeDataBlock() {
  const authCtx = useContext(AuthContext);
  const { name, lastname, email } = authCtx.userData;

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
          <input disabled className={styles.day} value="12" />
          <input disabled className={styles.birth} value="октября" />
          <input disabled className={styles.birth} value="2005" />
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
