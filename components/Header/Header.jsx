import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { HamburgerSlider } from 'react-animated-burgers';

import LogoSVG from '../../public/images/Header/logo.svg';
import SearchSVG from '../../public/images/Header/search.svg';
import NotificationSVG from '../../public/images/Header/notification.svg';
import AuthContext from '../../store/auth-context';

import styles from './Header.module.scss';

export default function Header() {
  const authCtx = useContext(AuthContext);
  const { avatar } = authCtx.userData;
  const [burger, setBurger] = useState(false);

  return (
    <div className={styles.header}>
      <HamburgerSlider
        isActive={burger}
        toggleButton={() => setBurger(!burger)}
        className={styles.burger}
      />
      <div className={styles.logo}>
        <LogoSVG />
        <Link href="/">Волонтерия</Link>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.search}>
          <SearchSVG />
          <input type="text" />
        </div>

        <ul>
          <li>
            <NotificationSVG />
          </li>
          <li>
            <Link href="/profile">
              <img src={avatar} alt="avatar" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
