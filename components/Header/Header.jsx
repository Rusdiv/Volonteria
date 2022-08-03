import React, { useContext } from 'react';
import Link from 'next/link';

import LogoSVG from '../../public/images/Header/logo.svg';
import NotificationSVG from '../../public/images/Header/notification.svg';
import AuthContext from '../../store/auth-context';

import styles from './Header.module.scss';

export default function Header() {
  const authCtx = useContext(AuthContext);
  const { avatar } = authCtx.userData;

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <LogoSVG />
        <Link href="/">Наше будущее</Link>
      </div>
      <div className={styles.rightBlock}>
        <ul>
          <li>
            <NotificationSVG />
          </li>
          <li>
            <Link href="/profile">
              <img
                src={
                  avatar
                    ? avatar
                    : 'https://sun9-8.userapi.com/impg/sTJ5sw3Wle8z4RNuR7hhwjf86lCWr27L8BRKIQ/0l02DRLY_Rs.jpg?size=1280x881&quality=95&sign=93d17be63082dcf011d1d877ebe9f9ff&type=album'
                }
                alt="avatar"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
