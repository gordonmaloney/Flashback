import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  updatePost,
  getPosts,
  updateComment,
  deleteComment,
} from "../../actions/posts";

import { FBCard } from "../SubComponents/FBCard";

export const Study = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const [index, setIndex] = useState(0);

  const [answer, setAnswer] = useState(false);


    //Find User
    const localUser = JSON.parse(localStorage.getItem("profile"));

    useEffect(() => {
      dispatch(getPosts());
    }, []);
  
    const users = useSelector((state) => state.posts);
    const [user, setUser] = useState();
  
    useEffect(() => {
      setUser(users.filter((user) => user.code == localUser?.code)[0]);
    }, [users, localUser]);
    //Found user

    
  if (user) {


  var userCards = [];

  user.cards.map(
    (card) => card.date <= new Date().valueOf() && userCards.push(card)
  );

  /*
  user.cards.map(
    (card) => userCards.push(card)
  );
  */

  var CARD = userCards[index];

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

    if (new Date(user.last) == new Date().setDate(new Date().getDate() - 1)) {
      const newDate = { streak: user.streak + 1, last: new Date().valueOf() };
      dispatch(updatePost(id, newDate));
    } else {
      const newDate = { streak: 1, last: new Date().valueOf() };
      dispatch(updatePost(id, newDate));
    }
  };

  const handleDelete = (id, commentId) => {
    dispatch(deleteComment(id, commentId));
  };

  const handleWrong = (CARD) => {
    CARD.date = new Date().valueOf();
    CARD.delay = 0;
    CARD.reviews++;

    handleUpdate(user._id, CARD._id, CARD);
    handleNext();
  };

  const handleCorrect = (CARD) => {
    CARD.date = new Date().setDate(
      new Date().getDate() + (parseInt(CARD?.delay) + 1) * 2
    );
    CARD.delay = (parseInt(CARD.delay) + 1) * 2;
    CARD.reviews++;
    handleUpdate(user._id, CARD._id, CARD);
    handleNext();
  };

  const handleEasy = (CARD) => {
    CARD.date = new Date().setDate(
      new Date().getDate() + (parseInt(CARD.delay) + 1) * 3
    );
    CARD.delay = (parseInt(CARD.delay) + 1) * 3;
    CARD.reviews++;
    handleUpdate(user._id, CARD._id, CARD);
    handleNext();
  };

  if (CARD) {
    return (
      <div>
          
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
        <center>
          <FBCard
            buttons={[
              { text: "Wrong", submit: () => handleWrong(CARD) },
              { text: "Correct", submit: () => handleCorrect(CARD) },
              { text: "Easy", submit: () => handleEasy(CARD) },
              { text: "Show answer", submit: () => setAnswer(!answer) },
            ]}
            title="Studying"
            body={
              <>
              
              <br/>
                <h3>{CARD.l2}</h3>

                {answer ? (
                  <>
                  <div style={{height: "10px"}}>
                    <hr style={{ width: "80%" }} />
                    <h3 style={{marginBottom: "0px"}}>{CARD.l1}</h3>
                    </div>
                  </>
                ) : (
                  <>
                  <div style={{height: "10px"}}></div>
                  </>
                )}
              </>
            }
          />
        </center>
      </div>
    );
  } else {
    return (
      <>
        {index > 0 && index > userCards.length - 1 && setIndex(index - 1)}
        <center>
          <h1>You don't have any cards to review!</h1>
        </center>
      </>
    );
  }
} else {return (<>egwr</>)}

}