import React from "react";

const Cards = ({ cardData, onFlip }) => {
  return (
    <div className="flip-card">
      <div
        className="flip-card-inner"
        onClick={() => {
          onFlip(cardData);
        }}
      >
        <div className="flip-card-front"></div>
        <div
          className="flip-card-back"
          style={{ backgroundColor: cardData.color }}
        ></div>
      </div>
    </div>
  );
};
export default Cards;
