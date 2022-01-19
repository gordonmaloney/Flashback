import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { useLocation } from "react-router-dom";
import { FBCard } from "./SubComponents/FBCard";
import { useHistory } from "react-router-dom";
import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import { InputLabel, Input } from "@mui/material";
import FBModal from "./SubComponents/FBModal";

import { createPost } from '../actions/posts'

import randomWords from "random-words";


export const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const [localUser, setLocalUser] = useState();

  useEffect(() => {
    setLocalUser(JSON.parse(localStorage.getItem("profile")));
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [localStorage]);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const users = useSelector((state) => state.posts);
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(users.filter((user) => user.code == localUser?.code)[0]);
  }, [users, location, localUser]);





  const [loginForm, setLoginForm] = useState({ username: "", code: "" });

  const [createAcctForm, setCreateAcctForm] = useState({ name: "", code: randomWords(3).join("-") });

  const submitBtn = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify({ name: loginForm.username, code: loginForm.code })
    );

    history.push("/home");
  };

  const submitNewBtn = () => {
      dispatch(createPost(createAcctForm));
      
      localStorage.setItem(
        "profile",
        JSON.stringify({ name: createAcctForm.name, code: createAcctForm.code })
      );
  
      history.push("/home");
  }

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
        
          <>
            <FBCard
              title="Log in"
              buttons={[{ text: "Submit", submit: submitBtn }]}
              body={
                <>
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
                      Username
                    </h4>
                    <Input
                      placeholder="Username..."
                      disableUnderline="true"
                      sx={{
                        borderRadius: "5px",
                        paddingLeft: "10px",
                        backgroundColor: "#B9CCDA",
                        color: "#261420",
                      }}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, username: e.target.value })
                      }
                    ></Input>
                  </FormControl>

                  <FormControl
                    sx={{
                      width: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <h4 style={{ textAlign: "left", marginBottom: "5px" }}>
                      Code
                    </h4>
                    <Input
                      placeholder="Code..."
                      disableUnderline="true"
                      sx={{
                        borderRadius: "5px",
                        paddingLeft: "10px",
                        backgroundColor: "#B9CCDA",
                        color: "#261420",
                      }}
                      onKeyPress={(e) => e.key == "Enter" && submitBtn()}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, code: e.target.value })
                      }
                    ></Input>
                  </FormControl>
                </>
              }
            />
            <FBModal
              prompt={<h4 style={{ cursor: "pointer" }}>Don't have an account? Create one here</h4>}
              title="Create account"
              buttons={[{ text: "Submit", submit: submitNewBtn }]}
              body={
                <>
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
                      Username
                    </h4>
                    <Input
                      placeholder="Username..."
                      disableUnderline="true"
                      sx={{
                        borderRadius: "5px",
                        paddingLeft: "10px",
                        backgroundColor: "#B9CCDA",
                        color: "#261420",
                      }}
                      onChange={(e) =>
                        setCreateAcctForm({ ...createAcctForm, name: e.target.value })
                      }
                    ></Input>
                  </FormControl>

                  <FormControl
                    sx={{
                      width: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <h4 style={{ textAlign: "left", marginBottom: "5px" }}>
                      Code
                    </h4>
                    <Input
                      value={createAcctForm.code}
                      disableUnderline="true"
                      sx={{
                        borderRadius: "5px",
                        paddingLeft: "10px",
                        backgroundColor: "#B9CCDA",
                        color: "#261420",
                      }}
                    ></Input>
                  </FormControl>

                  </center>
                </>
              }
            />
          </>
        
      </center>
    </div>
  );
};
