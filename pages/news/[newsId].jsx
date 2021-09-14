import React, { useContext } from 'react';
import { Card, Button } from 'antd';
import axios from 'axios';

import AuthContext from '../../store/auth-context';

export default function NewsItemPage({
  id = 0,
  time = '',
  description = '',
  name = '',
  tgId = 0,
  volCount = 0,
  newsId = 0,
  hostName = '',
}) {
  const authCtx = useContext(AuthContext);
  const userId = authCtx.userData.id;

  const onRegOnIvent = async () => {
    try {
      console.log('start registration on event');
      axios.post(`https://${hostName}/api/news/regOnEvent`, {
        event_id: Number(newsId),
        user_id: userId,
      });
    } catch (err) {
      console.log('fail to registration on event', err);
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
      <a href={tgId}>{tgId}</a>
      <p>
        Время проведения:
        {time}
      </p>
      <Button onClick={onRegOnIvent}>Зарегистрироваться</Button>
    </Card>
  );
}

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
