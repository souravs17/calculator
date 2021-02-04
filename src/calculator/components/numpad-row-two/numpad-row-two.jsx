import React from "react";
import Button from "../../../shared/button";

const NumpadRowTwo = (props) => {
  const { preProcessOperand, acceptOperator } = props;
  return (
    <>
      <Button id="four" name="four" value={"4"} onClick={preProcessOperand} />
      <Button id="five" name="five" value={"5"} onClick={preProcessOperand} />
      <Button id="six" name="six" value={"6"} onClick={preProcessOperand} />
      <Button
        id="subtract"
        name="subtract"
        value={"-"}
        onClick={acceptOperator}
      />
    </>
  );
};

export default NumpadRowTwo;
