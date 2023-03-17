import React from "react";
export const UpperCard = ({ profile, role, city, country, premium }) => {
  return (
    <div className="upper-card">
      <i
        className={
          premium ? "fa-solid fa-star premium" : "fa-solid fa-star normal"
        }
      ></i>
      <img src={`./assets/${profile}.jpg`} alt="Failed to load" />
      <h4>{role}</h4>
      <div className="caption">
        <i className="fa-solid fa-location-dot"> </i> {city}, {country}
      </div>
    </div>
  );
};
