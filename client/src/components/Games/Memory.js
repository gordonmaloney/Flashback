import React, { useState, useMemo } from "react";

import { useWords } from "./WORDS";

export const Memory = () => {
  //import words from function
  const ImportedWords = useWords();
  const ImportedArray = useMemo(() => ImportedWords.shuffledWords, [ImportedWords.shuffledWords.length]);

  //create state variables for the first and second card a user pics
  const [selectL1, setSelectL1] = useState("");
  const [selectL2, setSelectL2] = useState("");

  //create state variables for whether to display a card or not and whether or not it was correct
  const [show, setShow] = useState([]);
  const [correct, setCorrect] = useState([]);

  //variable to make cards unclickable while they're spinning over
  const [clickable, setClickable] = useState(true);

  //if user has picked two cards, check if they match and either set them to correct or turn them back over
  if (selectL1 && selectL2) {
    clickable == true && setClickable(false);

    let selectQ = ImportedArray.filter((word) => word.Q == selectL1)[0];

    console.log("selectQ: ", selectQ);

    selectQ && selectL2 == selectQ.A
      ? correct.push(selectL1, selectL2)
      : console.log("Incorrect!");

    setTimeout(function () {
      setSelectL1("");
      setSelectL2("");
      setShow([]);
      setClickable(true);
      //correct.length == shuffledWords.length * 2 && alert("You win!");
    }, 800);
  }

  //show the card a user's clicked
  const selectCard = (wordId) => {
    !selectL1 ? setSelectL1(wordId) : setSelectL2(wordId);

    show.push(wordId);
  };

  return (
    <div className="memory-game-wrapper">
      <div
        style={{ perspective: "2000px", pointerEvents: !clickable && "none" }}
      >
        {/* filter through the imported array and display them */}
        {ImportedArray.map((word) => {
          return (
            <div
              className={
                show.includes(word.Q) || correct.includes(word.Q)
                  ? "card flip"
                  : "card"
              }
              id={word.Q}
              style={{
                borderRadius: "5px",
                display: "inline-block",
                width: "100px",
                height: "180px",
                backgroundColor: "rgb(185, 204, 218)",
                margin: "5px",
              }}
              onClick={() =>
                !correct.includes(word.Q) &&
                !show.includes(word.Q) &&
                selectCard(word.Q)
              }
            >
              <div
                className="back-face"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <center>
                  <span style={{ userSelect: "none" }}></span>
                </center>
              </div>

              <div
                className="front-face"
                style={{
                  position: "absolute",
                  height: "100%",
                  display: "flex",
                  width: "100%",
                  borderRadius: "5px",
                  border: "5px solid rgb(185, 204, 218)",
                  boxSizing: "border-box",
                  backgroundColor: correct.includes(word.Q)
                    ? "white"
                    : "rgb(185, 204, 218)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3 style={{ userSelect: "none" }}>{word.Q}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
