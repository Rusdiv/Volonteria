import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from '../../styles/newsItemPage.module.css';

export default function NewsItemPage({
  id,
  time,
  description,
  name,
  tgId,
  volCount,
}) {
  return (
    <div className={styles.item}>
      <h2 className={styles.title}>{name}</h2>
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
    </div>
  );
}

NewsItemPage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  volCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tgId: PropTypes.string.isRequired,
};

export const getServerSideProps = async (context) => {
  const { newsId } = context.params;
  const { req } = context;
  const { data } = await axios.get(
    `http://${req.headers.host}/api/news/${newsId}`,
  );

  return {
    props: {
      id: data.post_id,
      time: data.time_value,
      name: data.name_value,
      volCount: data.volunteers_value,
      tgId: data.telegram_id_value,
      description: data.description_value,
    },
  };
};
