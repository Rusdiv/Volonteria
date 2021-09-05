import React from 'react';

export default function endOfEvent({ eventId }) {
  return <div>{eventId}</div>;
}

export const getServerSideProps = async (context) => {
  const { eventId } = context.params;

  return {
    props: {
      eventId,
    },
  };
};
