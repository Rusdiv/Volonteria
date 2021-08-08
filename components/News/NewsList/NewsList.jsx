import React from 'react';
import { Row } from 'antd';

import NewsItem from '../NewsItem/NewsItem';

export default function NewsList({ news = [] }) {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      {news.map((event) => (
        <NewsItem
          key={event.post_id}
          date={event.time_value}
          description={event.description_value}
          title={event.name_value}
          count={event.volunteers_value}
          tgId={event.telegram_id_value}
          href={`/news/${event.post_id}`}
        />
      ))}
    </Row>
  );
}
