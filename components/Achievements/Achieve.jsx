import React from 'react';
import PropTypes from 'prop-types';

export default function Achieve({ id, title, content }) {
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
}

Achieve.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
