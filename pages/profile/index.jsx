import React, { useContext } from 'react';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import PersonalBlock from '../../components/Profile/PersonalBlock';
import ContactsBlock from '../../components/Profile/ContactsBlock';
import AchievesBlock from '../../components/Profile/AchievesBlock';
import HistoryBlock from '../../components/Profile/HistoryBlock';

import AuthContext from '../../store/auth-context';

import styles from '../../components/Profile/profile.module.scss';

export default function ProfilePage() {
  const authCtx = useContext(AuthContext);
  const { name, avatar } = authCtx.userData;

  return (
    <div style={{ width: '100%' }}>
      <div>
        <Avatar
          size={64}
          icon={avatar ? <img src={avatar} alt="avatar" /> : <UserOutlined />}
        />
        <h1 className={styles.avatar}>{name}</h1>
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
