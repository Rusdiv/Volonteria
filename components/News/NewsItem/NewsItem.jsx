import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Button from '../../common/Button/Button';

import styles from './NewsItem.module.css';

export default function NewsItem({ title, description, href }) {
  return (
    <li className={styles.newsItem}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Button type="button" onClick={() => {}}>
        <Link href={href}>Подробнее</Link>
      </Button>
    </li>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
