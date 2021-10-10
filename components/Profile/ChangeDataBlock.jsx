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
        <input value={name} />
      </label>
      <label>
        <span>Фамилия</span>
        <input value={lastname} />
      </label>
      <label>
        <span>E-mail</span>
        <input value={email} />
      </label>
      <label>
        <span>E-mail</span>
        <div>
          <input className={styles.day} value="12" />
          <input className={styles.birth} value="октября" />
          <input className={styles.birth} value="2005" />
        </div>
      </label>
      <label>
        <span>Пол</span>
        <input value="Мужской" />
      </label>
      <label>
        <span>Университет</span>
        <input />
      </label>
    </div>
  );
}
