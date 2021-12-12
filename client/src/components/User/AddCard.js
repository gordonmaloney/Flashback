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

export const AddCard = () => {
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
                    placeholder="Front..."
                    disableUnderline="true"
                    sx={{
                      borderRadius: "5px",
                      paddingLeft: "10px",
                      backgroundColor: "#B9CCDA",
                      color: "#261420",
                    }}
                    onChange={(e) =>
                      setNewCard({ ...newCard, l1: e.target.value })
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
                    sx={{
                      borderRadius: "5px",
                      paddingLeft: "10px",
                      backgroundColor: "#B9CCDA",
                      color: "#261420",
                    }}
                    onChange={(e) =>
                      setNewCard({ ...newCard, l2: e.target.value })
                    }
                  ></Input>
                </FormControl>
              </>
            }
          />
        </center>
      </div>
    );
  } else {
    return <></>;
  }
};
