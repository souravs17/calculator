/* eslint no-eval: 0 */
export const computeInputsBasedOnOperator = (
  firstOperand,
  secondOperand,
  operator
) => {
  const evaluationString = `${firstOperand} ${operator} ${secondOperand}`;
  const result = eval(evaluationString);
  return result;
};
