import React, { useContext } from 'react';
import { UserOutlined } from '@ant-design/icons';

import ContactsBlock from '../../components/Profile/ContactsBlock';

import AuthContext from '../../store/auth-context';

import styles from '../../components/Profile/profile.module.scss';

export default function ProfilePage() {
  const authCtx = useContext(AuthContext);
  const { name, avatar, lastname, email, phone } = authCtx.userData;

  return (
    <div className={styles.profile}>
      <div className={styles.leftBlock}>
        {avatar ? (
          <img className={styles.avatar} src={avatar} alt="avatar" />
        ) : (
          <UserOutlined />
        )}
        <h3>{`${name} ${lastname}`}</h3>
        <div className={styles.points}>152</div>
        <ContactsBlock email={email} phone={phone} />
      </div>
      {/* <div>
        <HistoryBlock />
        <AchievesBlock />
      </div> */}
    </div>
  );
}
