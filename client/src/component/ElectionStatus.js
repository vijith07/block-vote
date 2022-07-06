import React from "react";

const ElectionStatus = (props) => {
  const electionStatus = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid grey",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    borderRadius: "0.5em",
    overflow: "auto",
    alignItems: "center",
    justifyContent: "space-around",
    gap:'1rem',
    padding:'1rem',
    width: "32rem",
  };
  return (
    <div
      className="container-main"
      style={{ borderTop: "1px solid", marginTop: "0px" }}
    >
      <h3>Election Status</h3>
      <div style={electionStatus}>
        <p>Started: {props.elStarted ? "True" : "False"}</p>
        <p>Ended: {props.elEnded ? "True" : "False"}</p>
      </div>
    </div>
  );
};

export default ElectionStatus;
