import React from "react";

import Achieve from "./Achieve";

export default function Achievements(props) {
  const { achievementsData } = props;

  return (
    <ul>
      {Array.isArray(achievementsData.data) &&
        achievementsData.data.map((achieve) => (
          <Achieve
            id={achieve.id}
            title={achieve.title}
            content={achieve.content}
          />
        ))}
    </ul>
  );
}
