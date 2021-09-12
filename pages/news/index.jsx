import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import axios from 'axios';
import logger from 'pino';

import NewsList from '../../components/News/NewsList/NewsList';

export default function NewsPage({ host = '' }) {
  const [news, setNews] = useState([]);

  // getting news
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        logger.info('try to get news');

        const { data } = await axios.get(`https://${host}/api/news`);
        setNews(data);

        logger.info('succses get news');
      } catch (err) {
        logger.error(`error with getting news: ${err}`);
      }
    };
    fetchNewsData();
  }, []);

  return (
    <div>
      <h1>Мероприятия</h1>
      {news.length > 0 ? <NewsList news={news} /> : <Spin />}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { req } = context;

  return {
    props: { host: req.headers.host },
  };
};
