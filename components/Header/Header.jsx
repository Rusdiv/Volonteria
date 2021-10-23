import React, { useContext } from 'react';
import Link from 'next/link';

import LogoSVG from '../../public/images/Header/logo.svg';
// import SearchSVG from '../../public/images/Header/search.svg';
// import NotificationSVG from '../../public/images/Header/notification.svg';
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
        {/* <div className={styles.search}>
          <SearchSVG />
          <input type="text" />
        </div> */}

        <ul>
          {/* <li>
            <NotificationSVG />
          </li> */}
          <li>
            <Link href="/profile">
              {avatar ? (
                <img src={avatar} alt="avatar" />
              ) : (
                <img
                  src={
                    'https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1635018513~hmac=56392d7e4d5900a0cadd2e278f4748bd'
                  }
                  alt="avatar"
                />
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
