import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default function NewsIdItem({
  id,
  time,
  description,
  name,
  tgId,
  volCount,
}) {
  return (
    <div>
      <p>
        <p>name:</p>
        {name}
      </p>
      <p>
        <p>description:</p>
        {description}
      </p>
      <p>
        <p>id:</p>
        {id}
      </p>
      <p>
        <p>volCount:</p>
        {volCount}
      </p>
      <p>
        <p>tgId:</p>
        <a href={tgId}>{tgId}</a>
      </p>
      <p>
        <p>time:</p>
        {time}
      </p>
    </div>
  );
}

NewsIdItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  volCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tgId: PropTypes.string.isRequired,
};

export const getServerSideProps = async (context) => {
  const { newsId } = context.params;
  const { req } = context;
  const { data } = await axios.get(
    `http://${req.headers.host}/api/news/${newsId}`,
  );

  return {
    props: {
      id: data.post_id,
      time: data.time_value,
      name: data.name_value,
      volCount: data.volunteers_value,
      tgId: data.telegram_id_value,
      description: data.description_value,
    },
  };
};
