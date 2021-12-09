import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../actions/posts";

export const UserFlashcard = ({ user }) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(false);

  const userCards = user.cards.filter(
    (usercard) => parseInt(usercard.date) <= new Date().valueOf()
  );

  const CARD = userCards[index];
  console.log(CARD);

  const handlePrev = () => {
    if (index == 0) {
      setIndex(userCards.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index == userCards.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleUpdate = (id, commentId, updatedPost) => {
    dispatch(updateComment(id, commentId, updatedPost));
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "beige",
          width: "200px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "25px",
          marginTop: "100px",
          border: "1px solid black",
          borderRadius: "20px",
        }}
      >
        <center>
          {CARD ? (
            <>
              {CARD.l2}
              <br />
              {answer ? (
                <>
                  {CARD.l1}
                  <br />
                  <br />
                </>
              ) : (
                <>
                  <br />
                  <br />
                </>
              )}
              <button onClick={() => setAnswer(!answer)}>Show Answer</button>
              <br />
              <button
                onClick={() => {
                  setAnswer(false);
                  handlePrev();
                }}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  setAnswer(false);
                  handleNext();
                }}
              >
                Next
              </button>

              <br />

              <button
                onClick={() => {
                  CARD.date = new Date().valueOf();
                  CARD.delay = 0;
                  CARD.reviews++;

                  handleUpdate(user._id, CARD._id, CARD);
                  handleNext();
                }}
              >
                Wrong
              </button>
              <button
                onClick={() => {
                  if (CARD) {
                    CARD.date = new Date().setDate(
                      new Date().getDate() + (parseInt(CARD?.delay) + 1) * 2
                    );
                    CARD.delay = (parseInt(CARD.delay) + 1) * 2;
                    CARD.reviews++;

                    //USERCARD.date = new Date().valueOf()
                    //USERCARD.delay = 0
                    //USERCARD.reviews = 0

                    handleUpdate(user._id, CARD._id, CARD);
                    handleNext();
                  }
                }}
              >
                Correct
              </button>
              <button
                onClick={() => {
                  CARD.date = new Date().setDate(
                    new Date().getDate() + (parseInt(CARD.delay) + 1) * 3
                  );
                  CARD.delay = (parseInt(CARD.delay) + 1) * 3;
                  CARD.reviews++;
                  handleUpdate(user._id, CARD._id, CARD);
                  handleNext();
                }}
              >
                Easy
              </button>
            </>
          ) : (
            <>
              {index > 0 && index > userCards.length - 1 && setIndex(index - 1)}
              You don't have any cards to review!
            </>
          )}
        </center>
      </div>

      <center>
        <h1>Stats</h1>

        <table>
          <tr>
            <th>Gaelic</th>
            <th>English</th>
            <th>Due</th>
            <th>Delay</th>
            <th>Reviews</th>
            <th>Delete</th>
          </tr>
          <span className="tableHr">All words:</span>
          <br />
          {user.cards.map((card) => (
            <tr>
              <td>{card.l1}</td>
              <td>{card.l2}</td>
              <td>{new Date(card.date).toLocaleDateString()}</td>
              <td>{card.delay}</td>
              <td>{card.reviews}</td>
              <td>delete...</td>
            </tr>
          ))}
          <br />
          <span className="tableHr">Due today:</span>
          <br />
          {user.cards
            .filter((card) => card.date <= new Date())
            .map((card) => (
              <tr>
                <td>{card.l1}</td>
                <td>{card.l2}</td>
                <td>{new Date(card.date).toLocaleDateString()}</td>
                <td>{card.delay}</td>
                <td>{card.reviews}</td>
              </tr>
            ))}
        </table>
      </center>
    </>
  );
};
