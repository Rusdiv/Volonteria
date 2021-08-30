import React from 'react';
import { Layout } from 'antd';

import Navigation from '../components/Navigation';
import { AuthContextProvider } from '../store/auth-context';

const { Content } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
}

export default MyApp;
