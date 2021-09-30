import React, { useContext } from 'react';
import { UserOutlined } from '@ant-design/icons';

import PersonalBlock from '../../components/Profile/PersonalBlock';
import ContactsBlock from '../../components/Profile/ContactsBlock';
import AchievesBlock from '../../components/Profile/AchievesBlock';
import HistoryBlock from '../../components/Profile/HistoryBlock';

import AuthContext from '../../store/auth-context';

import styles from '../../components/Profile/profile.module.scss';

export default function ProfilePage() {
  const authCtx = useContext(AuthContext);
  const { name, avatar, lastname, email, phone } = authCtx.userData;

  return (
    <div style={{ width: '100%' }}>
      <div>
        <div>
          {avatar ? (
            <img className={styles.avatar} src={avatar} alt="avatar" />
          ) : (
            <UserOutlined />
          )}
          {`${name} ${lastname}`}
          <div className={styles.points}>152</div>
          {email}
          {phone}
        </div>
        <PersonalBlock />
        <ContactsBlock />
      </div>
      <div>
        <HistoryBlock />
        <AchievesBlock />
      </div>
    </div>
  );
}
