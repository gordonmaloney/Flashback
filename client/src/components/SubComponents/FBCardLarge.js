import { Grid } from "@mui/material";
import { grid, padding } from "@mui/system";
import React from "react";

export const FBCardLarge = ({ title, body }) => {

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

  

  return (
    <div
      style={{
        width: "800px",
        maxWidth: "99%",
        borderRadius: "8px",
        border: "2px solid darkgrey",
        height: "auto",
        zIndex: 0,
        padding: "0px",
        margin: "0px",
        backgroundColor: "rgba(255,255,255,0.7)",
        position: "relative",
        paddingBottom: "0",
      }}
      
    >
      <Header />

      {body}

    </div>
  );
};
