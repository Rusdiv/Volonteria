import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

export default function Header() {
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
    {
      name: 'Настройки',
      url: '/settings',
    },
  ];

  return (
    <header className={styles.header}>
      <ul className={styles.navigation}>
        {PAGES.map((item) => (
          <li key={item.name} className={styles.item}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
