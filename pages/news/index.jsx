import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import axios from 'axios';

import NewsList from '../../components/News/NewsList/NewsList';

import styles from '../../components/News/News.module.scss';

import protocol from '../../protocol';

export default function NewsPage({ host = '' }) {
  const [news, setNews] = useState([
    {
      post_id: '369',
      name_value: 'Добровольческая акция «Осенняя неделя добра»',
      description_value:
        'Если Вы чувствуете в себе силы изменять мир к лучшему, готовы к интересной и благодарной работе, то мы будем рады видеть вас в нашей команде волонтерского отряда «Добрая воля НХТИ»! ',
      volunteers_value: '5',
      place_value: 'Большое Афанасово',
      event_time: '20220910',
      telegram_id_value: "Добровольческая акция 'Осенняя неделя добра'",
      event_target:
        ' Посетить приют для животных, принести корм и лакомства для питомцев...',
      event_requirements: 'Быть студентом НХТИ',
      event_timetable: 'С 9:00 до 17:00',
    },
  ]);

  // getting news
  // useEffect(() => {
  //   const fetchNewsData = async () => {
  //     try {
  //       console.info('try to get news');

  //       const { data } = await axios.get(`${protocol}${host}/api/news`);
  //       setNews(data);

  //       console.info('succses get news');
  //     } catch (err) {
  //       console.info(`error with getting news: ${err}`);
  //     }
  //   };
  //   fetchNewsData();
  // }, []);

  return (
    <div className={styles.news}>
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
