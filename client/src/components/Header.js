import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Drawer from "@mui/material/Drawer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

export const Header = () => {
  const [localUser, setLocalUser] = useState();

  useEffect(() => {
    setLocalUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="header">
        {localUser && (
          <>
            <Fab
              sx={{ zIndex: 3, backgroundColor: "white", color: "#261420" }}
              className="menufab"
              onClick={() => setOpen(!open)}
            >
              {!open ? <MenuIcon /> : <MenuOpenIcon />}
            </Fab>
          </>
        )}

        <h1>
          <ArrowLeftIcon />
          FlashBack
        </h1>
      </div>

      <Drawer
        style={{ zIndex: 2 }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#B9CCDA",
          }
        }}
      >
        <Box sx={{ width: 250 }}>



        </Box>
      </Drawer>
    </>
  );
};
