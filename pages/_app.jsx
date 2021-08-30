import React, { useContext } from 'react';

import LoginPage from './login';
import MyApp from './MyApp';
import AuthContext from '../store/auth-context';

import 'antd/dist/antd.css';
import '../styles/globals.css';

function Volonteria() {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    return <MyApp />;
  }
  return <LoginPage />;
}

export default Volonteria;
