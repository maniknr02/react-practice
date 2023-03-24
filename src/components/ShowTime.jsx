import React from "react";

export const ShowTime = (props) => {
  return (
    <div className="timer">
      <div>
        <span className="scorehead">Timer: </span>
        <span className="field">
          {props.time.min < 10 ? "0" + props.time.min : props.time.min}
        </span>
        <span className="text">{" : "}</span>
        <span className="field">
          {props.time.sec < 10 ? "0" + props.time.sec : props.time.sec}
        </span>
        <span className="text"></span>
      </div>
    </div>
  );
};
