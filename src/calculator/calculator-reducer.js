import {
  TOGGLE_CALCULATOR_MODE,
  PUSH_INTO_QUEUE,
  POP_ALL_OUT_OF_QUEUE,
  POP_OUT_LAST_ENTRY_QUEUE,
  UPDATE_TOTAL,
  CLEAR,
} from "./calculator-actions";

const initialState = {
  total: 0,
  isOperatorEnabled: false,
  isScientificModeEnabled: false,
  inputQueue: [],
};
const CalculatorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CALCULATOR_MODE:
      return {
        ...state,
        isScientificModeEnabled: !state.isScientificModeEnabled,
      };
    case PUSH_INTO_QUEUE:
      return {
        ...state,
        inputQueue: [...state.inputQueue, payload],
      };
    case POP_ALL_OUT_OF_QUEUE:
      return {
        ...state,
        inputQueue: [],
      };
    case POP_OUT_LAST_ENTRY_QUEUE:
      let newQueue = [...state.inputQueue];
      newQueue.pop();
      return {
        ...state,
        inputQueue: newQueue,
      };

    case UPDATE_TOTAL:
      return {
        ...state,
        total: payload,
      };
    case CLEAR:
      return {
        ...state,
        total: 0,
        inputQueue: [],
      };
    default:
      return state;
  }
};

export default CalculatorReducer;
