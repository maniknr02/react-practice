import React from "react";

export const ShowMoves = (props) => {
  return (
    <div className="moves">
      <span className="scorehead">Moves{":"}</span>
      <span className="field">{props.moves}</span>
    </div>
  );
};
