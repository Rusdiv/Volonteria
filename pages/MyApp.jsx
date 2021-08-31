import React, { useContext, useEffect, useState } from 'react';
import { Layout } from 'antd';

import Navigation from '../components/Navigation';
import AuthContext from '../store/auth-context';
import LoginPage from './login';

const { Content } = Layout;

function MyApp({ Component, pageProps }) {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Layout style={{ padding: '24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyApp;
