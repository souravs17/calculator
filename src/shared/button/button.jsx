import React from "react";
import "./button.css";
import { connect } from "react-redux";

const Button = (props) => {
  const { id, name, value, onClick, isDarkTheme } = props;
  return (
    <input
      className={"button " + (isDarkTheme ? "dark" : "light")}
      id={id}
      name={name}
      type="button"
      value={value}
      onClick={onClick}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.applicationTheme.isDarkTheme,
  };
};

export default connect(mapStateToProps)(Button);
