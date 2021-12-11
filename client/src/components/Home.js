import React, {useState} from "react";
import { UserLogin } from "./User/UserLogin";
import { AdminLink } from "./Admin/AdminLink";
import { FBCard } from "./SubComponents/FBCard";

import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import { InputLabel, Input } from "@mui/material";

export const Home = () => {

  const [loginForm, setLoginForm] = useState({username: "", code: ""})

  const submitBtn = () => {
    console.log(loginForm)
  }


  return (
    <div>
      <h1>Welcome to FlashBack</h1>

      <br />
      <br />
      <br />
      <h2>User Login:</h2>
      <UserLogin />

      <center>
        <FBCard
          title="Log in"
          buttons={{text: "Submit", submit: submitBtn}}
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
                  onChange={(e) => setLoginForm({...loginForm, code: e.target.value})}
                ></Input>
              </FormControl>
            </>
          }
        />
      </center>

      <br />
      <br />
      <br />
      <h2>Admin Login:</h2>
      <AdminLink />
    </div>
  );
};
