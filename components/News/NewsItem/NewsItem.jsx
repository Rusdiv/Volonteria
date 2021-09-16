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
        <span>{date}</span>
      </p>
      <p>
        <LocationSVG />
        <span>{place}</span>
      </p>
    </button>
  );
}
