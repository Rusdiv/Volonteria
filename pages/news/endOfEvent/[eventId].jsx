import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import AuthContext from '../../../store/auth-context';

export default function endOfEvent({ eventId, hostName }) {
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.post(`https://${hostName}/api/news/endOnEvent`, {
          newsId: Number(eventId),
          user_id: userData.id,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return <div>Спасибо за участие!</div>;
}

export const getServerSideProps = async (context) => {
  const { eventId } = context.params;
  const { req } = context;

  return {
    props: {
      eventId,
      hostName: req.headers.host,
    },
  };
};
