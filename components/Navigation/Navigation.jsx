import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import authContext from '../../store/auth-context';

import HomeSVG from '../../public/images/Navigation/home.svg';
import eventsSVG from '../../public/images/Navigation/events.svg';
import profileSVG from '../../public/images/Navigation/profile.svg';
import exitSVG from '../../public/images/Navigation/exit.svg';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const { onLogout } = useContext(authContext);
  const router = useRouter();
  const redirect = (url) => {
    router.push(url);
  };
  const PAGES = [
    {
      img: HomeSVG,
      name: 'Главная',
      url: '/',
      onСlick: redirect,
    },
    {
      img: eventsSVG,
      name: 'События',
      url: '/news',
      onСlick: redirect,
    },
    {
      img: profileSVG,
      name: 'Профиль',
      url: '/profile',
      onСlick: redirect,
    },
    {
      img: exitSVG,
      name: 'Выход',
      url: '/',
      onСlick: onLogout,
    },
    {
      name: 'Связь',
      url: '/Contacts',
      onСlick: redirect,
    },
  ];

  return (
    <div className={styles.navigation}>
      {PAGES.map((menuItem) => (
        <button
          type="button"
          onClick={() => menuItem.onСlick(menuItem.url)}
          key={menuItem.name}
        >
          <menuItem.img />
          <span>{menuItem.name}</span>
        </button>
      ))}
    </div>
  );
}
