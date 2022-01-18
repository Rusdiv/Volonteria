import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Spin } from 'antd';
import Users from './Users';

import styles from './Rating.module.scss';

import protocol from '../../protocol';

export default function Rating({ host = '' }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        console.info('try to get rating');

        const { data } = await axios.get(`${protocol}${host}/api/rating`);
        const fetchUsers = data.map((item) => item.volonteers.map((user) => user));
        setUsers(fetchUsers);
        console.log(fetchUsers);
      } catch (err) {
        console.info(`error with getting news: ${err}`);
      }
    };
    fetchNewsData();
  }, []);
  return (
    <div className={styles.rating}>
      <div className={styles.container}>
        <p>Рейтинг волонтеров</p>
        <ul>{users.length > 0 ? <Users hours={users} /> : <Spin />}</ul>
      </div>
      <img
        className={styles.ad}
        alt="ad"
        src="https://sun9-50.userapi.com/impg/0u3UL-XE7qRT95dYuDvLPEQXQRfoNhrTTG_WOQ/dKHjf9edQSI.jpg?size=1600x1600&quality=95&sign=e013d441300431af38f98282908fad0e&type=album"
      />
    </div>
  );
}
