import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

import authContext from '../store/auth-context';

const { Sider } = Layout;

export default function Navigation() {
  const { onLogout } = useContext(authContext);
  const router = useRouter();
  const redirect = (url) => {
    router.push(url);
  };
  const PAGES = [
    {
      name: 'Главная',
      url: '/',
      onСlick: redirect,
    },
    {
      name: 'Мероприятия',
      url: '/news',
      onСlick: redirect,
    },
    {
      name: 'Профиль',
      url: '/profile',
      onСlick: redirect,
    },
    {
      name: 'Выход',
      url: '/',
      onСlick: onLogout,
    },
  ];

  const [collapsed, setClolapsed] = useState(false);

  const onCollapse = (collaps) => {
    setClolapsed(collaps);
  };

  return (
    <div>
      <Sider
        style={{ height: '100%' }}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <Menu theme="dark" defaultSelectedKeys={['Профиль']} mode="inline">
          {PAGES.map((menuItem) => (
            <Menu.Item
              onClick={() => menuItem.onСlick(menuItem.url)}
              key={menuItem.name}
            >
              {menuItem.name}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </div>
  );
}
