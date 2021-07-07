import React from "react";

export default function Achieve({ id, title, content }) {
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
}
