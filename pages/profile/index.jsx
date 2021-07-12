import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Link from 'next/link';

export default function ProfilePage({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_urls[96]} alt="avatar" />
      <div>
        id:
        {user.id}
      </div>
      <br />
      <Link href="/profile/change">Поменять данные профиля</Link>
    </div>
  );
}

ProfilePage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_urls: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(`http://${req.headers.host}/api/getUser`);

  return {
    props: { user: data },
  };
};
