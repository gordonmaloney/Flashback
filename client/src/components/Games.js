import React from "react";
import { FBCard } from "./SubComponents/FBCard";

import { useHistory } from "react-router-dom";

import memory from "./Images/memoryscreenshot.png";
import koala from './Images/koalascreenshot.png';

import { Grid } from "@mui/material";

export const Games = () => {
  const history = useHistory();

  return (
    <div>
      <div style={{ height: "150px" }} />
      <center>
        <Grid container   justifyContent="center"
>
          <Grid item>
            <FBCard
              title={"Memory"}
              buttons={[
                {
                  text: "Play Memory",
                  submit: () => history.push("games/memory"),
                },
              ]}
              body={
                <>
                  <img
                    src={memory}
                    width="90%"
                    alt="Screenshot of the game"
                    style={{
                      borderRadius: "10px",
                      padding: "5px",
                      paddingTop: "10px",
                      paddingBottom: "0",
                    }}
                  />
                  <h3
                    style={{
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    A spin on the classic 'memory' card game, where you look for
                    matching translations.
                  </h3>
                </>
              }
            />
          </Grid>
          <Grid item>
            <FBCard
              title={"Koala Race"}
              buttons={[
                {
                  text: "Play Koala Race",
                  submit: () => history.push("games/koala"),
                },
              ]}
              body={
                <>
                  <img
                    src={koala}
                    width="90%"
                    alt="Screenshot of the game"
                    style={{
                      borderRadius: "10px",
                      padding: "5px",
                      paddingTop: "10px",
                      paddingBottom: "0",
                    }}
                  />
                  <h3
                    style={{
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Race your kangaroo against the computer by getting words
                    right
                  </h3>
                </>
              }
            />
          </Grid>
        </Grid>
      </center>
    </div>
  );
};
