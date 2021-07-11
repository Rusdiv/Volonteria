import React from 'react';
import axios from 'axios';

import Achieve from '../../components/Achievements/Achieve';

export default function Achievements({ achievements = [] }) {
  return (
    <ul>
      {achievements.map((achieve) => (
        <Achieve
          key={achieve.id}
          title={achieve.title}
          content={achieve.content}
        />
      ))}
    </ul>
  );
}
export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(
    `http://${req.headers.host}/api/getAchievements`,
  );

  return {
    props: { achievements: data },
  };
};
