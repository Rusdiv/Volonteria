import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card } from 'antd';

export default function NewsItem({ title, description, href }) {
  return (
    <Card
      title={title}
      extra={<Link href={href}>Подробнее</Link>}
      style={{ width: 300, marginRight: 25 }}
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
