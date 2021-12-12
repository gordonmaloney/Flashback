import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../actions/posts";
import { useEffect } from "react";
import { FBCard } from "../SubComponents/FBCard";
import { useHistory } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { getPosts } from "../../actions/posts";
import TextField from "@mui/material/TextField";
import { InputLabel, Input } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export const AddCard = () => {
  const [snackbar, setSnackbar] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

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

  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
    delay: 0,
    reviews: 0,
    date: new Date().valueOf(),
  });

  console.log(newCard);

  const frontInput = document.getElementById("frontInput");

  const handleUpdate = (id, newCard) => {
    dispatch(addComment(id, newCard));

    setNewCard({
      front: "",
      back: "",
      delay: 0,
      reviews: 0,
      date: new Date().valueOf(),
    });

    setSnackbar(true);

    frontInput.focus();

    //history.push('../home')
  };

  if (user) {
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
            title="Add Card"
            buttons={[
              { text: "Cancel", submit: () => history.push("../home") },
              { text: "Save", submit: () => handleUpdate(user._id, newCard) },
            ]}
            body={
              <>
                <FormControl
                  sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
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
                      setNewCard({ ...newCard, front: e.target.value })
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
                  <h4 style={{ textAlign: "left", marginBottom: "5px" }}>
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
                      e.key == "Enter" && handleUpdate(user._id, newCard)
                    }
                    onChange={(e) =>
                      setNewCard({ ...newCard, back: e.target.value })
                    }
                  ></Input>
                </FormControl>
              </>
            }
          />
        </center>

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          ContentProps={{
            sx: {
              backgroundColor: "#B9CCDA",
              color: "#261420",
              fontWeight: 500,
              maxWidth: "50px"
            },
          }}
          open={snackbar}
          autoHideDuration={3000}
          onClose={() => setSnackbar(false)}
          message="Card added!"
        />
      </div>
    );
  } else {
    return <></>;
  }
};
