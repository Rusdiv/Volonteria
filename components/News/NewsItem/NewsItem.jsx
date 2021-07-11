import React from 'react';
import PropTypes from 'prop-types';

import classes from './NewsItem.module.css';

export default function NewsItem({ title, content, date }) {
  return (
    <li className={classes.newsItem}>
      <h3>{title.rendered}</h3>
      <div
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      />
      <div>{date.substring(0, date.length - 9)}</div>
    </li>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
