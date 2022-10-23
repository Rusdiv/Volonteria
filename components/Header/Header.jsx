import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LogoSVG from '../../public/images/Header/logo.svg';
import SearchSVG from '../../public/images/Header/search.svg';
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
          <li className={styles.avatarBlock}>
            <Link href="/profile">
              <Image
                className={styles.user_avatar}
                width={40}
                height={40}
                src="/#"
                alt="avatar"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
