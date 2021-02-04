import React, { Component } from "react";
import ButtonGroup from "../shared/button-group";
import {
  CalculatorDisplay,
  CalculatorMode,
  NumpadRowOne,
  NumpadRowTwo,
  NumpadRowThree,
  NumpadRowFour,
} from "./components";
import "./calculator.css";
import { connect } from "react-redux";
import {
  toggleCalculatorMode,
  manageQueue,
  clear,
  updateTotal,
} from "./calculator-actions";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  preProcessOperand = (e) => {
    const {
      target: { value },
    } = e;
    const { input } = this.state;
    if (!(input === "0" && +value === 0))
      this.setState((prevState) => ({ input: prevState.input + value }));
  };

  acceptOperator = (e) => {
    const {
      target: { value },
    } = e;
    const { input } = this.state;
    const updatedInput = input === "" ? 0 : input;
    this.props.handleManageQueue(updatedInput, value);
    this.setState({ input: "" });
  };

  clearCalculator = () => {
    this.setState({ input: "" });
    this.props.handleClear();
  };

  updateInputSign = () => {
    const { input } = this.state;
    const { inputQueue, handleUpdateTotal } = this.props;
    if (input === "" && inputQueue.length === 1) {
      const updatedTotal = +inputQueue[0] * -1;
      handleUpdateTotal(updatedTotal);
      this.setState({ input: "" });
    } else {
      const updatedInput = +input * -1;
      this.setState({ input: updatedInput });
    }
  };

  computeSquareRoot = () => {
    const { input } = this.state;
    const { inputQueue, handleUpdateTotal } = this.props;
    if (input === "" && inputQueue.length === 1) {
      const updatedTotal = Math.sqrt(+inputQueue[0]);
      handleUpdateTotal(updatedTotal);
      this.setState({ input: "" });
    } else {
      const updatedInput = Math.sqrt(+input);
      this.setState({ input: updatedInput });
    }
  };

  computeSquare = () => {
    const { input } = this.state;
    const { inputQueue, handleUpdateTotal } = this.props;
    if (input === "" && inputQueue.length === 1) {
      const updatedTotal = Math.pow(+inputQueue[0], 2);
      handleUpdateTotal(updatedTotal);
      this.setState({ input: "" });
    } else {
      const updatedInput = Math.pow(+input, 2);
      this.setState({ input: updatedInput });
    }
  };

  render() {
    const {
      isDarkTheme,
      isScientificModeEnabled,
      total,
      handleToggleCalculatorMode,
    } = this.props;
    const { input } = this.state;
    return (
      <div className={"calculator " + (isDarkTheme ? "dark" : "light")}>
        <CalculatorDisplay input={input} total={total} />
        <ButtonGroup>
          <CalculatorMode
            isScientificModeEnabled={isScientificModeEnabled}
            handleToggleCalculatorMode={handleToggleCalculatorMode}
            updateInputSign={this.updateInputSign}
            computeSquareRoot={this.computeSquareRoot}
            computeSquare={this.computeSquare}
          />
          <NumpadRowOne
            preProcessOperand={this.preProcessOperand}
            acceptOperator={this.acceptOperator}
          />
          <NumpadRowTwo
            preProcessOperand={this.preProcessOperand}
            acceptOperator={this.acceptOperator}
          />
          <NumpadRowThree
            preProcessOperand={this.preProcessOperand}
            acceptOperator={this.acceptOperator}
          />
          <NumpadRowFour
            clearCalculator={this.clearCalculator}
            preProcessOperand={this.preProcessOperand}
            acceptOperator={this.acceptOperator}
          />
        </ButtonGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.applicationTheme.isDarkTheme,
    isScientificModeEnabled: state.calculator.isScientificModeEnabled,
    total: state.calculator.total,
    inputQueue: state.calculator.inputQueue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleCalculatorMode: () => dispatch(toggleCalculatorMode()),
    handleManageQueue: (operand, operator) =>
      dispatch(manageQueue(operand, operator)),
    handleClear: () => dispatch(clear()),
    handleUpdateTotal: (payload) => dispatch(updateTotal(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
