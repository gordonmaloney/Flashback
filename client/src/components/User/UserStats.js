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

export const UserStats = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

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


  const handleDelete = (id, commentId) => {
    dispatch(deleteComment(id, commentId));
  };

  if (user) {

    return (
      <>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
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
            <th>Edit</th>
          </tr>
          <span className="tableHr">All words:</span>
          <br />
          {user.cards.map((card) => (
            <tr>
              <td>{card.front}</td>
              <td>{card.back}</td>
              <td>{new Date(card.date).toLocaleDateString()}</td>
              <td>{card.delay}</td>
              <td>{card.reviews}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(user._id, card._id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>Edit</td>
            </tr>
          ))}
          <br />
          <span className="tableHr">Due today:</span>
          <br />
          {user.cards
            .filter((card) => card.date <= new Date())
            .map((card) => (
              <tr>
              <td>{card.front}</td>
              <td>{card.back}</td>
                <td>{new Date(card.date).toISOString()}</td>
                <td>{card.delay}</td>
                <td>{card.reviews}</td>
              </tr>
            ))}
        </table>
      </center>
      </>
    );

            } else { return <>Loading...</>}
  };