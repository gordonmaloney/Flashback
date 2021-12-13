import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  border: "2px solid darkgrey",
  height: "auto",
  minHeight: "200px",
  zIndex: 0,
  padding: "0px",
  margin: "0px",
  paddingBottom: "80px"
};

export default function FBModal({ prompt, title, body, buttons }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    handleClose()
    buttons[0].submit()
  }

  
  const Header = () => {
    return (
      <div
        style={{
          zIndex: 0,

          padding: "0px",
          margin: "0px",
          marginLeft: "-0.2px",
          marginTop: "-0.5px",
          paddingTop: "3px",
          width: "100.2%",
          height: "55px",
          borderRadius: "6px 6px 0 0",
          backgroundColor: "#B9CCDA",
        }}
      >
        <h1
          style={{
            padding: "0px",
            margin: "0px",
            textAlign: "left",
            paddingLeft: "20px",
            paddingBottom: "0px",
          }}
        >
          {title}
        </h1>
      </div>
    );
  };

  const Buttons = () => {
    return (
      <div
        style={{
          cursor: "pointer",
          zIndex: 0,
          padding: "0px",
          margin: "0px",
          marginLeft: "-0.2px",
          width: "100.2%",
          borderRadius: "0 0 6px 6px",
          backgroundColor: "#B9CCDA",

          position: "absolute",
          bottom: 0,
        }}
      >
        <Grid container>
          <Grid item xs="6" onClick={handleClose}>
            <h2
              style={{
                display: "inline",
                padding: "0px",
                margin: "0px",
                textAlign: "center",
                paddingLeft: "0px",
                paddingBottom: "10px",
                lineHeight: "55px",
              }}
            >
              Cancel
            </h2>
          </Grid>

          <Grid
            item
            xs="6"
            onClick={handleClick}
            style={{ borderLeft: "2px solid darkgrey" }}
          >
            <h2
              style={{
                display: "inline",
                padding: "0px",
                margin: "0px",
                textAlign: "center",
                paddingLeft: "0px",
                paddingBottom: "10px",
                lineHeight: "55px",
              }}
            >
              {buttons[0].text}
            </h2>
          </Grid>
        </Grid>
      </div>
    );
  };

  return (
    <>
      <span onClick={handleOpen}>
        {prompt}
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header />

          {body}

          <center>
            <Buttons />
          </center>
        </Box>
      </Modal>
    </>
  );
}
