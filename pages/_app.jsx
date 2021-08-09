import React from 'react';
import { Layout } from 'antd';

import Navigation from '../components/Navigation';
import { AuthContextProvider } from '../store/auth-context';

import 'antd/dist/antd.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Navigation />
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
