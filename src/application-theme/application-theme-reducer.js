import {
  ENABLE_DARK_MODE,
  DISABLE_DARK_MODE,
} from "./application-theme-actions";

const initialState = {
  isDarkTheme: false,
};

const ApplicationThemeReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ENABLE_DARK_MODE:
      return { ...state, isDarkTheme: true };
    case DISABLE_DARK_MODE:
      return { ...state, isDarkTheme: false };
    default:
      return state;
  }
};

export default ApplicationThemeReducer;
