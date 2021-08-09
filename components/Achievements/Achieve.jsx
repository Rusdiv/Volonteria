import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

export default function Achieve({
  id,
  title,
  description,
  points,
}) {
  return (
    <Card key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        Очков за выполнение:
        {points}
      </p>
    </Card>
  );
}

Achieve.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired,
};
