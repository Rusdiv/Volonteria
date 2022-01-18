import React from 'react';
import User from './User';

export default function Users({ hours = [] }) {
  return (
    <ul>
      {hours.map((hour) => (
        <>
          {hour.volonteers.map((user) => (
            <User hours={hour.hours} user={user} id={1} />
          ))}
        </>
      ))}
    </ul>
  );
}
