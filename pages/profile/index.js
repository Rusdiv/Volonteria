import React from "react";
import axios from "axios";
import _get from "lodash/get";

export default function ProfilePage({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_urls[96]} alt="avatar" />
      <div>id: {user.id}</div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(`http://${req.headers.host}/api/getUser`);

  return {
    props: { user: data },
  };
};
