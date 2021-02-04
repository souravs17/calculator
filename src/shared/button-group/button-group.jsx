import React from "react";
import "./button-group.css";

const ButtonGroup = (props) => {
  return <div className="button-group">{props.children}</div>;
};

export default ButtonGroup;
