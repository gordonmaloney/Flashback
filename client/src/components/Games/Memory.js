import React, { useState } from "react";

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

let shuffledWords = [];

WORDS.map((word) => {
  let newWord = { Q: word.l1, A: word.l2 };
  let newWord2 = { Q: word.l2, A: word.l1 };
  shuffledWords.push(newWord);
  shuffledWords.push(newWord2);
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

{
  shuffleArray(shuffledWords);
}

export const Memory = () => {
  const [selectL1, setSelectL1] = useState("");
  const [selectL2, setSelectL2] = useState("");

  const [show, setShow] = useState([]);
  const [correct, setCorrect] = useState([]);

  const [clickable, setClickable] = useState(true);

  if (selectL1 && selectL2) {
    console.log(selectL1, selectL2);

    clickable == true && setClickable(false);

    let selectQ = shuffledWords.filter((word) => word.Q == selectL1)[0];

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

  console.log(correct);

  const selectCard = (wordId) => {
    !selectL1 ? setSelectL1(wordId) : setSelectL2(wordId);

    show.push(wordId);
    console.log("show: ", show);
  };

  return (
    <div className="memory-game-wrapper">
      <div
        style={{ perspective: "2000px", pointerEvents: !clickable && "none" }}
      >
        {shuffledWords.map((word) => {
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

              {/*
              {show.includes(word.Q) || correct.includes(word.Q) ? (
                <span className="front-face" style={{ userSelect: "none" }}>{word.Q}</span>
              ) : (
                <span className="back-face" style={{ color: "pink", userSelect: "none" }}>.</span>
              )}
              */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
