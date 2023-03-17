import React from "react";

const lastSeen = (status) => {
  console.log(status);
  const last = new Date(status);
  const now = new Date();
  let diff = now - last;
  let seconds = Math.floor(diff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  if (days > 7) {
    return "several days ago";
  }
  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  if (days > 0) return days + "d " + hours + "h " + minutes + "m ago";
  else if (hours > 0) return hours + "h " + minutes + "m ago";
  return minutes + "m ago";
};
export const LowerCard = ({ name, skills, intro, status }) => {
  return (
    <div className="lower-card">
      <div>
        <h5>{name}</h5>
        <div className="caption">
          {skills.map((skill) => {
            return <span>{skill},</span>;
          })}
        </div>
      </div>
      <div className="caption2">{intro}</div>
      <div className="buttons">
        <button className="outlined">VIEW TRAILER</button>
        <button className="contained">WATCH NOW</button>
      </div>
      {status && (
        <div className="status">
          {status === "active" ? (
            <span>
              <i className={"fa-solid fa-circle " + status}></i> Online
            </span>
          ) : (
            <span>Last Seen: {lastSeen(status)}</span>
          )}
        </div>
      )}
    </div>
  );
};
