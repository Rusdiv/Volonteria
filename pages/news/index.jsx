import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import NewsList from '../../components/News/NewsList/NewsList';
import AuthContext from '../../store/auth-context';

export default function NewsPage({ news = [] }) {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push('/login');
    }
  }, [authCtx.isLoggedIn, router]);

  return <NewsList news={news} />;
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(`http://${req.headers.host}/api/news`);

  return {
    props: { news: data },
  };
};
