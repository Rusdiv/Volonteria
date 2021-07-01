import React from "react";

import classes from "./NewsItem.module.css";

export default function NewsItem(props) {
  const { title, content, date } = props;

  return (
    <li className={classes.newsItem}>
      <h3>{title.rendered}</h3>
      <div
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: content.rendered }}
      ></div>
      <div>{date.substring(0, date.length - 9)}</div>
    </li>
  );
}
