import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Spin } from 'antd';
import Users from './Users';

import styles from './Rating.module.scss';

import protocol from '../../protocol';

export default function Rating({ host = '' }) {
  const [users, setUsers] = useState([]);
  const usersArr = [
    {
      user_login: 'Петр',
      avatar:
        'https://sun9-west.userapi.com/sun9-68/s/v1/ig2/x7hQ5Si8hv4TGSgHaVT3t78R_bmMR86Ka6SD3rH60GRuHfYuNUCcyUum48clp-sNANJ31IF9YaruWaJBvzZh9t-n.jpg?size=500x695&quality=96&type=album',
      points: '1434',
      hours: 1488,
    },
    {
      user_login: 'Ермек',
      avatar:
        'https://i.pinimg.com/564x/19/ad/ba/19adba7d8e5fe6d05ff48e208675d6fb.jpg',
      points: '657',
      hours: 567,
    },
    {
      user_login: 'Александр',
      avatar:
        'https://sun9-80.userapi.com/impg/o3j7ERIqJ2jPckrpsH0QbC_6FuYraj5kQ4avMg/_e_odOo89nA.jpg?size=1168x1074&quality=95&sign=350376a7ff2d4c6918fe4ae162ee76fa&type=album',
      points: '234',
      hours: 125,
    },
    {
      user_login: 'Руслан',
      avatar:
        'https://i.pinimg.com/564x/19/c4/38/19c438a778a060fbbf575a8b4d7a2e89.jpg',
      points: '56',
      hours: 26,
    },
  ];
  // useEffect(() => {
  //   const fetchNewsData = async () => {
  //     try {
  //       console.info('try to get rating');

  //       const { data } = await axios.get(`${protocol}${host}/api/rating`);
  //       const fetchUsers = data.map((item) =>
  //         item.volonteers.map((user) => user),
  //       );
  //       for (let i = 0; i < fetchUsers.length; i++) {
  //         for (let j = 0; j < fetchUsers[i].length; j++) {
  //           usersArr.push(fetchUsers[i][j]);
  //         }
  //       }
  //       console.log(usersArr);
  //       setUsers(usersArr);
  //     } catch (err) {
  //       console.info(`error with getting news: ${err}`);
  //     }
  //   };
  //   fetchNewsData();
  // }, []);
  return (
    <div className={styles.rating}>
      <div className={styles.container}>
        <p>Рейтинг волонтеров</p>
        <ul>{usersArr.length > 0 ? <Users users={usersArr} /> : <Spin />}</ul>
      </div>
    </div>
  );
}
