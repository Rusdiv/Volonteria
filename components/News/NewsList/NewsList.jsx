import React from 'react';

import NewsItem from '../NewsItem/NewsItem';

import styles from './NewsList.module.css';

export default function NewsList({ news = [] }) {
  return (
    <ul className={styles.newsList}>
      {news.map(({
        title, content, date, id,
      }) => (
        <NewsItem key={id} date={date} content={content} title={title} />
      ))}
    </ul>
  );
}
