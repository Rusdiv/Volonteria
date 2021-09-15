import React from 'react';

import styles from './LoginButton.module.scss';

export default function LoginButton({ children = null, onClick = () => {} }) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  );
}
