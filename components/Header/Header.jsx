import React, { useContext } from 'react';
import Link from 'next/link';
import { Button, Layout, Menu } from 'antd';

import authContext from '../../store/auth-context';

const { Header } = Layout;

export default function HeaderComponent() {
  const { isLoggedIn, onLogout } = useContext(authContext);
  const PAGES = [
    {
      name: 'Главная',
      url: '/',
    },
    {
      name: 'Новости',
      url: '/news',
    },
    {
      name: 'Профиль',
      url: '/profile',
    },
    {
      name: 'Достижения',
      url: '/achievements',
    },
  ];

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {PAGES.map((item) => (
            <Menu.Item key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </Menu.Item>
          ))}
          {isLoggedIn && (
            <Menu.Item key="login">
              <Button onClick={onLogout}>Выход</Button>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </Layout>
  );
}
