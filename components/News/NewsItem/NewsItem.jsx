import React from 'react';
import PropTypes from 'prop-types';

import classes from './NewsItem.module.css';

export default function NewsItem({
  title, content, date, tgId, count,
}) {
  return (
    <li className={classes.newsItem}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        Нужно волонтёров
        {count}
      </p>
      <p>{tgId}</p>
      <div>{date}</div>
    </li>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tgId: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
