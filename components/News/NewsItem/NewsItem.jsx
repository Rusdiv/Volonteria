import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Card } from 'antd';

export default function NewsItem({ title, description, href }) {
  const router = useRouter();
  const onCardClick = (url) => {
    router.push(url);
  };
  return (
    <Card
      onClick={() => onCardClick(href)}
      hoverable
      title={title}
      style={{ width: 300, marginLeft: 25, marginTop: 25, backgroundColor: 'rgb(235, 246, 237)' }}
    >
      <p>{description}</p>
    </Card>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
