import React from 'react';

import MyApp from './MyApp';
import { AuthContextProvider } from '../store/auth-context';

import 'antd/dist/antd.css';
import '../styles/globals.css';

function Volonteria(props) {
  return (
    <AuthContextProvider>
      <MyApp {...props} />
    </AuthContextProvider>
  );
}

export default Volonteria;
