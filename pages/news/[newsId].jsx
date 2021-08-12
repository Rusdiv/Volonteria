import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, Button } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';

import AuthContext from '../../store/auth-context';

import styles from '../../styles/newsItemPage.module.css';

export default function NewsItemPage({
  id,
  time,
  description,
  name,
  tgId,
  volCount,
  newsId,
  hostName,
}) {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const userId = authCtx.userData.id;

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push('/login');
    }
  }, [authCtx.isLoggedIn]);

  const onRegOnIvent = async () => {
    try {
      axios.post(`https://${hostName}/api/news/regOnEvent`, {
        newsId,
        user_id: userId,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card title={name}>
      <p>{description}</p>
      <p>
        id мероприятия:
        {id}
      </p>
      <p>
        Требуемое количество волонтеров:
        {volCount}
      </p>
      <span>Присоединиться к чату мероприятия: </span>
      <a className={styles.link} href={tgId}>
        {tgId}
      </a>
      <p className={styles.time}>
        Время проведения:
        {time}
      </p>
      <Button onClick={onRegOnIvent}>Зарегистрироваться</Button>
    </Card>
  );
}

NewsItemPage.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  volCount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tgId: PropTypes.string.isRequired,
  newsId: PropTypes.number.isRequired,
  hostName: PropTypes.string.isRequired,
};

export const getServerSideProps = async (context) => {
  const { newsId } = context.params;
  const { req } = context;
  const { data } = await axios.get(
    `https://${req.headers.host}/api/news/${newsId}`,
  );

  return {
    props: {
      id: data.post_id,
      time: data.time_value,
      name: data.name_value,
      volCount: data.volunteers_value,
      tgId: data.telegram_id_value,
      description: data.description_value,
      newsId,
      hostName: req.headers.host,
    },
  };
};
