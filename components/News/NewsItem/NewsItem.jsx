import React from 'react';
import { useRouter } from 'next/router';

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
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{pos}</p>
    </button>
  );
}
