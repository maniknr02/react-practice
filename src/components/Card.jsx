import React from "react";

export const Card = (props) => {
  const showCard = (e) => {
    props.start();
    return props.updater(e);
  };
  return (
    <div className="card-container">
      {props.cards.map((card, index) => {
        return (
          <div
            className={`card ${card.hidden ? "hidden" : ""}`}
            id={index}
            onClick={showCard}
          >
            <img
              className={card.hidden ? "hide" : ""}
              src={`./assets/${card.value}.jpeg`}
              alt=""
              id={index}
              onClick={showCard}
            />
          </div>
        );
      })}
    </div>
  );
};
