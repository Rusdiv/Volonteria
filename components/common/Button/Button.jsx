import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

export default function Button({ children, onClick = () => {}, type }) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
