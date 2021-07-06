import React from "react";
import axios from "axios";

import Achievements from "../../components/Achievements/Achievements";

export default function AchievementsPage(props) {
  return <Achievements achievementsData={props} />;
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(
    `http://${req.headers.host}/api/getAchievements`
  );

  return {
    props: { data },
  };
};
