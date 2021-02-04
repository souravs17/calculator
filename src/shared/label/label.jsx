import React from "react";
import "./label.css";
import { connect } from "react-redux";

const Label = (prop) => {
  const { value } = prop;
  return <label className="label">{value}</label>;
};

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.applicationTheme.isDarkTheme,
  };
};

export default connect(mapStateToProps)(Label);
