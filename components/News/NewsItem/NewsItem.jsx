import React from 'react';
import { useRouter } from 'next/router';

import PhotoSVG from '../../../public/images/photo.svg';
import DateSVG from '../../../public/images/events/date.svg';
import LocationSVG from '../../../public/images/events/location.svg';

import styles from './NewsItem.module.scss';

export default function NewsItem({
  title = '',
  href = '',
  date = '',
  place = '',
}) {
  const router = useRouter();
  const onCardClick = (url) => {
    router.push(url);
  };

  const year = date[0] + date[1] + date[2] + date[3];
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

  const day = date[6] + date[7];
  return (
    <button
      className={styles.card}
      onClick={() => onCardClick(href)}
      type="button"
    >
      <PhotoSVG />
      <h2>{title}</h2>
      <p>
        <DateSVG />
        <span>{`${day} ${mounths[Number(date[4] + date[5])]} ${year}`}</span>
      </p>
      <p>
        <LocationSVG />
        <span>{place}</span>
      </p>
    </button>
  );
}
