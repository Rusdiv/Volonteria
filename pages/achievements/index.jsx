import React from 'react';
import axios from 'axios';

import Achieve from '../../components/Achievements/Achieve';

import styles from '../../styles/achievementsPage.module.css';

export default function Achievements({ achievements = [] }) {
  return (
    <ul className={styles.achievements}>
      {achievements.map((achieve) => (
        <Achieve
          key={achieve.post_id}
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
