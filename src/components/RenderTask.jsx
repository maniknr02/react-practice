import React from "react";

export const RenderTask = (props) => {
  return (
    <div className={"task"}>
      <div className={"checkbox "} id={props.id} onClick={props.onClick}>
        {props.task.checked && (
          <i
            style={{ position: "absolute", left: "0", color: "black" }}
            className={"fa-solid fa-check "}
            id={props.id}
            onClick={(e) => {
              return props.onClick;
            }}
          ></i>
        )}
      </div>
      <div className={props.task.checked ? "strike" : ""}>
        {props.task.name}
      </div>
    </div>
  );
};
