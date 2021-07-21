import React from 'react';

import Header from '../components/Header/Header';
import { AuthContextProvider } from '../store/auth-context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Header />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
