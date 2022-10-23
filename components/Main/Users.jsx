import React from 'react';
import User from './User';

export default function Users({ users = [] }) {
  return (
    <ul>
      {users.map((user, index) => (
        <User user={user} id={index + 1} />
      ))}
    </ul>
  );
}
