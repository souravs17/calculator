import React from "react";
import Button from "../../../shared/button";

const NumpadRowThree = (props) => {
  const { preProcessOperand, acceptOperator } = props;
  return (
    <>
      <Button id="seven" name="seven" value={"7"} onClick={preProcessOperand} />
      <Button id="eight" name="eight" value={"8"} onClick={preProcessOperand} />
      <Button id="nine" name="nine" value={"9"} onClick={preProcessOperand} />
      <Button
        id="multiply"
        name="multiply"
        value={"*"}
        onClick={acceptOperator}
      />
    </>
  );
};

export default NumpadRowThree;
