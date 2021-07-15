import React from 'react';
import PropTypes from 'prop-types';

export default function Achieve({
  id, title, description, points,
}) {
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{points}</p>
    </li>
  );
}

Achieve.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
};
