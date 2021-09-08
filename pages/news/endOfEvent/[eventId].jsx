import React, { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';

export default function endOfEvent({ eventId }) {
  return <div>{eventId}</div>;
}

export const getServerSideProps = async (context) => {
  const { userData } = useContext(AuthContext);
  const { eventId } = context.params;
  axios.post(
    `http://t0toro-wordpress.tw1.ru/wp-json/vl/v1/end/event${eventId}`,
    {
      event_id: eventId,
      user_id: userData.id,
    },
  );
  return {
    props: {
      eventId,
    },
  };
};
