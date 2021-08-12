import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import Achieve from '../../components/Achievements/Achieve';
import AuthContext from '../../store/auth-context';

import styles from '../../styles/achievementsPage.module.css';

export default function Achievements({ achievements = [] }) {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.push('/login');
    }
  }, [authCtx.isLoggedIn]);

  return (
    <ul className={styles.achievements}>
      {achievements.map((achieve) => (
        <Achieve
          key={achieve.post_id}
          id={achieve.post_id}
          title={achieve.name_value}
          description={achieve.description_value}
          points={achieve.points_value}
        />
      ))}
    </ul>
  );
}
export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(`http://${req.headers.host}/api/achieves`);

  return {
    props: { achievements: data },
  };
};
