import React from "react";

export const ScoreCard = (props) => {
  return (
    <div>
      HighScore:{props.score.min}m:{props.score.sec}s
    </div>
  );
};
