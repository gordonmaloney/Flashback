import { Grid } from "@mui/material";
import { grid, padding } from "@mui/system";
import React from "react";

export const FBCard = ({ title, body, buttons }) => {

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
            paddingBottom: "10px",
          }}
        >
          {title}
        </h1>
      </div>
    );
  };

  const SingleButton = () => {
    return (
      <div
        onClick={buttons[0].submit}
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
          bottom: -1,
        }}
      >
        <h1
          style={{
            padding: "0px",
            margin: "0px",
            textAlign: "center",
            paddingLeft: "20px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          {buttons[0].text}
        </h1>
      </div>
    );
  };

  const DoubleButton = () => {
    return (
      <>
        <div
          onClick={buttons[0].submit}
          style={{
            cursor: "pointer",
            zIndex: 0,
            padding: "0px",
            margin: "0px",
            marginLeft: "-0.2px",
            width: "100.2%",
            borderRadius: "0 0 0 0",
            backgroundColor: "#B9CCDA",

            position: "absolute",
            bottom: 51,
            borderBottom: "2px solid darkgrey"
          }}
        >
          <h1
            style={{
              padding: "0px",
              margin: "0px",
              textAlign: "center",
              paddingLeft: "20px",
              paddingBottom: "10px",
            }}
          >
            {buttons[0].text}
          </h1>
        </div>

        <div
          onClick={buttons[1].submit}
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
            bottom: -1,
          }}
        >
          <h1
            style={{
              padding: "0px",
              margin: "0px",
              textAlign: "center",
              paddingLeft: "20px",
              paddingBottom: "10px",
            }}
          >
            {buttons[1].text}
          </h1>
        </div>
      </>
    );
  };

  const TripleButton = () => {
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
        <Grid item xs="4" onClick={buttons[0].submit}>
        <h2
          style={{
            display: "inline",
            padding: "0px",
            margin: "0px",
            textAlign: "center",
            paddingLeft: "0px",
            paddingBottom: "10px",
            lineHeight: "55px"
          }}
        >
          {buttons[0].text}
        </h2>
        </Grid>

        <Grid item xs="4" onClick={buttons[1].submit} style={{borderRight: "2px solid darkgrey", borderLeft: "2px solid darkgrey"}}>
        <h2
          style={{
            display: "inline",
            padding: "0px",
            margin: "0px",
            textAlign: "center",
            paddingLeft: "0px",
            paddingBottom: "10px",
            lineHeight: "55px"
          }}
        >
          {buttons[1].text}
        </h2>
        </Grid>

        <Grid item xs="4" onClick={buttons[1].submit}>
        <h2
          style={{
            display: "inline",
            padding: "0px",
            margin: "0px",
            textAlign: "center",
            paddingLeft: "0px",
            paddingBottom: "10px",
            lineHeight: "55px"
          }}
        >
          {buttons[2].text}
        </h2>
        </Grid>
</Grid>     

      </div>
    );
  };





  const FourButtons = () => {
    return (
      <>
      <div
      onClick={buttons[3].submit}
      style={{
        cursor: "pointer",
        zIndex: 0,
        padding: "0px",
        margin: "0px",
        marginLeft: "-0.2px",
        width: "100.2%",
        borderRadius: "0 0 0 0",
        backgroundColor: "#B9CCDA",

        position: "absolute",
        bottom: 55,
        borderBottom: "2px solid darkgrey"
      }}
    >
      <h1
        style={{
          padding: "0px",
          margin: "0px",
          textAlign: "center",
          paddingLeft: "20px",
          paddingBottom: "10px",
        }}
      >
        {buttons[3].text}
      </h1>
    </div>
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
        <Grid item xs="4" onClick={buttons[0].submit}>
        <h2
          style={{
            display: "inline",
            padding: "0px",
            margin: "0px",
            textAlign: "center",
            paddingLeft: "0px",
            paddingBottom: "10px",
            lineHeight: "55px"
          }}
        >
          {buttons[0].text}
        </h2>
        </Grid>

        <Grid item xs="4" onClick={buttons[1].submit} style={{borderRight: "2px solid darkgrey", borderLeft: "2px solid darkgrey"}}>
        <h2
          style={{
            display: "inline",
            padding: "0px",
            margin: "0px",
            textAlign: "center",
            paddingLeft: "0px",
            paddingBottom: "10px",
            lineHeight: "55px"
          }}
        >
          {buttons[1].text}
        </h2>
        </Grid>

        <Grid item xs="4" onClick={buttons[1].submit}>
        <h2
          style={{
            display: "inline",
            padding: "0px",
            margin: "0px",
            textAlign: "center",
            paddingLeft: "0px",
            paddingBottom: "10px",
            lineHeight: "55px"
          }}
        >
          {buttons[2].text}
        </h2>
        </Grid>
</Grid>     

      </div>
      </>
    );
  };

  

  return (
    <div
      style={{
        width: "400px",
        maxWidth: "90%",
        borderRadius: "8px",
        border: "2px solid darkgrey",
        height: "auto",
        zIndex: 0,
        padding: "0px",
        margin: "0px",
        backgroundColor: "rgba(255,255,255,0.7)",
        position: "relative",
        paddingBottom: buttons.length == 2 || buttons.length == 4 ? "190px" : "80px",
      }}
      
    >
      <Header />

      {body}

      {buttons.length == 1 && <SingleButton />}
      {buttons.length == 2 && <DoubleButton />}
      {buttons.length == 3 && <TripleButton />}
      {buttons.length == 4 && <FourButtons />}

    </div>
  );
};
