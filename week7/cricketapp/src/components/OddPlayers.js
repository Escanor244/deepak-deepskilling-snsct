import React from "react";

const OddPlayers = (players) => {
  return (
    <ul>
      {players.map((p, i) => {
        if (i % 2 === 0) {
          return <li key={i}> {ordinal(i + 1)} : {p}</li>;
        } else return null;
      })}
    </ul>
  );
};

const ordinal = (n) => {
  const ord = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];
  return ord[n - 1] || n + "th";
};

export default OddPlayers;
