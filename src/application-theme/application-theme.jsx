import React, { Component } from "react";
import Button from "../shared/button";
import { connect } from "react-redux";
import { enableDarkMode, disableDarkMode } from "./application-theme-actions";

class ApplicationTheme extends Component {
  componentDidMount() {
    this.updateBackgroundColor();
  }

  componentDidUpdate() {
    this.updateBackgroundColor();
  }

  updateBackgroundColor = () => {
    document.body.style.background = this.props.isDarkTheme ? "#000" : "#fff";
  };

  render() {
    const { handleEnableDarkMode, handleDisableDarkMode } = this.props;
    return (
      <div>
        <Button
          id="lightTheme"
          name="lightTheme"
          value="Light Theme"
          onClick={handleDisableDarkMode}
        />
        <Button
          id="darkTheme"
          name="darkTheme"
          value="Dark Theme"
          onClick={handleEnableDarkMode}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.applicationTheme.isDarkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEnableDarkMode: () => dispatch(enableDarkMode()),
    handleDisableDarkMode: () => dispatch(disableDarkMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTheme);
