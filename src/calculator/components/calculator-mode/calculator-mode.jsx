import React from "react";
import Button from "../../../shared/button";

const CalculatorMode = (props) => {
  const {
    isScientificModeEnabled,
    handleToggleCalculatorMode,
    updateInputSign,
    computeSquareRoot,
    computeSquare,
  } = props;
  return (
    <>
      <Button
        value={isScientificModeEnabled ? "Basic Mode" : "Scientific Mode"}
        onClick={handleToggleCalculatorMode}
      />
      {isScientificModeEnabled ? (
        <Button id="sign" name="sign" value={"+/-"} onClick={updateInputSign} />
      ) : (
        <span />
      )}
      {isScientificModeEnabled ? (
        <Button
          id="square"
          name="square"
          value={"Square"}
          onClick={computeSquare}
        />
      ) : (
        <span />
      )}
      {isScientificModeEnabled ? (
        <Button
          id="squareRoot"
          name="squareRoot"
          value={"Square Root"}
          onClick={computeSquareRoot}
        />
      ) : (
        <span />
      )}
    </>
  );
};

export default CalculatorMode;
