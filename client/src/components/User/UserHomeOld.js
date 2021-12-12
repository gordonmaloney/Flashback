import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { UserCards } from "./UserCards";
import { UserFlashcard } from "./UserFlashcard";
import { UserAddCard } from "./UserAddCard";

export const UserHome = () => {
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const users = useSelector((state) => state.posts);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(users.filter((user) => user.code == code)[0]);
  });

  useEffect(() => {
    user && localStorage.setItem("profile", JSON.stringify({ username: user.name, code: user.code, id: user._id }))
  }, [user])

  return (
    <div>
      {user ? (
        <>
          Welcome {user.name}! Your current streak is: {user.streak}.
          <UserCards user={user} />
          <UserFlashcard user={user} />
          <UserAddCard user={user} />
        </>
      ) : (
        "User not found..."
      )}
    </div>
  );
};
