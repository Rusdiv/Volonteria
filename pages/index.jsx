import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../store/auth-context';

export default function Home() {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push('/login');
    }
  }, [authCtx.isLoggedIn, router]);

  return <div>Главная</div>;
}
