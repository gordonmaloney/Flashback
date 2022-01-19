import React, { useState } from "react";

import { Input } from "@mui/material";

const WORDS = [
  {
    l1: "tired",
    l2: "sgìth",
  },
  {
    l1: "big",
    l2: "mòr",
  },
  {
    l1: "small",
    l2: "beag",
  },
  {
    l1: "dog",
    l2: "cù",
  },
  {
    l1: "horse",
    l2: "each",
  },
  {
    l1: "house",
    l2: "taigh",
  },
];

export const Koala = () => {
  const [enemyKang, setEnemyKang] = useState(0);
  const [playerKang, setPlayerKang] = useState(0);

  const [input, setInput] = useState();

  const [index, setIndex] = useState(0);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (input == WORDS[index].l2) {
        var newPos = playerKang + 50;
        setPlayerKang(newPos);
        if (playerKang == 450) alert("You've won!");
      } else {
        var newPos = enemyKang + 50;
        setEnemyKang(newPos);
        if (enemyKang == 450) alert("You've lost!");
      }

      setInput("");
      index == WORDS.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  };

  return (
    <div className="memory-game-wrapper">
<center>
<h3>Translate the word below to move your koala forward - but be careful! If you get it wrong, your opponent will catch up!</h3>
</center>
<div style={{ height: "20px" }} />

      <div
        className="KangarooField"
        style={{ transform: "scale(1.2)", marginLeft: "auto", marginRight: "auto", border: "10px solid grey", borderRight: "20px solid grey", width: "500px", backgroundColor: "lightblue" }}
      >
        <div style={{ marginLeft: enemyKang }}>🐨</div>

        <div style={{ marginLeft: playerKang }}>🐨</div>
      </div>

      <br />
      <br />

      <center>
        <h1 style={{margin: "0px", paddingBottom: "0px"}}>{WORDS[index].l1}</h1>
        <br />
        <Input
          placeholder="Translate"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => handleEnter(e)}
          disableUnderline="true"
          sx={{
              marginTop: "0px",
            borderRadius: "5px",
            paddingLeft: "10px",
            backgroundColor: "#B9CCDA",
            color: "#261420",
          }}
        />
      </center>
    </div>
  );
};
