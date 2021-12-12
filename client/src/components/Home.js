import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserHome } from "./User/UserHome";
import { UserLogin } from "./User/UserLogin";
import { AdminLink } from "./Admin/AdminLink";
import { FBCard } from "./SubComponents/FBCard";
import { useHistory } from "react-router-dom";
import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import { InputLabel, Input } from "@mui/material";

export const Home = () => {
  const location = useLocation()
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


  const [loginForm, setLoginForm] = useState({username: "", code: ""})

  const submitBtn = () => {   
    localStorage.setItem(
      "profile",
      JSON.stringify({ name: loginForm.username, code: loginForm.code }))

      history.push('/home')
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
        
        {!user ?
        <FBCard
          title="Log in"
          buttons={[{text: "Submit", submit: submitBtn},]}
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
                  onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                ></Input>
              </FormControl>

              <FormControl
                sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
              >
                <h4 style={{ textAlign: "left", marginBottom: "5px" }}>Code</h4>
                <Input
                
                placeholder="Code..."
                  disableUnderline="true"
                  sx={{
                    borderRadius: "5px",
                    paddingLeft: "10px",
                    backgroundColor: "#B9CCDA",
                    color: "#261420",
                  }}
                  onKeyPress={e => e.key == "Enter" && submitBtn()}
                  onChange={(e) => setLoginForm({...loginForm, code: e.target.value})}
                ></Input>
              </FormControl>
            </>
          }
        />
        :
        submitBtn()
        }
      </center>
    </div>
  );
};
