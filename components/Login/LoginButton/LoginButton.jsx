import React from 'react';

import styles from './LoginButton.module.scss';

export default function LoginButton({
  children = null,
  onClick = () => {},
  disabled = false,
}) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}
