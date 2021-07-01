import React from "react";

import NewsItem from "../NewsItem/NewsItem";

import classes from "./NewsList.module.css";

export default function NewsList(props) {
  const { news } = props;
  return (
    <ul className={classes.newsList}>
      {Array.isArray(news) &&
        news.map(({ title, content, date, id }) => (
          <NewsItem key={id} date={date} content={content} title={title} />
        ))}
    </ul>
  );
}
