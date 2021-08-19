import React from 'react';
import { Layout } from 'antd';

import Navigation from '../components/Navigation';
import { AuthContextProvider } from '../store/auth-context';

import 'antd/dist/antd.css';
import '../styles/globals.css';
import ProtectedRoute from '../helpers/ProtectedRoute';

const { Content } = Layout;

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthContextProvider>
      <ProtectedRoute router={router}>
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
      </ProtectedRoute>
    </AuthContextProvider>
  );
}

export default MyApp;
