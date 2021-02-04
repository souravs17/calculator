import React from "react";
import Button from "../../../shared/button";

const NumpadRowFour = (props) => {
  const { preProcessOperand, acceptOperator, clearCalculator } = props;
  return (
    <>
      <Button
        id="clear"
        name="clear"
        value={"Clear"}
        onClick={clearCalculator}
      />
      <Button id="zero" name="zero" value={"0"} onClick={preProcessOperand} />
      <Button id="equals" name="equals" value={"="} onClick={acceptOperator} />
      <Button id="divide" name="divide" value={"/"} onClick={acceptOperator} />
    </>
  );
};

export default NumpadRowFour;
