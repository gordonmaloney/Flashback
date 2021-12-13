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
import { Grid } from "@mui/material";

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

  
  if (user) {

    let totalDelay = 0
    user.cards.map(card => totalDelay += parseInt(card.delay))

    let avgDelay = (totalDelay / user.cards.length).toFixed(2)

    return (
      <>
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
            title="Your stats"
            buttons={[{ text: "All cards", submit: () => history.push("/allcards") }]}
            body={
              <>
                <Grid container style={{ color: "#261420" }}>
                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <h3 style={{ display: "inline" }}>Total cards:</h3>
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        width: "75%",
                        borderRadius: "10px",
                        backgroundColor: "#B9CCDA",
                      }}
                    >
                      <h3 style={{ display: "inline" }}>{user.cards.length}</h3>
                    </div>
                  </Grid>

                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <h3 style={{ display: "inline" }}>Due today:</h3>
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        width: "75%",
                        borderRadius: "10px",
                        backgroundColor: "#B9CCDA",
                      }}
                    >
                      <h3 style={{ display: "inline" }}>
                        {
                          user.cards.filter(
                            (card) => card.date <= new Date().valueOf()
                          ).length
                        }
                      </h3>
                    </div>
                  </Grid>

                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <h3 style={{ display: "inline" }}>Due tomorrow:</h3>
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        width: "75%",
                        borderRadius: "10px",
                        backgroundColor: "#B9CCDA",
                      }}
                    >
                      <h3 style={{ display: "inline" }}>
                        {
                          user.cards.filter(
                            (card) =>
                              card.date ==
                              new Date(new Date().setHours(0, 0, 0, 1)).setDate(
                                new Date().getDate() + 1
                              )
                          ).length
                        }
                      </h3>
                    </div>
                  </Grid>

                  
                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <h3 style={{ display: "inline" }}>Your streak:</h3>
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        width: "75%",
                        borderRadius: "10px",
                        backgroundColor: "#B9CCDA",
                      }}
                    >
                      <h3 style={{ display: "inline" }}>
                        {user.streak} {user.streak == 1 ? "day" : "days"}
                      </h3>
                    </div>
                  </Grid>


                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <h3 style={{ display: "inline" }}>Average delay:</h3>
                  </Grid>
                  <Grid item xs={6} style={{ marginTop: "10px" }}>
                    <div
                      style={{
                        width: "75%",
                        borderRadius: "10px",
                        backgroundColor: "#B9CCDA",
                      }}
                    >
                      <h3 style={{ display: "inline" }}>
                        {avgDelay} {avgDelay == 1 ? "day" : "days"}
                      </h3>
                    </div>
                  </Grid>
                </Grid>
              </>
            }
          />
        </center>
      </>
    );
  } else {
    return <>Loading...</>;
  }
};
