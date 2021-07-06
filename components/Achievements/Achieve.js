import React from "react";

export default function Achieve(props) {
  const { id, title, content } = props;
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
}
