import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { AdminAddCard } from "./AdminAddCard";
import { CreateUser } from "./CreateUser";

export const AdminShowUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const users = useSelector((state) => state.posts);

  return (
    <div>
        <h3>Users:</h3>
      {users.map((user) => (
          <>
          <h5>{user.name}</h5>
        <span>{user.cards.length} cards - streak: {user.streak} days</span>
            <AdminAddCard user={user} />
        </>
      ))}

      <CreateUser />
    </div>
  );
};
