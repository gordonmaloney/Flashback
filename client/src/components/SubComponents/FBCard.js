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
          width: "401px",
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
        onClick={buttons.submit}
        style={{
          cursor: "pointer",
          zIndex: 0,
          padding: "0px",
          margin: "0px",
          marginLeft: "-0.2px",
          width: "401px",
          borderRadius: "0 0 6px 6px",
          backgroundColor: "#B9CCDA",

          position: "absolute",
          bottom: 0,
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
          {buttons.text}
        </h1>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "400px",
        borderRadius: "8px",
        border: "2px solid darkgrey",
        height: "auto",
        zIndex: 3,
        padding: "0px",
        margin: "0px",
        backgroundColor: "rgba(255,255,255,0.7)",
        position: "relative",
        paddingBottom: "80px",
      }}
    >
      <Header />

      {body}

      <SingleButton />
    </div>
  );
};
