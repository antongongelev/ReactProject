import { authoriseThunk } from "./auth-reducer";

const INITIALIZED_SUCCESSFULLY = "INITIALIZED_SUCCESFULLY";

let initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSFULLY: {
      return { ...state, isInitialized: true };
    }
    default:
      return state;
  }
};

export const initializedSuccessfully = () => ({
  type: INITIALIZED_SUCCESSFULLY,
});

export const initialize = () => (dispatch) => {
  Promise.all([dispatch(authoriseThunk())]).then(() =>
    dispatch(initializedSuccessfully())
  );
};

export default appReducer;
