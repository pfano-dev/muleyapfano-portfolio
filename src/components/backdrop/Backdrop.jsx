import React from "react";
import "./styles.css";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.click}></div>;
}

export default Backdrop;
