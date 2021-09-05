import React from "react";
import Cards from "./Cards";

const Board = ({ cardData, onFlip }) => {
  return (
    <div className="board">
      {cardData.map((i) => {
        return <Cards key={i.id} cardData={i} onFlip={onFlip} />;
      })}
    </div>
  );
};
export default Board;
