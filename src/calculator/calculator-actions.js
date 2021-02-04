import { computeInputsBasedOnOperator } from "../shared/services/utility";

export const TOGGLE_CALCULATOR_MODE = "toggleCalculatorMode";
export const PUSH_INTO_QUEUE = "pushIntoQueue";
export const POP_ALL_OUT_OF_QUEUE = "popAllOutOfQueue";
export const POP_OUT_LAST_ENTRY_QUEUE = "popOutLastEntry";
export const UPDATE_TOTAL = "updateTotal";
export const CLEAR = "clear";

const toggleCalculatorModeAction = () => {
  return {
    type: TOGGLE_CALCULATOR_MODE,
  };
};

const pushIntoQueueAction = (payload) => {
  return {
    type: PUSH_INTO_QUEUE,
    payload,
  };
};

const popAllOutQueueAction = (payload) => {
  return {
    type: POP_ALL_OUT_OF_QUEUE,
  };
};

const popOutLastEntryAction = () => {
  return {
    type: POP_OUT_LAST_ENTRY_QUEUE,
  };
};

const updateTotalAction = (payload) => {
  return {
    type: UPDATE_TOTAL,
    payload,
  };
};

const clearAction = () => {
  return {
    type: CLEAR,
  };
};

export const toggleCalculatorMode = () => {
  return (dispatch) => {
    dispatch(toggleCalculatorModeAction());
  };
};

export const manageQueue = (operand, operator) => {
  return (dispatch, getState) => {
    const inputQueue = getState().calculator.inputQueue;
    if (inputQueue.length === 0) {
      dispatch(updateTotalAction(operand));
      dispatch(pushIntoQueueAction(operand));
    } else if (inputQueue.length > 1) {
      if (operand === 0) {
        dispatch(popOutLastEntryAction());
      } else {
        dispatch(popAllOutQueueAction());
        const result = computeInputsBasedOnOperator(
          inputQueue[0],
          operand,
          inputQueue[1]
        );
        dispatch(updateTotalAction(result));
        dispatch(pushIntoQueueAction(result));
      }
    }
    if (operator !== "=") dispatch(pushIntoQueueAction(operator));
  };
};

export const clear = () => {
  return (dispatch) => {
    dispatch(clearAction());
  };
};

export const updateTotal = (payload) => {
  return (dispatch) => {
    dispatch(popAllOutQueueAction());
    dispatch(updateTotalAction(payload));
    dispatch(pushIntoQueueAction(payload));
  };
};
