import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const icons = [
    { id: 1, name: "cat", class: "fas fa-cat" },
    { id: 8, name: "dragon", class: "fas fa-dragon" },
    { id: 9, name: "hippo", class: "fas fa-hippo" },
    { id: 6, name: "charizard", class: "fas fa-frog" },
  ];

  const pairOficons = [...icons, ...icons];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOficons[openedCard[0]];
    const secondMatched = pairOficons[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <div className="App">
      <h1 className="title">Memory Card Game</h1>
      <div className="cards">
        {pairOficons.map((icons, index) => {
          //lets flip the card

          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(icons.id)) isFlipped = true;

          return (
            <div
              className={`icon-card ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <i className={icons.class}></i>
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
