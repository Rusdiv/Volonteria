import React from "react";
import axios from "axios";

import Profile from "../../components/Profile/Profile";

export default function ProfilePage(props) {
  return <Profile userData={props} />;
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(`http://${req.headers.host}/api/getUser`);

  return {
    props: data,
  };
};
