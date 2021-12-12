import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Drawer from "@mui/material/Drawer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { MenuItem } from "./SubComponents/MenuItem";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


import { useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    localStorage.clear();
    history.push("../");
  };

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

    
  return (
    <>
      <div className="header">
        {localUser && (
          <>
            <Fab
              sx={{
                zIndex: 3,
                backgroundColor: "white",
                fontWeight: 600,
                color: "#261420",
              }}
              className="menufab"
              onClick={() => setOpen(!open)}
            >
              {!open ? (
                <MenuIcon
                  fontSize="large"
                  style={{ transform: "scale(1.3)" }}
                />
              ) : (
                <MenuOpenIcon
                  fontSize="large"
                  style={{ transform: "scale(1.3)" }}
                />
              )}
            </Fab>
          </>
        )}

        {localUser ? (
          <h1 onClick={() => history.push("../home")}>
            <ArrowLeftIcon />
            FlashBack
          </h1>
        ) : (
          <h1 onClick={() => history.push("../")}>
            <ArrowLeftIcon />
            FlashBack
          </h1>
        )}
      </div>

      <Drawer
        style={{ zIndex: 2 }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#B9CCDA",
          },
        }}
      >
        <Box sx={{ width: 300 }}>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div
            onClick={() => {
              setOpen(false);
              history.push("/study");
            }}
          >
            <MenuItem title="Study" />
          </div>

          <div
            onClick={() => {
              setOpen(false);
              history.push("/stats");
            }}
          >
            <MenuItem title="Stats" />
          </div>

          <div
            onClick={() => {
              setOpen(false);
              history.push("/add");
            }}
          >
            <MenuItem title="Add Cards" />
          </div>

          <div
            onClick={() => {
              setOpen(false);
              handleLogOut();
            }}
          >
            <MenuItem title="Log out" />
          </div>
        </Box>
      </Drawer>
    </>
  );
};
