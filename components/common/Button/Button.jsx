import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

export default function Button({
  children,
  onClick = () => {},
  type = 'button',
}) {
  return (
    <button className={`${styles.button}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
