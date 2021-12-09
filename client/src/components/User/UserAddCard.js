import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../actions/posts";
import { useEffect } from "react";

export const UserAddCard = ({ user }) => {
  const dispatch = useDispatch();

  const [newCard, setNewCard] = useState({
    l1: "",
    l2: "",
    delay: 0,
    reviews: 0,
    date: new Date().valueOf(),
  });

  console.log(newCard);

  const handleUpdate = (id, newCard) => {
    dispatch(addComment(id, newCard));
  };

  return (
    <div>
        <h1>Add new card</h1>
      <input
        placeholder="l1"
        onChange={(e) => setNewCard({ ...newCard, l1: e.target.value })}
      />
      <br />
      <input
        placeholder="l2"
        onChange={(e) => setNewCard({ ...newCard, l2: e.target.value })}
      />
      <br />
      <button onClick={() => handleUpdate(user._id, newCard)}>Update</button>
    </div>
  );
};
