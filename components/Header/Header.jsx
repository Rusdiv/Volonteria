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
        <Link href="/">200-300</Link>
      </div>
      <div className={styles.rightBlock}>
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
