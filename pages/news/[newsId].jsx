import React, { useContext } from 'react';
import axios from 'axios';

import VolonteerSVG from '../../public/images/events/volonteer.svg';
import DateSVG from '../../public/images/events/date.svg';
import LocationSVG from '../../public/images/events/location.svg';
import AuthContext from '../../store/auth-context';

import styles from '../../components/News/Event.module.scss';

export default function NewsItemPage({
  time = '',
  description = '',
  volCount = 0,
  newsId = 0,
  hostName = '',
  place = ' ',
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

  const year = time[0] + time[1] + time[2] + time[3];
  const mounths = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const day = time[6] + time[7];

  return (
    <div className={styles.event}>
      <div className={styles.card}>
        <h2>О чем это мероприятие?</h2>
        <p>{description}</p>
        <h2>Какая цель у мероприятия?</h2>
        <h2>Требования к волонтерам</h2>
        <ul>
          <li>Воpраст от 16 лет;</li>
          <li>открытость;</li>
          <li>коммуникабельность;</li>
          <li> готовность помогать на улице;</li>
          <li>
            отсутствие симптомов ОРВИ/ОРЗ/Covid-19 в дни мероприятия и за 14
            дней до начала.
          </li>
          <li>
            при необходимости быть готовым предоставить результаты
            отрицательного ПЦР-теста.
          </li>
          <li>
            Функции волонтёров – навигация, информирование участников, встреча и
            сопровождения участников, помощь организаторам в сборе подарков для
            детей.
          </li>
        </ul>
        <h2>График участия</h2>
      </div>
      <div className={styles.registrationBlock}>
        <p>
          <DateSVG />
          {`${day} ${mounths[Number(time[4] + time[5])]} ${year}`}
        </p>
        <p>
          <LocationSVG />
          {place}
        </p>
        <p>
          <VolonteerSVG />
          Требуется
          <span>{Number(volCount)}</span>
          волонтеров
        </p>
        <button type="button" onClick={onRegOnIvent}>
          Зарегистрироваться
        </button>
      </div>
    </div>
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
      place: data.place_value,
    },
  };
};
