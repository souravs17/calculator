import React from "react";
import Button from "../../../shared/button";

const NumpadRowOne = (props) => {
  const { preProcessOperand, acceptOperator } = props;
  return (
    <>
      <Button id="one" name="one" value={"1"} onClick={preProcessOperand} />
      <Button id="two" name="two" value={"2"} onClick={preProcessOperand} />
      <Button id="three" name="three" value={"3"} onClick={preProcessOperand} />
      <Button id="add" name="add" value={"+"} onClick={acceptOperator} />
    </>
  );
};

export default NumpadRowOne;
