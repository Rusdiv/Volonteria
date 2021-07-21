import React, { useContext } from 'react';

import AuthContext from '../store/auth-context';

export default function ProfilePage() {
  const authCtx = useContext(AuthContext);
  const { name, id } = authCtx.userData;
  const { isLoggedIn } = authCtx;
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>{name}</h2>
          <img src={authCtx.userData.avatar_urls[96]} alt="avatar" />
          <div>
            id:
            {id}
          </div>
        </div>
      ) : (
        <p>Войдите в аккаунт</p>
      )}
    </div>
  );
}
