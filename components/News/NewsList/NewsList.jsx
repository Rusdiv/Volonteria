import React from 'react';

import NewsItem from '../NewsItem/NewsItem';

import styles from './NewsList.module.css';

export default function NewsList({ news = [] }) {
  return (
    <ul className={styles.newsList}>
      {news.map((event) => (
        <div>
          <NewsItem
            key={event.post_id}
            date={event.time_value}
            description={event.description_value}
            title={event.name_value}
            count={event.volunteers_value}
            tgId={event.telegram_id_value}
            href={`/news/${event.post_id}`}
          />
        </div>
      ))}
    </ul>
  );
}
