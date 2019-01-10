import React from "react";
import "./Clearbutton.css";

export const Clearbutton = props => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);
