import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import authContext from '../../store/auth-context';

import eventsSVG from '../../public/images/Navigation/events.svg';
import profileSVG from '../../public/images/Navigation/profile.svg';
import exitSVG from '../../public/images/Navigation/exit.svg';
import contactSVG from '../../public/images/Navigation/contact.svg';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const { onLogout } = useContext(authContext);
  const router = useRouter();
  const redirect = (url) => {
    router.push(url);
  };

  const PAGES = [
    {
      img: eventsSVG,
      name: 'События',
      url: '/news',
      onСlick: redirect,
      active: false,
    },
    {
      img: profileSVG,
      name: 'Профиль',
      url: '/profile',
      onСlick: redirect,
      active: false,
    },
    {
      img: exitSVG,
      name: 'Выход',
      url: '/',
      onСlick: onLogout,
      active: false,
    },
    {
      img: contactSVG,
      name: 'Связь',
      url: '/Contacts',
      onСlick: redirect,
      active: false,
    },
  ];

  PAGES.forEach((item) => {
    if (router.pathname === item.url) {
      item.active = true;
    }
  });

  return (
    <div className={styles.navigation}>
      {PAGES.map((menuItem) => (
        <button
          type="button"
          onClick={() => menuItem.onСlick(menuItem.url)}
          key={menuItem.name}
          className={menuItem.active ? styles.active : ''}
        >
          <menuItem.img />
          <span>{menuItem.name}</span>
        </button>
      ))}
    </div>
  );
}
