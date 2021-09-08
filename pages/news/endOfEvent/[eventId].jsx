import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';

export default function endOfEvent({ eventId }) {
  const { userData } = useContext(AuthContext);
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setData(
        await axios.post(
          `http://t0toro-wordpress.tw1.ru/wp-json/vl/v1/end/event/${eventId}`,
          {
            event_id: eventId,
            user_id: userData.id,
          },
        ).data,
      );
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

  return {
    props: {
      eventId,
    },
  };
};
