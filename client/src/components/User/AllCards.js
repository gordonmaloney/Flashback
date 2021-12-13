import React, { useState, useEffect } from "react";
import FBModal from "../SubComponents/FBModal";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FormControl } from "@mui/material";
import { Input } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  updatePost,
  getPosts,
  updateComment,
  deleteComment,
} from "../../actions/posts";

import { FBCard } from "../SubComponents/FBCard";
import { FBCardLarge } from "../SubComponents/FBCardLarge";

export const AllCards = () => {
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


  const [newCard, setNewCard] = useState({
    front: "",
    back: ""
  });

  
  const handleEdit = (userId, commentId) => {
    dispatch(updateComment(userId, commentId, newCard))
  }

  if (user) {
    return (
      <>
        <center>
          <div className="allcards">
            <FBCardLarge
              title="Your cards"
              body={
                <>
                  <table
                    style={{
                      width: "100%",
                      textAlign: "center",
                      color: "#261420",
                    }}
                  >
                    <tr>
                      <th>
                        <h3>Front</h3>
                      </th>
                      <th>
                        <h3>Back</h3>
                      </th>
                      <th>
                        <h3>Next due</h3>
                      </th>
                      <th>
                        <h3>Manage</h3>
                      </th>
                    </tr>

                    {user.cards.map((card) => (
                      <tr>
                        <td>
                          <h4>{card.front}</h4>
                        </td>
                        <td>
                          <h4>{card.back}</h4>
                        </td>
                        <td>
                          <h4>{new Date(card.date).toLocaleDateString()}</h4>
                        </td>
                        <td>
                          <center>
                            <FBModal
                              prompt={
                                <div
                                  style={{
                                    borderRadius: "10px",
                                    backgroundColor: "#B9CCDA",
                                    cursor: "pointer",
                                    display: "inline",
                                    marginRight: "5px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      display: "inline-block",
                                      margin: 0,
                                      padding: "10px",
                                    }}
                                  >
                                    Delete
                                  </h3>
                                </div>
                              }
                              title="Delete card"
                              buttons={[
                                {
                                  text: "Delete",
                                  submit: () =>
                                    handleDelete(user._id, card._id),
                                },
                              ]}
                              body={
                                <center>
                                  <h3>
                                    Are you sure you want to delete this card?
                                    This cannot be undone.
                                  </h3>
                                </center>
                              }
                            />

                            <FBModal
                              prompt={
                                <div
                                  style={{
                                    borderRadius: "10px",
                                    backgroundColor: "#B9CCDA",
                                    cursor: "pointer",
                                    display: "inline",
                                    marginRight: "5px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      display: "inline-block",
                                      margin: 0,
                                      padding: "10px",
                                    }}
                                  >
                                    Edit
                                  </h3>
                                </div>
                              }
                              title="Edit card"
                              buttons={[
                                {
                                  text: "Save",
                                  submit: () =>
                                    handleEdit(user._id, card._id, newCard),
                                },
                              ]}
                              body={
                                <center>
                                  <FormControl
                                    sx={{
                                      width: "80%",
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                    }}
                                  >
                                    <h4
                                      style={{
                                        textAlign: "left",
                                        marginTop: "10px",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      Front side
                                    </h4>
                                    <Input
                                      id="frontInput"
                                      placeholder="Front..."
                                      disableUnderline="true"
                                      value={newCard.front}
                                      sx={{
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        backgroundColor: "#B9CCDA",
                                        color: "#261420",
                                      }}
                                      onChange={(e) =>
                                        setNewCard({
                                          ...newCard,
                                          front: e.target.value,
                                        })
                                      }
                                    ></Input>
                                  </FormControl>

                                  <FormControl
                                    sx={{
                                      width: "80%",
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                      marginBottom: "-40px",
                                    }}
                                  >
                                    <h4
                                      style={{
                                        textAlign: "left",
                                        marginBottom: "5px",
                                      }}
                                    >
                                      Back
                                    </h4>
                                    <Input
                                      placeholder="Back..."
                                      disableUnderline="true"
                                      value={newCard.back}
                                      sx={{
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        backgroundColor: "#B9CCDA",
                                        color: "#261420",
                                      }}
                                      onKeyPress={(e) =>
                                        e.key == "Enter" &&
                                        handleEdit(user._id, newCard)
                                      }
                                      onChange={(e) =>
                                        setNewCard({
                                          ...newCard,
                                          back: e.target.value,
                                        })
                                      }
                                    ></Input>
                                  </FormControl>
                                </center>
                              }
                            />
                          </center>
                        </td>
                      </tr>
                    ))}
                  </table>
                </>
              }
            />
          </div>
          <br /> <br /> <br />
          {/*
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
              
              */}
        </center>
      </>
    );
  } else {
    return <>Loading...</>;
  }
};
