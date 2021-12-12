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
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import Tooltip from '@mui/material/Tooltip';


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

    let today = new Date( new Date().setHours(0,0,0,1) )

    console.log("last", user.last)

    console.log("-1", new Date(today).setDate(new Date().getDate() - 1))

    console.log(user.last == new Date(today).setDate(new Date().getDate() - 1))

    dispatch(updateComment(id, commentId, updatedPost));

    if (user.last == new Date(today).setDate(new Date().getDate() - 1)) {
      const newDate = { streak: user.streak + 1, last: (new Date()).setHours(0,0,1).valueOf() };
      dispatch(updatePost(id, newDate));

    } else if (user.last < new Date(today).setDate(new Date().getDate() - 1)) {
      const newDate = { streak: 1, last: (new Date()).setHours(0,0,1).valueOf() };
      dispatch(updatePost(id, newDate));

    } else {
      const newDate = { streak: user.streak, last: (new Date()).setHours(0,0,0,1).valueOf() };


      dispatch(updatePost(id, newDate));
    }
  };

  const handleDelete = (id, commentId) => {
    dispatch(deleteComment(id, commentId));
  };

  const handleWrong = (CARD) => {
    CARD.date = (new Date()).setHours(0,0,0,1).valueOf();
    CARD.delay = 0;
    CARD.reviews++;

    handleUpdate(user._id, CARD._id, CARD);
    handleNext();
  };

  const handleCorrect = (CARD) => {
    let newDate = new Date().setDate(
      new Date().getDate() + (parseInt(CARD?.delay) + 1) * 2
    );
    CARD.date = (new Date(newDate)).setHours(0,0,0,1)
    CARD.delay = (parseInt(CARD.delay) + 1) * 2;
    CARD.reviews++;
    handleUpdate(user._id, CARD._id, CARD);
    handleNext();
  };

  const handleEasy = (CARD) => {
    let newDate = new Date().setDate(
      new Date().getDate() + (parseInt(CARD?.delay) + 1) * 3
    );
    CARD.date = (new Date(newDate)).setHours(0,0,0,1);
    CARD.delay = (parseInt(CARD.delay) + 1) * 3;
    CARD.reviews++;
    handleUpdate(user._id, CARD._id, CARD);
    handleNext();
  };

  if (CARD) {
    return (
      <div>
          
          <Tooltip title={<>Your streak is {user.streak} - nice!<br/>Can you make it to {user.streak + 1}?</>} placement="bottom">

        <div style={{float: "right", opacity: "0.8", marginRight: "100px", marginTop: "150px", color: "#261420"}}>
          <LocalFireDepartmentIcon style={{transform: "scale(2)", marginRight: "20px" }}/>
          <h1 style={{display: "inline"}}>{user.streak}</h1>
          </div>
          </Tooltip>
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
                <h3>{CARD.front}</h3>

                {answer ? (
                  <>
                  <div style={{height: "10px"}}>
                    <hr style={{ width: "80%" }} />
                    <h3 style={{marginBottom: "0px"}}>{CARD.back}</h3>
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <h1>You don't have any cards to review!</h1>
        </center>
      </>
    );
  }
} else {return (<>egwr</>)}

}