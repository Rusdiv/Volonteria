import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import AuthContext from '../../store/auth-context';

export default function ProfilePage() {
  const authCtx = useContext(AuthContext);
  const {
    name,
    id,
    avatar,
    points,
  } = authCtx.userData;
  const { isLoggedIn } = authCtx;

  const router = useRouter();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push('/login');
    }
  }, [authCtx.isLoggedIn, router]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>{name}</h2>
          <Avatar
            size={64}
            icon={avatar ? <img src={avatar} alt="avatar" /> : <UserOutlined />}
          />
          <div>
            id:
            {id}
          </div>
          {points}
        </div>
      ) : (
        <p>Войдите в аккаунт</p>
      )}
    </div>
  );
}
