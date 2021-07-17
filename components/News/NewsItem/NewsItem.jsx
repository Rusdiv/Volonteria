import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Button from '../../common/Button/Button';

import styles from './NewsItem.module.css';

export default function NewsItem({
  title, content, date, tgId, count, href,
}) {
  return (
    <li className={styles.newsItem}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        Нужно волонтёров
        {count}
      </p>
      <p>{tgId}</p>
      <div>{date}</div>
      <Button>
        <Link href={href}>Подробнее</Link>
      </Button>
    </li>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tgId: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
};
