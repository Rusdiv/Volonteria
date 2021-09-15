import React from 'react';
import styles from './Input.module.scss';

export default function Input({
  placeholder = '',
  onChange = () => {},
  value = null,
  name = null,
  required = false,
  type = 'text',
}) {
  return (
    <div className={styles.input}>
      <p>{name}</p>
      {required ? <span>*</span> : <></>}
      <input
        required
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {type === 'password' ? <button type="button" /> : <></>}
    </div>
  );
}
