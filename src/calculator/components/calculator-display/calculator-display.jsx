import React from "react";
import Label from "../../../shared/label";

const CalculatorDisplay = (props) => {
  const { total, input } = props;
  return <Label value={input === "" ? total : input} />;
};

export default CalculatorDisplay;
