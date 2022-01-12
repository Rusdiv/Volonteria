import React from 'react';
import User from './User';

export default function Users({ hours = [] }) {
  return (
    <ul>
      {hours.map((hour) => (
        <>
          {hour.volonteers.map((user, index) => (
            <User hours={hour.hours} user={user} id={index + 1} />
          ))}
        </>
      ))}
    </ul>
  );
}
