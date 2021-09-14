import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import axios from 'axios';

import NewsList from '../../components/News/NewsList/NewsList';

export default function NewsPage({ host = '' }) {
  const [news, setNews] = useState([]);

  // getting news
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        console.info('try to get news');

        const { data } = await axios.get(`https://${host}/api/news`);
        setNews(data);

        console.info('succses get news');
      } catch (err) {
        console.info(`error with getting news: ${err}`);
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
