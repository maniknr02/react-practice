import React from "react";
import { LowerCard } from "./LowerCard";
import { UpperCard } from "./UpperCard";

export const Card = (person) => {
  return (
    <div className="main-card">
      <UpperCard {...person} />
      <LowerCard {...person} />
    </div>
  );
};
