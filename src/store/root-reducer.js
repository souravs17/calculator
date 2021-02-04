import { combineReducers } from "redux";
import { ApplicationThemeReducer } from "../application-theme";
import { CalculatorReducer } from "../calculator";

const RootReducer = combineReducers({
  applicationTheme: ApplicationThemeReducer,
  calculator: CalculatorReducer,
});

export default RootReducer;
