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
  pos = '',
}) {
  const router = useRouter();
  const onCardClick = (url) => {
    router.push(url);
  };
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
        <span>18 сентября 2021</span>
        {date}
      </p>
      <p>
        <LocationSVG />
        <span>ул. Юности, 14-б</span>
        {pos}
      </p>
    </button>
  );
}
