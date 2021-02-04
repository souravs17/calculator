export const ENABLE_DARK_MODE = "enableDarkMode";
export const DISABLE_DARK_MODE = "disableDarkMode";

const enableDarkModeAction = () => {
  return {
    type: ENABLE_DARK_MODE,
  };
};

const disableDarkModeAction = () => {
  return {
    type: DISABLE_DARK_MODE,
  };
};

export const enableDarkMode = () => {
  return (dispatch) => {
    dispatch(enableDarkModeAction());
  };
};

export const disableDarkMode = () => {
  return (dispatch) => {
    dispatch(disableDarkModeAction());
  };
};
