import React from "react";

export const MenuItem = ({ title }) => {
  return (
    <div style={{ width: "300px", marginBottom: "50px" }}>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "25px",
            padding: "2px",
            marginLeft: "-50px",
            marginRight: "50px",
          }}
        >
          <h2
            style={{ userSelect: "none", textAlign: "center", color: "white" }}
          >
            .
          </h2>
        </div>

        <h2
          style={{ cursor: "pointer", marginTop: "-55px", textAlign: "center" }}
        >
          {title}
        </h2>
      </div>
  );
};
