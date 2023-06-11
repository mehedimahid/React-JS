import React, { Component } from "react";
import ReactDOM from "react-dom";

function Portals() {
  return ReactDOM.createPortal(
    <h1>React Portals</h1>,
    document.getElementById("portals-root")
  );
}

export default Portals;
