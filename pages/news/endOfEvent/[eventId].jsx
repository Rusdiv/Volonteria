import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';

export default function endOfEvent({ eventId, hostName }) {
  const { userData } = useContext(AuthContext);
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = axios.post(
          `https://${hostName}/api/news/endOfEvent`,
          {
            newsId: Number(eventId),
            user_id: userData.id,
          },
        );
        setData(eventData.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {eventId}
      <p>
        {data === 'U were not registrated on this event' ? (
          <div>Вы не зарегестрированны</div>
        ) : (
          <div>Смотреть нетворк</div>
        )}
      </p>
    </div>
  );
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
